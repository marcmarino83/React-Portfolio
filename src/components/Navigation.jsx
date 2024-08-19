import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className="nav-link">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;