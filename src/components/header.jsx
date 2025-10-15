import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import './header.css'

export function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="general">
      <span className="name">IbesiFaustina</span>

      {/* Hamburger icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skill" onClick={() => setIsOpen(false)}>Skill</a></li>
          <li><a href="#project" onClick={() => setIsOpen(false)}>Project</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
