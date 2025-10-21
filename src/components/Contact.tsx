"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  CheckCircle2,
  XCircle,
  RefreshCcw,
} from "lucide-react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text(); // read raw text
      let data = null;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("❌ Response not JSON:", text);
      }

      if (res.ok && data?.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  const handleResend = async () => {
    await handleSubmit(new Event("submit") as any);
  };

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "eephraim402@gmail.com",
      link: "mailto:eephraim402@gmail.com",
    },
    {
      icon: <Phone size={22} />,
      label: "Phone",
      value: "+234 813 280 5610",
      link: "tel:+2348132805610",
    },
    {
      icon: <MapPin size={22} />,
      label: "Location",
      value: "Lagos, Nigeria",
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      value: "linkedin.com/in/ephraim-ephraim",
      link: "https://www.linkedin.com/in/ephraim-ephraim-0a80a31b6/",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title gradient-text">Let’s Work Together</h2>
        <p className="contact-subtitle">
          Ready to elevate your next project? Reach out and let’s build
          something extraordinary.
        </p>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-cards">
            {contactInfo.map((info, i) => (
              <div className="contact-card" key={i}>
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <span className="contact-label">{info.label}</span>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="contact-value"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="contact-value">{info.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div className="availability-glow">
              <div className="glow-indicator"></div>
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`contact-btn ${isSubmitting ? "submitting" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send size={18} />}
            </button>

            {submitStatus === "success" && (
              <div className="form-status success">
                <CheckCircle2 size={20} /> Message sent successfully!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="form-status error">
                <XCircle size={20} /> {errorMsg || "Something went wrong."}
                <button
                  type="button"
                  className="resend-btn"
                  onClick={handleResend}
                >
                  <RefreshCcw size={16} /> Resend
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
