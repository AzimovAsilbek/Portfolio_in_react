import { Link } from "react-scroll";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    <nav className="header_nav">
      <div className="logo"><Link to="hero" smooth duration={10000}>MyPortfolio</Link></div>

      <ul className="nav-links">
        <li><Link to="hero" smooth duration={500}>Home</Link></li>
        <li><Link to="skills" smooth duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
}
