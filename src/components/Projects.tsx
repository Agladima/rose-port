import React from 'react';
import './Projects.css';
import projectManagement from '../assets/project-management.jpg';
import growthMarketing from '../assets/growth-marketing.jpg';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform Transformation",
      category: "Project Management",
      image: projectManagement,
      description: "Led the complete digital transformation of a traditional retail business, implementing modern e-commerce solutions and streamlined operations.",
      achievements: [
        "300% increase in online sales within 12 months",
        "Reduced operational costs by 45%",
        "Improved customer satisfaction by 60%",
        "Managed $850K budget across 8 months"
      ],
      technologies: ["Shopify Plus", "Salesforce", "Google Analytics", "Jira"],
      duration: "8 months",
      team: "12 members",
      status: "Completed"
    },
    {
      title: "SaaS Product Growth Campaign",
      category: "Growth Marketing",
      image: growthMarketing,
      description: "Designed and executed a comprehensive growth marketing strategy for a B2B SaaS platform, focusing on user acquisition and retention.",
      achievements: [
        "400% increase in qualified leads",
        "Reduced customer acquisition cost by 35%",
        "Improved retention rate from 65% to 89%",
        "Generated $1.2M in ARR growth"
      ],
      technologies: ["HubSpot", "Mixpanel", "Mailchimp", "LinkedIn Ads"],
      duration: "12 months",
      team: "8 members",
      status: "Completed"
    },
    {
      title: "Mobile App Launch Strategy",
      category: "Project Management",
      image: projectManagement,
      description: "Orchestrated the end-to-end launch of a mobile fitness app, from concept validation to market penetration.",
      achievements: [
        "100K+ downloads in first 3 months",
        "4.8/5 app store rating",
        "Featured in App Store 'New & Noteworthy'",
        "Secured $500K in seed funding"
      ],
      technologies: ["React Native", "Firebase", "App Store Connect", "Trello"],
      duration: "10 months",
      team: "15 members",
      status: "Completed"
    },
    {
      title: "Enterprise CRM Migration",
      category: "Project Management",
      image: projectManagement,
      description: "Managed the complex migration of customer data and processes from legacy systems to Salesforce for a 500+ employee company.",
      achievements: [
        "Zero data loss during migration",
        "98% user adoption within 30 days",
        "40% improvement in sales productivity",
        "Completed 2 weeks ahead of schedule"
      ],
      technologies: ["Salesforce", "Data Loader", "Apex", "Tableau"],
      duration: "6 months",
      team: "10 members",
      status: "Completed"
    },
    {
      title: "Content Marketing Automation",
      category: "Growth Marketing",
      image: growthMarketing,
      description: "Implemented a comprehensive content marketing automation system that scaled content production and distribution across multiple channels.",
      achievements: [
        "500% increase in content output",
        "200% improvement in engagement rates",
        "Reduced content creation time by 60%",
        "Generated 150% more qualified leads"
      ],
      technologies: ["HubSpot", "Buffer", "Canva", "Google Analytics"],
      duration: "4 months",
      team: "6 members",
      status: "Ongoing"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "Project Management",
      image: projectManagement,
      description: "Led the development of a custom analytics dashboard using AI/ML to provide actionable insights for executive decision-making.",
      achievements: [
        "Real-time data processing for 50M+ records",
        "90% reduction in manual reporting time",
        "Improved forecast accuracy by 75%",
        "Adopted by 5 departments company-wide"
      ],
      technologies: ["Python", "Tableau", "AWS", "PostgreSQL"],
      duration: "14 months",
      team: "12 members",
      status: "Ongoing"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header text-center">
          <h2>Featured Projects</h2>
          <p>Showcasing successful project deliveries and growth marketing campaigns</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <span className={`project-status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
                  <div className="meta-item">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">{project.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Team:</span>
                    <span className="meta-value">{project.team}</span>
                  </div>
                </div>

                <div className="project-achievements">
                  <h4>Key Results:</h4>
                  <ul>
                    {project.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$5M+</div>
              <div className="stat-label">Total Value Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Team Members Led</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;