import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <span className="section-subtitle">Academic Journey</span>
        <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        <p className="section-desc">
          Formal academic background and qualification timeline in Computer Science and secondary education.
        </p>

        <div className="education-timeline">
          {education.map((item, index) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot">
                  <GraduationCap size={18} />
                </div>
                {index !== education.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <h4 className="timeline-institution">{item.institution}</h4>
                  </div>
                  <span className="badge timeline-badge">{item.grade}</span>
                </div>

                <div className="timeline-meta">
                  <span className="meta-item">
                    <Calendar size={15} /> {item.duration}
                  </span>
                  <span className="meta-item">
                    <MapPin size={15} /> {item.location}
                  </span>
                  <span className="meta-item status-tag">
                    <BookOpen size={15} /> {item.status}
                  </span>
                </div>

                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
