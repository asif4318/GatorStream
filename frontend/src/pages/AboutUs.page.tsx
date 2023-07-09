import NavBar from '../components/NavBar';


const AboutUsPage = () => {
    return (
        <div>
            <NavBar pageTitle="About Us" />
            <h2>Developers:</h2>
            <ul>
                <li>Asif Islam</li>
                <li>Micaela McGrath</li>
                <li>Akshat Pant</li>
                <li>Ryan Schooner</li>
                <li>Alice Sun</li>
            </ul>
            <h3>Who We Are:</h3>
            <p>A group of computer science students studying at the Univserity of Florida</p>
        </div>
    )
}

export default AboutUsPage;