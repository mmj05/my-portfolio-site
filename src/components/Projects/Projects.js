import './Projects.css';
import recipeApp from '../../assets/recipe-app.png';
import loveToRead from '../../assets/love-to-read.png';
import jamming from '../../assets/jamming.png';

const Projects = () => {
    const projects = [
        {
            title: 'Library Store',
            description: `Designed and implemented a user-centric, full-stack library system utilizing React, TypeScript, Spring Boot, PostgreSQL, and Okta authentication. This comprehensive solution optimizes the book selection and borrowing process for an enhanced user experience. Integrated Stripe API to facilitate a streamlined checkout process. Established efficient communication between users and administrators, ensuring prompt issue resolution.`,
            imageUrl: loveToRead,
            githubLink: 'https://github.com/mmj05',
            liveDemoLink: 'https://library-app-pearl.vercel.app/home',
        },
        {
            title: 'Jamming',
            description:
                'Jamming is an interactive web application built using React wheresers can search for songs by title, artist, or album name, thanks to the seamless integration with the Spotify API. Jamming allows users to create personalized playlists by selecting their preferred songs from the search results.',
            imageUrl: jamming,
            githubLink: 'https://github.com/mmj05/jamming',
            liveDemoLink: 'https://jamming-mamming.netlify.app/',
        },
        {
            title: 'Recipe Search App',
            description:
                'The application empowers users to effortlessly search for recipes by dish name or available ingredients, simplifying meal planning. Built using jQuery, it seamlessly melds data from two disparate APIs, providing users with a comprehensive and diverse recipe library that expands their culinary horizons.',
            imageUrl: recipeApp,
            githubLink: 'https://github.com/mmj05/recipe-search-app',
            liveDemoLink: 'https://mmj05.github.io/recipe-search-app/',
        },
    ];

    return (
        <section id='projects' className='projects-section'>
            <h2 className='section-title'>Projects</h2>
            <div className='projects-container'>
                {projects.map((project, index) => (
                    <div className='project' key={index}>
                        <img
                            src={project.imageUrl}
                            alt={`Screenshot of ${project.title}`}
                            className='project-screenshot'
                        />
                        <h3 className='project-title'>{project.title}</h3>
                        <p className='project-description'>
                            {project.description
                                .split(' ')
                                .map((word, wordIndex) => {
                                    if (
                                        word === 'React,' ||
                                        word === 'React' ||
                                        word === 'TypeScript,' ||
                                        word === 'Spring' ||
                                        word === 'Boot,' ||
                                        word === 'PostgreSQL,' ||
                                        word === 'jQuery,'
                                    ) {
                                        return (
                                            <span
                                                key={wordIndex}
                                                className='highlighted-word'
                                            >
                                                {word + ' '}
                                            </span>
                                        );
                                    } else {
                                        return word + ' ';
                                    }
                                })}
                        </p>
                        <div className='project-links'>
                            <a
                                href={project.githubLink}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                GitHub Repo
                            </a>
                            <a
                                href={project.liveDemoLink}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
