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
                <h1 className="ml-1" style={{ fontSize: 28 }}>{pageTitle}</h1>
                <button className="mr-1" onClick={() => setShowMenu(!showMenu)}><AiOutlineMenu size="42" /></button>
            </header>
            <div>
                {/* Display the menu if showMenu is true, else  don't display it */}
                <ul style={{ display: showMenu ? "block" : "none" }}>
                    <li>
                        <Link to="/home" style={{ fontSize: "24px" }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/groups" style={{ fontSize: "24px" }}>Groups</Link>
                    </li>
                    <li style={{ fontSize: "24px" }}>
                        <Link to="/Notes">
                            Notes
                        </Link>
                    </li>
                    <li>
                        <Link to="/About" style={{ fontSize: "24px" }}>About Us</Link>
                    </li>
                    <li onClick={() => logout()}><a href="/" style={{ fontSize: "24px" }}>Logout</a></li>
                </ul>
            </div>
        </div >
    )
}

export default NavBar