import './Projects.css';
import quizApp from '../../assets/quiz-app.png';
import recipeApp from '../../assets/recipe-app.png';
import loveToRead from '../../assets/love-to-read.png';

const Projects = () => {
    const projects = [
        {
            title: 'Library Store',
            description: 'Description of Project 1.',
            imageUrl: loveToRead,
            githubLink: 'https://github.com/yourusername/project1',
            liveDemoLink: 'https://www.example.com/project1-demo',
        },
        {
            title: 'Recipe Search App',
            description: 'Description of Project 2.',
            imageUrl: recipeApp,
            githubLink: 'https://github.com/mmj05/recipe-search-app',
            liveDemoLink: 'https://mmj05.github.io/recipe-search-app/',
        },
        {
            title: 'Recipe Search App',
            description: 'Description of Project 3.',
            imageUrl: quizApp,
            githubLink: 'https://github.com/mmj05/quiz-app',
            liveDemoLink: 'https://mmj05.github.io/quiz-app/',
        },

    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className='projects-container'>
                {projects.map((project, index) => (
                    <div className='project' key={index}>
                        <img
                            src={project.imageUrl}
                            alt={`Screenshot of ${project.title}`}
                            className='project-screenshot'
                        />
                        <h3 className='project-title'>{project.title}</h3>
                        <p className='project-description'>{project.description}</p>
                        <div className='project-links'>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                GitHub Repository
                            </a>
                            <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
