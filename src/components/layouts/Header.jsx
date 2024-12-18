import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faHome, faUserFriends, faSuitcase, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <a href="">
                    <img src="linkedInNavbarLogo.png" alt="" width="30px"/>
                </a>

                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Search"/>

                <button onClick={() => {navigate('/')}}>
                    <FontAwesomeIcon icon={faHome} /> <br /> <strong>Home</strong>
                </button>

                <button onClick={() => {navigate('/mynetwork')}}>
                    <FontAwesomeIcon icon={faUserFriends} /> <br /> <strong>My Network</strong>
                </button>

                <button onClick={() => {navigate('/jobs')}}>
                    <FontAwesomeIcon icon={faSuitcase} /> <br /> <strong>Jobs</strong>
                </button>

                <button onClick={() => {navigate('/messaging')}}>
                    <FontAwesomeIcon icon={faEnvelope} /> <br /> <strong>Messaging</strong>
                </button>

                <button onClick={() => {navigate('/notifications')}}>
                    <FontAwesomeIcon icon={faBell} /> <br /> <strong>Notifications</strong>
                </button>
            </div>
        </>
    )
}