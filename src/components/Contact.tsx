import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "eephraim402@gmail.com",
      link: "mailto:eephraim402@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+234 813 280 5610",
      link: "tel:+2348132805610",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Lagos, Nigeria",
      link: null,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/ephraim-ephraim",
      link: "https://www.linkedin.com/in/ephraim-ephraim-0a80a31b6/",
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header text-center">
          <h2>Let's Work Together</h2>
          <p>
            Ready to transform your projects and accelerate growth? Let's
            discuss how I can help.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Get In Touch</h3>
              <p>
                I'm always interested in discussing new opportunities,
                innovative projects, and ways to drive sustainable growth.
                Whether you need project management expertise or growth
                marketing strategies, I'd love to hear from you.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <div className="contact-label">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <div className="contact-value">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability">
              <h4>Availability</h4>
              <p>
                I'm currently available for new projects and opportunities.
                Response time is typically within 24 hours.
              </p>
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="subject">Project Type</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select project type</option>
                  <option value="project-management">Project Management</option>
                  <option value="growth-marketing">Growth Marketing</option>
                  <option value="consulting">Consulting</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div> */}

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, goals, timeline, and how I can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn btn-primary form-submit ${
                  isSubmitting ? "submitting" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="form-message success">
                  ✓ Thank you! Your message has been sent successfully. I'll get
                  back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="form-message error">
                  ✗ Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
