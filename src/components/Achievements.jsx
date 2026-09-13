import React from 'react';
import { Award, Code2, CheckCircle, Trophy, Star } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <span className="section-subtitle">Milestones & Honors</span>
        <h2 className="section-title">Key <span className="gradient-text">Achievements</span></h2>
        <p className="section-desc">
          Verified academic and technical milestones reflecting consistent problem-solving dedication and competitive performance.
        </p>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <div key={item.id} className="achievement-card glass-card">
              <div className="achievement-header">
                <div className="achievement-icon-box">
                  {item.icon === 'award' ? <Award size={28} /> : <Code2 size={28} />}
                </div>
                <span className="achievement-stat-pill">{item.stat}</span>
              </div>

              <span className="achievement-category">{item.category}</span>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>

              <div className="achievement-footer">
                <span className="verified-badge">
                  <CheckCircle size={14} /> Verified Milestone
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
