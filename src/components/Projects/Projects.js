import './Projects.css';
import recipeApp from '../../assets/recipe-app.png';
import loveToRead from '../../assets/love-to-read.png';
import jamming from '../../assets/jamming.png';

const Projects = () => {
    const projects = [
        {
            title: 'Library Store',
            description: `The Library Store is a comprehensive web application built using React, TypeScript, Spring Boot, and PostgreSQL. It offers a seamless library experience for both users and administrators.`,
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
                'Recipe Search is a user-friendly web application that leverages the power of jQuery and the RapidAPI integration to provide users with access to millions of delectable recipes at their fingertips.',
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
                                        word === 'PostgreSQL.' ||
                                        word === 'jQuery'
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
