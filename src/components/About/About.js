import './About.css';
import image from '../../assets/wfh.png';

const About = () => {
    return (
        <section id='about'>
            <h2 className='about-hading'>About Me</h2>
            <div className='flex-container'>
                <div className='about-container'>
                    <p>
                        Hello there! I'm Muhaimin, a software engineer with a
                        knack for crafting high-performance applications that
                        tackle real-world challenges head-on. My journey in the
                        tech world is a thrilling blend of innovation and
                        problem-solving.
                    </p>
                    <p>
                        I often wear the hats of a Full Stack Developer,
                        Front-End Developer, or Back-End Developer, but I don't
                        limit myself to labels; instead, I thrive on the endless
                        possibilities of learning and growing. Embracing change,
                        I relish the challenges that come my way.
                    </p>
                    <p>
                        Through my journey, I've honed my skills in various
                        aspects of web development and design. Now, I'm on a
                        quest to push my boundaries even further. Explore my
                        latest creations in my Portfolio, and dive deeper into
                        my story, experiences, skills, and aspirations in my
                        Resume.
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
