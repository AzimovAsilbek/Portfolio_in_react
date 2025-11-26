import { useState } from "react";
import { Link } from "react-scroll";
import "../components/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoText = "MyPortfolio";

  return (
    <nav className="header_nav">
      {/* Logo */}
      <div className="logo">
        <Link to="hero" smooth duration={500}>
          {logoText.split("").map((char, index) => (
            <span key={index} className="logo-letter">{char}</span>
          ))}
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className={`ul-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="hero" smooth duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="skills" smooth duration={500} onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link to="projects" smooth duration={500} onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="contact" smooth duration={500} onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      {/* Mobile Hamburger */}
      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
