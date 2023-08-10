import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import DefaultData from "../models/DefaultData"
import { Text, Card, CardBody, Button, Input, Modal, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useDisclosure } from "@chakra-ui/react"
import React from "react";

const ClassPage = () => {
    let defaultData = new DefaultData();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { classId } = useParams();
    const [newVideoUrl, setNewVideoUrl] = React.useState("")
    const handleChange = (newValue: any) => setNewVideoUrl(newValue.target.value)

    return (
        <div>
            <NavBar pageTitle="Home" />
            <div id="Layout" className="p-2">
                <input type="text" placeholder="Search for a lecture" className="p-2 border-2 rounded-md"></input>
                <div className="horizontal-scroll-list">
                    <Text fontSize="2xl" className="font-extrabold mt-3">Videos</Text>
                    <Button colorScheme="green" className="mt-4" onClick={onOpen}>Add Video</Button>
                    <div className="thumbnails-container">
                        {defaultData.classes[parseInt(classId ?? "0") - 1].videos.map((element) => {
                            return (
                                <Link to={"/Video/" + element.getYouTubeId()} className="my-3">
                                    <img src={element.getThumbnailUrl()} className="p-4"></img>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <Text fontSize='3xl' fontWeight={'bold'} className='px-5'>Resources</Text>
                    <Card className="m-2" style={{ width: "50%" }}>
                        <CardBody>
                            <Text>Syllabus</Text>
                        </CardBody>
                    </Card>
                    <Card className="m-2" style={{ width: "50%" }}>
                        <CardBody>
                            <Text>Textbook</Text>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add a Video</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input placeholder="YouTube Link" onChange={handleChange}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='green' mr={3} onClick={() => {
                            let newVideo = new Video(newVideoUrl);
                            defaultData.classes[parseInt(classId ?? "0") - 1].addVideo(newVideo)
                            onClose();
                        }}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>

    )
}

export default ClassPage;