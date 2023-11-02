import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Function to toggle the navigation menu
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <header className='header' id='home'>
            <div className='heading'>
                <a href='#home'>{`<MJ/>`}</a>
            </div>
            <div className='navigation'>
                <div className='menu-icon' onClick={toggleNav}>
                    <div className={`bar`}></div>
                    <div className={`bar`}></div>
                    <div className={`bar`}></div>
                </div>
                <nav className={`nav`}>
                        <ul className='nav-list'>
                            <li className='nav-item'>
                                <a href='#about'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#skills'>Skills</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#projects'>Projects</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#contact'>Contact</a>
                            </li>
                        </ul>
                        </nav>

                    {isNavOpen ? (
                      <nav className={`mobile-nav ${isNavOpen ? 'active' : ''}`}>
                        <ul className='mobile-nav-list'>
                            <li onClick={toggleNav} className='mobile-nav-item'>
                                <a href='#about'>About</a>
                            </li>
                            <li onClick={toggleNav} className='mobile-nav-item'>
                                <a href='#skills'>Skills</a>
                            </li>
                            <li onClick={toggleNav} className='mobile-nav-item'>
                                <a href='#projects'>Projects</a>
                            </li>
                            <li onClick={toggleNav} className='mobile-nav-item'>
                                <a href='#contact'>Contact</a>
                            </li>
                        </ul>
                        </nav>
                    ) : null}
                
            </div>
        </header>
    );
};

export default Header;
