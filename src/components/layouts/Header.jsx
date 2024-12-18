import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHome, faUserFriends, faSuitcase, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const navigate = useNavigate();
    const [currentTab , setCurrentTab] = useState("home"); // by default home page will '/' route
    
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 40px", // Increased padding for left and right gaps
                backgroundColor: "#f3f4f6", // Light gray for the navbar background
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
            {/* Logo */}
            <a
                href="https://github.com/Shubhashish-Chakraborty/linkedin-single-page-app"
                target="_bla"
                style={{ textDecoration: "none" }}
            >
                <img src="linkedInNavbarLogo.png" alt="LinkedIn Logo" width="30px" />
            </a>

            {/* Search Bar */}
            <div style={{ display: "flex", alignItems: "center", flexGrow: 1, marginLeft: "20px" }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: "10px", color: "#555" }} />
                <input
                    type="text"
                    placeholder="Search"
                    style={{
                        width: "200px", // Set a fixed width for the search input
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        outline: "none",
                    }}
                />
            </div>
            
            {/* Navigation Buttons */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginLeft: "20px",
                }}
            >
                <button
                    onClick={() => {
                        navigate('/');
                        setCurrentTab("home");
                    }}
                    style={{
                        ...buttonStyle,
                        backgroundColor: currentTab == "home" ? "#b6cdf2" : "white"
                    }}
                >
                    <FontAwesomeIcon icon={faHome} /> <br /> <strong>Home</strong>
                </button>

                <button
                    onClick={() => {
                        navigate('/mynetwork');
                        setCurrentTab("mynetwork");
                    }}
                    style={{
                        ...buttonStyle,
                        backgroundColor: currentTab == "mynetwork" ? "#b6cdf2" : "white"
                    }}
                >
                    <FontAwesomeIcon icon={faUserFriends} /> <br /> <strong>My Network</strong>
                </button>

                <button
                    onClick={() => {
                        navigate('/jobs');
                        setCurrentTab("jobs");
                    }}
                    style={{
                        ...buttonStyle,
                        backgroundColor: currentTab == "jobs" ? "#b6cdf2" : "white"
                    }}
                >
                    <FontAwesomeIcon icon={faSuitcase} /> <br /> <strong>Jobs</strong>
                </button>

                <button
                    onClick={() => {
                        navigate('/messaging');
                        setCurrentTab("messaging");
                    }}
                    style={{
                        ...buttonStyle,
                        backgroundColor: currentTab == "messaging" ? "#b6cdf2" : "white"
                    }}
                >
                    <FontAwesomeIcon icon={faEnvelope} /> <br /> <strong>Messaging</strong>
                </button>

                <button
                    onClick={() => {
                        navigate('/notifications');
                        setCurrentTab("notifications");
                    }}
                    style={{
                        ...buttonStyle,
                        backgroundColor: currentTab == "notifications" ? "#b6cdf2" : "white"
                    }}
                >
                    <FontAwesomeIcon icon={faBell} /> <br /> <strong>Notifications</strong>
                </button>
            </div>
        </div>
    );
}

// Common button styles
const buttonStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 12px",
    // backgroundColor: "#ffffff", // Light button background
    border: "1px solid #ddd", // Subtle border
    borderRadius: "6px",
    fontSize: "12px",
    color: "#333",
    cursor: "pointer",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    transform: "scale(1)", // Initial scale
};

// const buttonHoverStyle = {
//     ...buttonStyle,
//     transform: "scale(1.05)", // Bulging effect on hover
// };

// // Add event listeners for hover effects
// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => {
//     button.addEventListener('mouseenter', () => {
//         button.style.transform = buttonHoverStyle.transform;
//     });
//     button.addEventListener('mouseleave', () => {
//         button.style.transform = buttonStyle.transform;
//     });
// });