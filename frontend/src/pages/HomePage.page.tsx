import NavBar from '../components/NavBar';
import "./HomePage.page.css";
import { Link } from 'react-router-dom';
import { Card, CardBody } from "@chakra-ui/react"
import DefaultData from "../models/DefaultData"


const HomePage = () => {
    var defaultData = new DefaultData();
    return (
        <div className='bg-slate-300'>
            <NavBar pageTitle="Home" />
            <div className="home-page">
                <div className="horizontal-scroll-list">
                    <h2 className="font-extrabold flex-auto">Classes</h2>
                    <div className="align-middle justify-center mx-auto">
                        {
                            defaultData.classes.map(element => {
                                return <div className='p-4'>
                                    <Link to={"/Class/" + element.id}>
                                        <Card>
                                            <CardBody>
                                                {element.title}
                                            </CardBody>
                                        </Card>
                                    </Link>
                                </div>
                            })
                        }
                        {/* Add more thumbnails as needed */}
                    </div>
                </div>
                <h2 className='font-extrabold'>Continue Watching</h2>
                <Link to={"/Video/" + defaultData.classes[0].videos[0].getYouTubeId()}>
                    <img src={defaultData.classes[0].videos[0].getThumbnailUrl()} className='h-1/3'></img>
                </Link>
                {/* Add more elements as needed */}
            </div>
        </div>
    );
};

export default HomePage;