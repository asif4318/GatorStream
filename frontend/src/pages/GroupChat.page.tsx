import React, { useRef, useEffect, MutableRefObject } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import io, { Socket } from "socket.io-client";

const GroupChat = () => {
    const userVideo = useRef<HTMLVideoElement>(null);
    const partnerVideo = useRef<HTMLVideoElement>(null);
    const peerRef = useRef<RTCPeerConnection | null>(null);
    const socketRef = useRef<Socket | null>(null);
    const otherUser = useRef<string | null>(null);
    const userStream = useRef<MediaStream | null>(null);
    const senders = useRef<RTCRtpSender[]>([]);
    let { roomID } = useParams();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
            userStream.current = stream;

            socketRef.current = io(import.meta.env.VITE_RTC_SERVER || "http://127.0.0.1:5001");
            socketRef.current.emit("join room", roomID);

            socketRef.current.on('other user', (userID: string) => {
                callUser(userID);
                otherUser.current = userID;
            });

            socketRef.current.on("user joined", (userID: string) => {
                otherUser.current = userID;
            });

            socketRef.current.on("offer", handleReceiveCall);

            socketRef.current.on("answer", handleAnswer);

            socketRef.current.on("ice-candidate", handleNewICECandidateMsg);
        });

    }, []);

    function callUser(userID: string) {
        if (!userStream.current) return;

        peerRef.current = createPeer(userID);
        userStream.current.getTracks().forEach((track) => {
            if (peerRef.current && userStream.current) {
                senders.current.push(peerRef.current.addTrack(track, userStream.current));
            }
        });
    }

    function createPeer(userID?: string) {
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                },
                {
                    urls: 'turn:numb.viagenie.ca',
                    credential: 'muazkh',
                    username: 'webrtc@live.com'
                },
            ]
        });

        peer.onicecandidate = handleICECandidateEvent;
        peer.ontrack = handleTrackEvent;
        if (userID)
            peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

        return peer;
    }

    function handleNegotiationNeededEvent(userID: string) {
        if (!peerRef.current) return;

        peerRef.current.createOffer().then((offer) => {
            return peerRef.current?.setLocalDescription(offer);
        }).then(() => {
            const payload = {
                target: userID,
                caller: socketRef.current?.id,
                sdp: peerRef.current?.localDescription
            };
            socketRef.current?.emit("offer", payload);
        }).catch(e => console.log(e));
    }

    function handleReceiveCall(incoming: { sdp: RTCSessionDescriptionInit, caller: string }) {
        if (!peerRef.current) return;

        peerRef.current = createPeer();
        const desc = new RTCSessionDescription(incoming.sdp);
        peerRef.current.setRemoteDescription(desc).then(() => {
            userStream.current?.getTracks().forEach((track) => {
                if (peerRef.current && userStream.current) {
                    peerRef.current.addTrack(track, userStream.current);
                }
            });
        }).then(() => {
            if (peerRef.current) return peerRef.current.createAnswer();
        }).then((answer) => {
            return peerRef.current?.setLocalDescription(answer);
        }).then(() => {
            const payload = {
                target: incoming.caller,
                caller: socketRef.current?.id,
                sdp: peerRef.current?.localDescription
            };
            socketRef.current?.emit("answer", payload);
        })
    }

    function handleAnswer(message: { sdp: RTCSessionDescriptionInit }) {
        if (!peerRef.current) return;

        const desc = new RTCSessionDescription(message.sdp);
        peerRef.current.setRemoteDescription(desc).catch(e => console.log(e));
    }

    function handleICECandidateEvent(e: RTCPeerConnectionIceEvent) {
        if (!e.candidate || !otherUser.current) return;

        const payload = {
            target: otherUser.current,
            candidate: e.candidate,
        };
        socketRef.current?.emit("ice-candidate", payload);
    }

    function handleNewICECandidateMsg(incoming: RTCIceCandidate) {
        if (!peerRef.current) return;

        const candidate = new RTCIceCandidate(incoming);

        peerRef.current.addIceCandidate(candidate)
            .catch(e => console.log(e));
    }

    function handleTrackEvent(e: RTCTrackEvent) {
        if (partnerVideo.current) {
            partnerVideo.current.srcObject = e.streams[0];
        }
    };

    function shareScreen() {
        navigator.mediaDevices.getDisplayMedia().then((stream) => {
            const screenTrack = stream.getTracks()[0];
            const videoSender = senders.current.find((sender) => sender.track?.kind === 'video');
            if (videoSender) {
                videoSender.replaceTrack(screenTrack);
            }
            screenTrack.onended = function () {
                const videoSender = senders.current.find((sender) => sender.track?.kind === 'video');
                if (videoSender && userStream.current) {
                    videoSender.replaceTrack(userStream.current.getTracks()[1]);
                }
            };
        });
    }

    return (
        <div>
            <video controls style={{ maxWidth: "80%" }} autoPlay ref={userVideo} />
            <video controls style={{ maxWidth: "80%" }} autoPlay ref={partnerVideo} />
            <button onClick={shareScreen}>Share screen</button>
        </div>
    );
};

export default GroupChat;
