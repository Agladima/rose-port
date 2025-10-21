import React from "react";
import "./Hero.css";
import profilePhoto from "../assets/profile-photo.jpg";

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="glow-overlay"></div>
      <div className="container hero-grid">
        <div className="text-area">
          <p className="intro">👋 Hello, I’m</p>
          <h1 className="name">Ephraim Ephraim</h1>
          <h2 className="role">Project Manager & Growth Marketer</h2>
          <p className="summary">
            I bring clarity, strategy, and measurable impact to every project.
            With a background in Project & Product Management, Growth Marketing,
            and Brand Activation, I bridge structure with creativity to deliver
            meaningful results.
          </p>
          <div className="buttons">
            <button onClick={() => scrollTo("contact")} className="btn primary">
              Let’s Connect
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="btn secondary"
            >
              View Projects
            </button>
          </div>

          <div className="stats">
            <div>
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Avg Growth Rate</p>
            </div>
            <div>
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="image-area">
          <div className="image-glow"></div>
          <div className="image-ring"></div>
          <img src={profilePhoto} alt="Ephraim" className="profile-photo" />
        </div>
      </div>
      <div className="scroll-down">
        <span>Scroll</span>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
