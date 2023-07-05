import { useState } from "react"

interface NavBarProps {
    pageTitle: string
}

const NavBar = ({ pageTitle }: NavBarProps) => {
    let [showMenu, setShowMenu] = useState(false);

    return (
        <div className="bg-black py-3 px-2 m-0 text-white">
            <header className="menu-bar">
                <h1>{pageTitle}</h1>
                <button onClick={() => setShowMenu(!showMenu)}>Button</button>
            </header>
            <div>
                <ul style={{ display: showMenu ? "block" : "none" }}>
                    <li>Home</li>
                    <li>Groups</li>
                    <li>Notes</li>
                    <li>About Us</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div >
    )
}

export default NavBar