import React from "react";
import "./Skills.css";

const coreSkills = [
  "Leadership",
  "Problem Solving",
  "Analytical Thinking",
  "Communication",
  "Collaboration",
  "Product Management",
  "Creativity",
  "Attention to Detail",
];

const tools = [
  "Jira",
  "Asana",
  "Trello",
  "Slack",
  "Google Analytics",
  "Salesforce",
  "Figma",
  "Miro",
  "Notion",
  "Adobe Creative Suite",
  "Mailchimp",
  "Hootsuite",
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2>Skills & Expertise</h2>
          <p>
            A fusion of creativity, leadership, and technical precision —
            constantly evolving with purpose and impact.
          </p>
        </div>

        {/* Floating Skill Nodes */}
        <div className="skill-network">
          {coreSkills.map((skill, index) => (
            <div key={index} className={`skill-node node-${index}`}>
              <span>{skill}</span>
            </div>
          ))}
          <div className="skill-center">Core Skills</div>
        </div>

        {/* Glowing Tools Section */}
        <div className="tools-container">
          <h3>Tools & Technologies</h3>
          <div className="glow-tools-grid">
            {tools.map((tool, i) => (
              <div key={i} className="glow-tool">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
