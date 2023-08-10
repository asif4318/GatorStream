import NavBar from '../components/NavBar';



const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
    margin: 0,
    padding: 0,
};

const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
};

const developerListItemStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    margin: '5px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
};

const whoWeAreStyle = {
    fontSize: '20px',
    marginTop: '40px',
    fontWeight: 'bold',
};

const descriptionStyle = {
    fontSize: '18px',
    marginTop: '10px',
};

const AboutUsPage = () => {
    return (
        <div>
            <NavBar pageTitle='About Us' />
            <div style={containerStyle} className='m-4'>
                <div style={headerStyle}>Developers:</div>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    <li style={developerListItemStyle}>Asif Islam</li>
                    <li style={developerListItemStyle}>Micaela McGrath</li>
                    <li style={developerListItemStyle}>Akshat Pant</li>
                    <li style={developerListItemStyle}>Ryan Schooner</li>
                    <li style={developerListItemStyle}>Alice Sun</li>
                </ul>
                <div style={whoWeAreStyle}>Who We Are:</div>
                <div style={descriptionStyle}>
                    A group of computer science students studying at the University of Florida
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;