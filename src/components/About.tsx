import React from "react";
import "./About.css";
import aboutImg from "../assets/delams.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      {/* Intro Section */}
      <div className="about-intro container">
        <div className="about-image">
          <div className="image-frame">
            <img src={aboutImg} alt="Ephraim" className="about-photo" />
            <div className="img-overlay"></div>
          </div>
        </div>

        <div className="about-text">
          <h2 className="about-heading gradient-text">
            Turning Ideas into Impact
          </h2>
          <p>
            I hold a Bachelor in Education and Political Science from the
            University of Calabar and certifications in Product and Project
            Management. I’ve worked across EdTech, Civic-tech, FinTech, and
            Advertisement — leading cross-functional teams, implementing agile
            practices, and creating measurable growth.
          </p>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="about-metrics container">
        {[
          { value: "$2.5M+", label: "Revenue Generated" },
          { value: "15+", label: "Team Members Led" },
          { value: "98%", label: "Project Success Rate" },
          { value: "40%", label: "Efficiency Improvement" },
        ].map((m, i) => (
          <div className="metric-card" key={i}>
            <h3>{m.value}</h3>
            <p>{m.label}</p>
          </div>
        ))}
      </div>

      {/* Strengths */}
      <div className="about-strengths container">
        <div className="strength-card">
          <span className="icon">🎯</span>
          <h4>Strategic Focus</h4>
          <p>Aligning projects with business goals to maximize ROI.</p>
        </div>
        <div className="strength-card">
          <span className="icon">📊</span>
          <h4>Data-Driven</h4>
          <p>Using analytics to guide decisions and optimize results.</p>
        </div>
        <div className="strength-card">
          <span className="icon">🚀</span>
          <h4>Growth Mindset</h4>
          <p>Scaling businesses through innovation and agility.</p>
        </div>
      </div>

      {/* Journey */}
      <div className="about-journey container">
        <h3 className="gradient-text">My Journey</h3>
        <p>
          Over the past 5+ years, I’ve worked in marketing, project management,
          and community building — helping businesses grow while staying true to
          their values. I thrive on translating complex ideas into actionable
          results.
        </p>
      </div>

      {/* Values */}
      <div className="about-values container">
        <h3 className="gradient-text">Core Values</h3>
        <div className="values-grid">
          <div className="value-card">
            <h4>Collaboration</h4>
            <p>Strong partnerships achieve the best outcomes.</p>
          </div>
          <div className="value-card">
            <h4>Innovation</h4>
            <p>Always seeking better ways to solve challenges.</p>
          </div>
          <div className="value-card">
            <h4>Excellence</h4>
            <p>Delivering high-quality results that exceed expectations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
