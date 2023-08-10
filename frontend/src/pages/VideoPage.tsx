import { useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'
import NavBar from '../components/NavBar'
import { Button, ButtonGroup, Card, CardBody, Text, ModalCloseButton, useDisclosure, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react'

function transcribe(url: string, callback: (data: string) => void) {
    fetch(import.meta.env.VITE_WHISPER_TRANSCRIPTION_SERVER + "transcribe?url=" + url).then(
        response => {
            if (response.status == 200) {
                response.json().then(value => {
                    callback(value["message"])
                })
            }
        }
    )
}

function getSummary(url: string, callback: (message: string) => void) {
    fetch(import.meta.env.VITE_WHISPER_TRANSCRIPTION_SERVER + "summary?url=" + url).then(
        response => {
            if (response.status == 200) {
                response.json().then(value => {
                    callback(value["message"])
                })
            }
        }
    )
}
// Only loads the YouTube player
export default function VideoPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalText, setModalText] = useState("");
    let { videoId } = useParams();
    let videoUrl = () => 'https://www.youtube.com/watch?v=' + videoId;

    return (
        <div>
            <NavBar pageTitle='Video' />
            <div className='mx-auto p-5 w-100'>
                <ReactPlayer url={videoUrl()} width="100%" />
            </div>
            <ButtonGroup className='px-5' gap={10}>
                <Button onClick={() => transcribe(videoUrl(), (message) => {
                    onOpen();
                    setModalText(message);
                })}>Transcript</Button>
                <Button onClick={() => getSummary(videoUrl(), (message) => {
                    onOpen();
                    setModalText(message);
                })}>Study Material</Button>
            </ButtonGroup>
            <Text fontSize='3xl' fontWeight={'bold'} className='px-5'>Accompanying Material</Text>
            <Card className="mx-8 my-2 p-2">
                <CardBody>
                    <Text>Progress Check 1</Text>
                </CardBody>
            </Card>
            <Card className="mx-8 my-2 p-2">
                <CardBody>
                    <Text>Progress Check 2</Text>
                </CardBody>
            </Card>
            <Card className="mx-8 my-2 p-2">
                <CardBody>
                    <Text>Quiz 1</Text>
                </CardBody>
            </Card>
            <Card className="mx-8 my-2 p-2">
                <CardBody>
                    <Text>Reading</Text>
                </CardBody>
            </Card>
            {/* Modal begins here */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>{modalText}</p>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
// function TranscriptModal({ message }: TranscriptModalProps) {
//     const { isOpen, onClose } = useDisclosure()
//     return (
//         <Modal isOpen={isOpen} onClose={onClose}>
//             <ModalOverlay />
//             <ModalContent>
//                 <ModalHeader>Modal Title</ModalHeader>
//                 <ModalCloseButton />
//                 <ModalBody>
//                     <p>{message}</p>
//                 </ModalBody>

//                 <ModalFooter>
//                     <Button colorScheme='blue' mr={3} onClick={onClose}>
//                         Close
//                     </Button>
//                     <Button variant='ghost'>Secondary Action</Button>
//                 </ModalFooter>
//             </ModalContent>
//         </Modal>
//     )
// }