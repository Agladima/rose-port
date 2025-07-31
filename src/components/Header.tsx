import React, { useState, useEffect } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-text">Ephraim</span>
          </div>

          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => scrollToSection("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </li>
          </ul>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
