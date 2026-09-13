import React from 'react';
import { Download, GraduationCap, Code2, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <span className="section-subtitle">Get to Know Me</span>
        <h2 className="section-title">About <span className="gradient-text">Shivam</span></h2>

        <div className="about-grid">
          <div className="about-text-content glass-card">
            {personalInfo.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-bullets">
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>Specialized in C++, Data Structures & Algorithms</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>Operating Systems & Systems Programming focus</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>Full Stack Web Development & Database Design</span>
              </div>
            </div>

            <div className="about-action">
              <a href={personalInfo.cvPath} download className="btn btn-primary">
                <Download size={18} /> Download Official CV
              </a>
            </div>
          </div>

          <div className="about-stats-column">
            <div className="stat-card glass-card">
              <div className="stat-icon-wrapper cyan">
                <GraduationCap size={28} />
              </div>
              <div className="stat-info">
                <span className="stat-number">B.Tech CSE</span>
                <span className="stat-label">Lovely Professional University</span>
              </div>
            </div>

            <div className="stat-card glass-card">
              <div className="stat-icon-wrapper purple">
                <Code2 size={28} />
              </div>
              <div className="stat-info">
                <span className="stat-number">100+ Solved</span>
                <span className="stat-label">LeetCode Problem Solving</span>
              </div>
            </div>

            <div className="stat-card glass-card">
              <div className="stat-icon-wrapper amber">
                <Award size={28} />
              </div>
              <div className="stat-info">
                <span className="stat-number">Grade 'A'</span>
                <span className="stat-label">Summer Training in Data Structures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
