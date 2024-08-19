import Project from '../components/Project';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/image1.png',
      deployedLink: 'https://project1.com',
      repoLink: 'https://github.com/yourusername/project1'
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
