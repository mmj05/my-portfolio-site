import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Function to toggle the navigation menu
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <header className='header'>
            <h1 className='heading'>
                <a href='#home'>Muhaimin Jobayer</a>
            </h1>
            <div className='navigation'>
                <div class='menu-icon' onClick={toggleNav}>
                    <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
                </div>

                <nav className='nav'>
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
            </div>
        </header>
    );
};

export default Header;
