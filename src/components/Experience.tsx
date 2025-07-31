import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Project Manager & Growth Lead",
      company: "TechFlow Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led cross-functional teams of 12+ members to deliver 15 high-impact projects worth $1.2M+",
        "Implemented growth strategies that increased user acquisition by 250% in 18 months",
        "Reduced project delivery time by 35% through process optimization and agile methodologies",
        "Managed product launches reaching 100K+ users with 98% uptime"
      ]
    },
    {
      title: "Project Manager & Marketing Specialist",
      company: "Digital Innovations Inc.",
      period: "2020 - 2022",
      location: "New York, NY",
      achievements: [
        "Coordinated 8 concurrent projects with budgets ranging from $50K to $300K",
        "Developed and executed marketing campaigns that generated $800K in revenue",
        "Improved customer retention rate by 45% through data-driven engagement strategies",
        "Established project management frameworks adopted across 3 departments"
      ]
    },
    {
      title: "Junior Project Coordinator",
      company: "StartUp Accelerator",
      period: "2019 - 2020",
      location: "Austin, TX",
      achievements: [
        "Supported 20+ startup projects from ideation to market launch",
        "Organized investor pitch events with 90% funding success rate",
        "Created project tracking systems that improved transparency by 60%",
        "Mentored 5 junior team members in project management best practices"
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header text-center">
          <h2>Professional Experience</h2>
          <p>A track record of delivering exceptional results across diverse industries</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">{exp.company}</div>
                  </div>
                  <div className="experience-meta">
                    <div className="experience-period">{exp.period}</div>
                    <div className="experience-location">{exp.location}</div>
                  </div>
                </div>
                <div className="experience-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-icon">📈</div>
              <h4>Revenue Impact</h4>
              <p>Generated over $2.5M in revenue through strategic project delivery and growth initiatives</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">⚡</div>
              <h4>Efficiency Gains</h4>
              <p>Consistently improved operational efficiency by 30-40% through process optimization</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">👥</div>
              <h4>Team Leadership</h4>
              <p>Led diverse teams ranging from 5-15 members across multiple departments and time zones</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🎯</div>
              <h4>Success Rate</h4>
              <p>Maintained 98% project success rate while consistently delivering on time and under budget</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;