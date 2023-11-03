import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <span>
                        <a href='#home'>Muhaimin Jobayer</a>
                    </span>
                </div>
                <div className='footer-links'>
                    <ul>
                        <li>
                            <a href='#home'>Home</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#portfolio'>Portfolio</a>
                        </li>
                        <li>
                            <a href='#skills'>Skills</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-social'>
                    {/* Add your social media links/icons here */}
                    <a href='https://github.com/mmj05' className='social-icon'>
                        <i class='bi bi-github'></i>
                    </a>

                    <a
                        href='https://www.linkedin.com/in/
muhaimin-jobayer

'
                        className='social-icon'
                    >
                        <i class='bi bi-linkedin'></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
