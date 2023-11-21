import './About.css';
import image from '../../assets/work-from-home.png';

const About = () => {
    return (
        <section id='about'>
            <h2 className='about-heading'>About</h2>
            <div className='flex-container'>
                <div className='about-container'>
                    <p>
                        Greetings! I am Muhaimin, a full-stack software
                        engineer with a focus on <span>React, TypeScript, Java, Spring
                        Boot,</span> and proficient database management using
                        <span> PostgreSQL</span>. My passion lies in crafting
                        seamless user interfaces and architecting robust backend
                        systems, addressing the complexities of modern web
                        development. Over the course of my career, I have
                        continuously honed my skills in various aspects of web
                        development and design. Currently, I am harnessing the
                        capabilities of React and Spring Boot, all while
                        expanding my proficiency with the integration of new
                        tools and technologies.
                    </p>
                </div>
                <div className='pic-container'>
                    <img
                        src={image}
                        alt='work-from-home'
                        className='about-dp'
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
