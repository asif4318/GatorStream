import React from 'react';
import NavBar from '../components/NavBar';
import "./HomePage.page.css";
import thumbnail from "../assets/thumbnail.png";
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
            <NavBar pageTitle="Home" />
            <div className="home-page">
                <div className="horizontal-scroll-list">
                    <h2 className="font-extrabold">Classes</h2>
                    <div className="thumbnails-container">
                        <Link to="/Class"><img src={thumbnail} /></Link>
                        <img src={thumbnail} />
                        <img src={thumbnail} />
                        <img src={thumbnail} />
                        <img src={thumbnail} />
                        {/* Add more thumbnails as needed */}
                    </div>
                </div>
                <div className="vertical-scroll-list">
                    <h2 className='font-extrabold'>Continue Watching</h2>
                    <ul className="elements-list">
                        <li>Element 1</li>
                        <li>Element 2</li>
                        <li>Element 3</li>
                        <li>Element 4</li>
                        <li>Element 5</li>
                        {/* Add more elements as needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomePage;