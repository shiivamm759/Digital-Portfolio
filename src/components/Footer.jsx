import React from 'react';
import { ArrowUp, Code2, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="navbar-brand">
              <span className="brand-icon"><Code2 size={24} /></span>
              <span className="brand-text">Shivam<span className="gradient-text">.dev</span></span>
            </a>
            <p className="footer-tagline">
              Computer Science & Engineering Student | Full Stack & Systems Developer
            </p>
          </div>

          <div className="footer-socials">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-btn" title="Email">
              <Mail size={18} />
            </a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to Top">
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Modern CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
