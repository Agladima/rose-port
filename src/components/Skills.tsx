import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Project Management",
      icon: "🎯",
      skills: [
        { name: "Agile/Scrum", level: 95 },
        { name: "Risk Management", level: 90 },
        { name: "Resource Planning", level: 88 },
        { name: "Stakeholder Management", level: 92 },
        { name: "Budget Management", level: 85 },
        { name: "Quality Assurance", level: 90 }
      ]
    },
    {
      title: "Growth Marketing",
      icon: "📈",
      skills: [
        { name: "Digital Marketing", level: 92 },
        { name: "Data Analytics", level: 88 },
        { name: "A/B Testing", level: 85 },
        { name: "Customer Acquisition", level: 90 },
        { name: "Conversion Optimization", level: 87 },
        { name: "Marketing Automation", level: 83 }
      ]
    },
    {
      title: "Technical Skills",
      icon: "💻",
      skills: [
        { name: "SQL & Databases", level: 80 },
        { name: "Google Analytics", level: 92 },
        { name: "Tableau/Power BI", level: 85 },
        { name: "HubSpot/Salesforce", level: 88 },
        { name: "Jira/Asana", level: 95 },
        { name: "Python Basics", level: 70 }
      ]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: [
        { name: "Leadership", level: 93 },
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Strategic Thinking", level: 88 },
        { name: "Team Collaboration", level: 92 },
        { name: "Adaptability", level: 89 }
      ]
    }
  ];

  const certifications = [
    {
      name: "Project Management Professional (PMP)",
      issuer: "PMI",
      year: "2023"
    },
    {
      name: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      year: "2022"
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      year: "2023"
    },
    {
      name: "HubSpot Growth-Driven Design",
      issuer: "HubSpot",
      year: "2022"
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header text-center">
          <h2>Skills & Expertise</h2>
          <p>A comprehensive skill set spanning project management, growth marketing, and team leadership</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3>Certifications & Training</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">🏆</div>
                <div className="cert-content">
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tools-section">
          <h3>Tools & Technologies</h3>
          <div className="tools-grid">
            <div className="tool-tag">Jira</div>
            <div className="tool-tag">Asana</div>
            <div className="tool-tag">Trello</div>
            <div className="tool-tag">Slack</div>
            <div className="tool-tag">Google Analytics</div>
            <div className="tool-tag">HubSpot</div>
            <div className="tool-tag">Salesforce</div>
            <div className="tool-tag">Tableau</div>
            <div className="tool-tag">Power BI</div>
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