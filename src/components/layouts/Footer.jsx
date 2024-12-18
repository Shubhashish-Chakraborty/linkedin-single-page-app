import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub,faUpwork } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h2 className="footer-heading">Reach me Out!</h2>
                <div className="social-icons">
                    <a href="https://twitter.com/__Shubhashish__" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://instagram.com/___shubhashish___" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://linkedin.com/in/Shubhashish-Chakraborty" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/Shubhashish-Chakraborty" target="_blank" rel="noopener noreferrer" className="social-icon github">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~018880ca3d0d892eac" target="_blank" rel="noopener noreferrer" className="social-icon upwork">
                        <FontAwesomeIcon icon={faUpwork} size="2x" />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Shubhashish Chakraborty. All rights reserved.</p>
            </div>
        </footer>
    );
};
