import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="about-hero">
        <div className="about-image">
          <img src="/favicon.jpg" alt="Your Name" />
        </div>
        <div className="about-intro-text">
          <h2>Turning Ideas into Impact</h2>
          <p>
            I hold a Bachelor in Education and Political Science from the
            University of Calabar and have earned certifications in both Product
            and Project Management. Over the years, I have gained extensive
            experience across diverse sectors, including EdTech, Civic-tech,
            FinTech and Advertisement. Currently, I freelance as a Project
            Manager, where I lead cross-functional teams, implement agile
            practices, and ensure impactful outcomes.
          </p>
        </div>
      </div>

      <div className="about-metrics">
        <div className="metric">
          <h3>$2.5M+</h3>
          <p>Revenue Generated</p>
        </div>
        <div className="metric">
          <h3>15+</h3>
          <p>Team Members Led</p>
        </div>
        <div className="metric">
          <h3>98%</h3>
          <p>Project Success Rate</p>
        </div>
        <div className="metric">
          <h3>40%</h3>
          <p>Efficiency Improvement</p>
        </div>
      </div>

      <div className="about-strengths">
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

      <div className="about-story">
        <h3>My Journey</h3>
        <p>
          Over the past 5+ years, I’ve worked across marketing, project
          management, and community building — helping businesses and
          organizations grow while staying true to their values.
        </p>
      </div>

      <div className="about-values">
        <h3>Core Values</h3>
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
