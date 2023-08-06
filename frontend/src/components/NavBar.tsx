import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';

interface NavBarProps {
    pageTitle: string
}

const NavBar = ({ pageTitle }: NavBarProps) => {
    let [showMenu, setShowMenu] = useState(false);
    const { logout } = useAuth0();

    return (
        <div className="bg-black py-3 px-2 m-0 text-white transition ease-in-out delay-150 duration-1000">
            <header className="menu-bar">
                <h1 className="ml-1">{pageTitle}</h1>
                <button className="mr-1" onClick={() => setShowMenu(!showMenu)}><AiOutlineMenu /></button>
            </header>
            <div>
                {/* Display the menu if showMenu is true, else  don't display it */}
                <ul style={{ display: showMenu ? "block" : "none" }}>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/groups">Groups</Link>
                    </li>
                    <li>Notes</li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li onClick={() => logout()}><a href="">Logout</a></li>
                </ul>
            </div>
        </div >
    )
}

export default NavBar