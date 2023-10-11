
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    {/* Add your logo or footer branding here */}
                    <span>Your Logo</span>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    {/* Add your social media links/icons here */}
                    <a href="#" className="social-icon">
                    <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="social-icon">
                    <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" className="social-icon">
                    <i class="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
