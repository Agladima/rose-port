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
        "Led cross-functional planning and execution of a 2-day summit in Lagos (1,200+ attendees, 37 speakers, 20 partners, 8 exhibitors), managing 7 team leads and a 30+ member team for seamless pre-event planning and on-ground delivery.",
        "Secured strategic partnerships and collaborations with 20+ brands and organizations, designed event flow and master plan, and aligned goals across multiple teams to meet timelines and impact targets.",
        "Oversaw operations, risk management, and performance tracking using Asana, Google Sheets, and Zoho, ensuring real-time issue resolution and an exceptional experience for guests and stakeholders.",
      ],
    },
    {
      title: "Programs Associate",
      company: "Co-creation HUB",
      period: "01/2025 - 05/2025",
      location: "Lagos, Nigeria",
      achievements: [
        "Managed and supported a virtual network of 18 Campus Ambassadors across six universities, tracking KPIs via a performance dashboard, ensuring program accountability, and facilitating the launch of campus-based Online Safety Communities.",
        "Coordinated and executed nationwide Safe Online digital literacy initiatives, educating 11,000+ Nigerians through trainings, campus pop-up events, and stakeholder collaborations, while overseeing logistics, budgeting, and publicity.",
        "Led data collection, monitoring, and reporting, including EdTech Readiness Surveys, ongoing M&E surveys, and comprehensive program reports with actionable recommendations for improved student digital safety engagement.",
      ],
    },
    {
      title: "Programs/Operations Officer",
      company: "Civic-Verse[PoliZ]",
      period: "2024",
      location: "Lagos, Nigeria",
      achievements: [
        "Oversaw program development and operations for PoliZ, ensuring alignment with its mission to make policy and governance accessible and engaging.",
        "Coordinated logistics, partnerships, and communications, while leading operational strategy to enhance program scalability and impact in civic engagement and policy.",
        "Managed and executed key initiatives—including virtual workshops, community hangouts, and Twitter Spaces—driving active participation and community growth.",
      ],
    },
    {
      title: "Business Development Manager",
      company: "Opay",
      period: "12/2023 - 03/2024",
      location: "Lagos, Nigeria",
      achievements: [
        "Led and supported ambassadors to stay on track with objectives, fostering continuous engagement and performance improvements.",
        "Implemented an efficient ambassador tracking system to identify inactivity, boost task performance, and ensure alignment with company goals.",
        "Generated high-quality leads with strong conversion rates, driving sales growth and increased product adoption in the designated area.",
      ],
    },
    {
      title: "Business Development Officer",
      company: "Cybertron Advertising Agency",
      period: "2024",
      location: "Lagos, Nigeria",
      achievements: [
        "Collaborated with screen owners to oversee and optimize screen performance, driving growth through effective client engagement.",
        "Led B2B and B2C sales efforts for digital out-of-home advertising, focusing on strategic lead generation and high conversion rates.",
        "Managed client relationships and sales pipelines, delivering tailored advertising solutions for businesses via programmatic digital screens.",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header text-center">
          <h2>Professional Experience</h2>
          <p>
            A track record of delivering exceptional results across diverse
            industries
          </p>
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

        <div className="text-center" style={{ marginTop: "30px" }}>
          <a
            href="/cv.pdf"
            download="Ephraim.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            See More / Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
