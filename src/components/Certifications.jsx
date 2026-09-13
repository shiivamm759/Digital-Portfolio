import React from 'react';
import { Award, Calendar, CheckCircle2, BookOpen, ExternalLink } from 'lucide-react';
import { certifications, training } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <span className="section-subtitle">Credentials & Upskilling</span>
        <h2 className="section-title">Training & <span className="gradient-text">Certifications</span></h2>
        <p className="section-desc">
          Official academic training programs and industry-recognized certifications in software engineering, databases, data structures, and AI.
        </p>

        {/* Featured Summer Training Card */}
        <div className="featured-training-card glass-card">
          <div className="training-badge-bar">
            <span className="badge amber-badge">
              <Award size={15} /> Featured Training
            </span>
            <span className="grade-pill">{training.grade}</span>
          </div>

          <h3 className="training-title">{training.title}</h3>
          <h4 className="training-institution">{training.institution}</h4>
          <span className="training-date"><Calendar size={15} /> {training.duration}</span>

          <div className="training-details">
            {training.details.map((point, index) => (
              <div key={index} className="training-detail-item">
                <CheckCircle2 size={16} className="detail-icon" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card glass-card">
              <div className="cert-card-top">
                <div className="cert-icon-wrapper">
                  <BookOpen size={24} />
                </div>
                <span className="cert-date"><Calendar size={14} /> {cert.date}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <h4 className="cert-issuer">{cert.issuer}</h4>

              <div className="cert-topic-badge">
                <span>{cert.topic}</span>
              </div>

              <div className="cert-card-bottom">
                <span className="badge cert-badge">{cert.badge}</span>
                {cert.grade && <span className="cert-grade-tag">{cert.grade}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
