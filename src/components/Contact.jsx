import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
        <p className="section-desc">
          Feel free to reach out for internship opportunities, project collaborations, software engineering roles, or general technical inquiries.
        </p>

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-column">
            <a href={`mailto:${personalInfo.email}`} className="contact-card glass-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Email Address</span>
                <span className="contact-card-value">{personalInfo.email}</span>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="contact-card glass-card">
              <div className="contact-icon-box">
                <Phone size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Phone Number</span>
                <span className="contact-card-value">{personalInfo.phone}</span>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card glass-card"
            >
              <div className="contact-icon-box">
                <LinkedinIcon size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">shivamkumar-lal</span>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card glass-card"
            >
              <div className="contact-icon-box">
                <GithubIcon size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">shiivamm759</span>
              </div>
            </a>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-wrapper glass-card">
            <h3 className="form-title">Send Me a Message</h3>
            
            {submitted ? (
              <div className="success-toast">
                <CheckCircle2 size={32} className="success-icon" />
                <h4 className="toast-title">Message Sent Successfully!</h4>
                <p className="toast-desc">Thank you for reaching out, Shivam will get back to you promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
