import PropTypes from 'prop-types';
import './Project.css'; // Optional: if you have specific styles for Project component

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">
          View Deployed App
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
          View GitHub Repo
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired
};

export default Project;
