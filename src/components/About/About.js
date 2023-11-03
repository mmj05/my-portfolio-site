import './About.css';
import image from '../../assets/work-from-home.png';

const About = () => {
    return (
        <section id="about">
            <h2 className="about-heading">About</h2>
            <div className="flex-container">
                <div className="about-container">
                    <p>
                        Greetings! I am Muhaimin, a software engineer
                        specializing in the development of high-performance
                        applications designed to address complex real-world
                        challenges. With a versatile skill set spanning Full Stack, Front-End, and Back-End, I embrace continuous learning, thriving on demanding obstacles. 
                    </p>
                    <p>
                        Throughout my career, I have diligently refined my
                        expertise in various facets of web development and
                        design. Currently, I am leveraging the power of React and Spring Boot while continually broadening my expertise with new tools and technologies.
                    </p>
                </div>
                <div className="pic-container">
                    <img
                        src={image}
                        alt="work-from-home"
                        className="about-dp"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
