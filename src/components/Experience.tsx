import React from "react";
import "./Experience.css";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Project Manager",
      company: "African Work Summit",
      period: "2025",
      location: "Lagos, Nigeria",
      achievements: [
        "Led a 2-day summit in Lagos (1,200+ attendees, 37 speakers, 20 partners, 8 exhibitors).",
        "Secured 20+ brand collaborations and managed 30+ team members for seamless delivery.",
        "Oversaw operations and performance tracking using Asana, Zoho, and Google Sheets.",
      ],
    },
    {
      title: "Programs Associate",
      company: "Co-creation HUB",
      period: "01/2025 - 05/2025",
      location: "Lagos, Nigeria",
      achievements: [
        "Managed 18 Campus Ambassadors across 6 universities, ensuring KPI accountability.",
        "Executed Safe Online initiatives educating 11,000+ Nigerians nationwide.",
        "Led M&E data reporting and produced strategic improvement recommendations.",
      ],
    },
    {
      title: "Programs/Operations Officer",
      company: "Civic-Verse [PoliZ]",
      period: "2024",
      location: "Lagos, Nigeria",
      achievements: [
        "Directed program operations aligning civic engagement goals with execution.",
        "Managed workshops, hangouts, and Twitter Spaces to drive community growth.",
      ],
    },
    {
      title: "Business Development Manager",
      company: "Opay",
      period: "12/2023 - 03/2024",
      location: "Lagos, Nigeria",
      achievements: [
        "Implemented an ambassador tracking system improving task performance.",
        "Generated leads and boosted sales growth through strategic territory management.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <h2>Professional Experience</h2>
        <p>
          From startups to organizations — leading teams, driving growth, and
          delivering impact.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-card ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <div className="timeline-meta">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <h3>{exp.title}</h3>
              <p className="location">{exp.location}</p>
              <ul>
                {exp.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>

      <div className="download-btn">
        <a href="/cv.pdf" download="Ephraim.pdf" className="btn-glow">
          Download Full CV
        </a>
      </div>
    </section>
  );
};

export default Experience;
