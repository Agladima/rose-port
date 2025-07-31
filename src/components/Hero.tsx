import React from "react";
import "./Hero.css";
import profilePhoto from "../assets/profile-photo.jpg";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">Ephraim Ephraim</h1>
            <h2 className="hero-title">Project Manager & Growth Marketer</h2>
            <p className="hero-description">
              Driving digital transformation and sustainable growth through
              strategic project management and data-driven marketing
              initiatives. I help businesses scale efficiently while delivering
              exceptional user experiences.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <button className="btn btn-outline" onClick={scrollToProjects}>
                View My Work
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">300%</span>
                <span className="stat-label">Avg Growth Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={profilePhoto} alt="Lamar" />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
