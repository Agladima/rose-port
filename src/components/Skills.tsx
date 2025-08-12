import React from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  const skills = [
    "Active Collaboration",
    "Team Player",
    "Problem Solving & Analytical Thinking",
    "Solution Driven",
    "Excellent Orator & Presentation Skills",
    "Product Management",
    "Organisational Skills",
    "Proactive & Coaching Style Leadership",
    "Google Suites",
    "Microsoft Word & Excel",
    "Google Slides & Docs",
    "Google Sheets",
    "Creative Writing",
    "Expert Attention to Detail",
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <h2>Skills & Expertise</h2>
          <p>
            A versatile skill set combining leadership, problem-solving, and
            technical proficiency
          </p>
        </div>

        {/* Skills Grid */}
        <div className="simple-skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="simple-skill-card">
              <span className="skill-bullet">✔</span> {skill}
            </div>
          ))}
        </div>

        {/* Tools Section (unchanged) */}
        <div className="tools-section">
          <h3>Tools & Technologies</h3>
          <div className="tools-grid">
            <div className="tool-tag">Jira</div>
            <div className="tool-tag">Asana</div>
            <div className="tool-tag">Trello</div>
            <div className="tool-tag">Slack</div>
            <div className="tool-tag">Google Analytics</div>
            <div className="tool-tag">Salesforce</div>
            <div className="tool-tag">Figma</div>
            <div className="tool-tag">Miro</div>
            <div className="tool-tag">Notion</div>
            <div className="tool-tag">Adobe Creative Suite</div>
            <div className="tool-tag">Mailchimp</div>
            <div className="tool-tag">Hootsuite</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
