import React from "react";
import "./Projects.css";
import projectManagement from "../assets/project-management.jpg";
import growthMarketing from "../assets/growth-marketing.jpg";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform Transformation",
      category: "Project Management",
      image: projectManagement,
      description:
        "Led the complete digital transformation of a retail business, building a seamless e-commerce experience with optimized operations.",
      achievements: [
        "300% increase in online sales",
        "Reduced operational costs by 45%",
        "Improved customer satisfaction by 60%",
      ],
      technologies: ["Shopify Plus", "Salesforce", "Google Analytics", "Jira"],
      status: "Completed",
    },
    {
      title: "SaaS Product Growth Campaign",
      category: "Growth Marketing",
      image: growthMarketing,
      description:
        "Designed a data-driven growth marketing strategy for a B2B SaaS platform, achieving exponential lead and retention growth.",
      achievements: [
        "400% increase in qualified leads",
        "35% lower acquisition cost",
        "Generated $1.2M in ARR growth",
      ],
      technologies: ["HubSpot", "Mixpanel", "Mailchimp", "LinkedIn Ads"],
      status: "Completed",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "Project Management",
      image: projectManagement,
      description:
        "Developed an AI-driven analytics platform to visualize and interpret enterprise data for actionable decision-making.",
      achievements: [
        "Real-time data processing for 50M+ records",
        "90% reduction in reporting time",
        "Improved forecast accuracy by 75%",
      ],
      technologies: ["Python", "Tableau", "AWS", "PostgreSQL"],
      status: "Ongoing",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "$5M+", label: "Value Delivered" },
    { number: "98%", label: "Success Rate" },
    { number: "100+", label: "Team Members Led" },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>
            Transformative solutions that blend creativity, leadership, and
            measurable results.
          </p>
        </div>

        <div className="projects-showcase">
          {projects.map((p, i) => (
            <div key={i} className="project-card futuristic-card">
              <div className="project-thumb">
                <img src={p.image} alt={p.title} />
                <div className="glow-overlay" />
                <span className={`status-tag ${p.status.toLowerCase()}`}>
                  {p.status}
                </span>
              </div>

              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="description">{p.description}</p>

                <ul className="achievement-list">
                  {p.achievements.map((a, idx) => (
                    <li key={idx}>✓ {a}</li>
                  ))}
                </ul>

                <div className="tech-list">
                  {p.technologies.map((t, idx) => (
                    <span key={idx} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="achievements-bar">
          {stats.map((s, i) => (
            <div key={i} className="achieve-block">
              <h3>{s.number}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
