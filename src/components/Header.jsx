import './Header.css';
import avatar from '../assets/images/avatar.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">My Portfolio</div>
      <img src={avatar} alt="Avatar" className="avatar" />
    </header>
  );
};

export default Header;
