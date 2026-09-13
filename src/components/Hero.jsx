import React from 'react';
import { Download, FolderGit2, Mail, Phone, ArrowRight, Award, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="badge-pulsing-dot"></span>
            <Code2 size={15} /> Computer Science & Engineering Student
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-title">{personalInfo.title}</h2>

          <p className="hero-tagline">{personalInfo.tagline}</p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              <FolderGit2 size={18} /> View My Projects <ArrowRight size={16} />
            </a>

            <a href={personalInfo.cvPath} download className="btn btn-secondary">
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect with me:</span>
            <div className="social-links">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-btn"
                title="Send Email"
              >
                <Mail size={20} />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="social-btn"
                title="Call Shivam"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Photo & Image Card */}
        <div className="hero-visual">
          <div className="photo-card-wrapper">
            <div className="photo-glow-effect"></div>
            <div className="photo-frame">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="hero-photo"
              />
            </div>

            {/* Floating Info Badges */}
            <div className="floating-badge badge-leetcode">
              <span className="floating-icon">⚡</span>
              <div>
                <span className="floating-title">100+ Solved</span>
                <span className="floating-subtitle">LeetCode DSA</span>
              </div>
            </div>

            <div className="floating-badge badge-grade">
              <Award size={18} className="text-amber" />
              <div>
                <span className="floating-title">Grade 'A'</span>
                <span className="floating-subtitle">LPU DSA Training</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
