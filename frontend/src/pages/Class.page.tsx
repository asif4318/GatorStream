import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import thumbnail from "../assets/thumbnail.png";

const ClassPage = () => {
    return (
        <div>
            <NavBar pageTitle="Home" />
            <div id="Layout" className="m-2">
                <input type="text" placeholder="Search for a lecture" className="p-2 border-2 rounded-md"></input>
                <div className="horizontal-scroll-list">
                    <h2 className="font-extrabold">Playlists</h2>
                    <div className="thumbnails-container">
                        <Link to="/Playlist"><img src={thumbnail} /></Link>
                        <img src={thumbnail} />
                        <img src={thumbnail} />
                        <img src={thumbnail} />
                        <img src={thumbnail} />
                        {/* Add more thumbnails as needed */}
                    </div>
                </div>
                <div>
                    <h2 className="font-extrabold">Resources</h2>
                    <ul>
                        <li>Textbook</li>
                        <li>Syllabus</li>
                        <li>Supplamental Materials</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ClassPage;