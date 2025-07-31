import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header text-center">
          <h2>About Me</h2>
          <p>Passionate about driving results through strategic planning and innovative marketing</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Bridging Strategy and Execution</h3>
              <p>
                With over 5 years of experience in project management and growth marketing, 
                I specialize in transforming ambitious ideas into successful realities. My unique 
                approach combines analytical thinking with creative problem-solving to deliver 
                measurable results.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Strategic Focus</h4>
                  <p>Aligning project goals with business objectives to maximize impact and ROI.</p>
                </div>
              </div>
              
              <div className="highlight">
                <div className="highlight-icon">📊</div>
                <div className="highlight-content">
                  <h4>Data-Driven Decisions</h4>
                  <p>Leveraging analytics and metrics to guide strategy and optimize performance.</p>
                </div>
              </div>
              
              <div className="highlight">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Growth Mindset</h4>
                  <p>Continuously seeking innovative approaches to scale businesses efficiently.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-achievements">
            <h3>Key Achievements</h3>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-number">$2.5M+</div>
                <div className="achievement-label">Revenue Generated</div>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">15+</div>
                <div className="achievement-label">Team Members Led</div>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">98%</div>
                <div className="achievement-label">Project Success Rate</div>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">40%</div>
                <div className="achievement-label">Avg. Efficiency Improvement</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h3>My Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <h4>Collaboration</h4>
              <p>Building strong relationships and fostering teamwork to achieve shared goals.</p>
            </div>
            <div className="value-card">
              <h4>Innovation</h4>
              <p>Embracing new technologies and methodologies to stay ahead of the curve.</p>
            </div>
            <div className="value-card">
              <h4>Excellence</h4>
              <p>Delivering high-quality results that exceed expectations and drive success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;