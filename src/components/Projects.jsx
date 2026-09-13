import React, { useState } from 'react';
import { ExternalLink, Calendar, Code2, Layers, X, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <span className="section-subtitle">Portfolio & Systems</span>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-desc">
          Hands-on software development projects demonstrating data structure implementation, systems visualization, and full-stack web applications.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-card-header">
                <div className="project-category-badge">{project.category}</div>
                <div className="project-date">
                  <Calendar size={14} /> {project.date}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-short-desc">{project.shortDescription}</p>

              <div className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-card-actions">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary btn-sm"
                >
                  View Details
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  title="View Source Code on GitHub"
                >
                  <GithubIcon size={16} /> GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            <div className="modal-header">
              <span className="badge">{selectedProject.category}</span>
              <span className="project-modal-date"><Calendar size={14} /> {selectedProject.date}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
            </div>

            <div className="modal-body">
              <p className="modal-full-desc">{selectedProject.description}</p>

              <h4 className="modal-section-heading">Key Features & Architectural Highlights:</h4>
              <ul className="modal-highlights-list">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="highlight-item">
                    <CheckCircle size={16} className="highlight-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="modal-section-heading">Technologies Used:</h4>
              <div className="modal-tech-list">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="tech-badge large">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                <GithubIcon size={18} /> View Code on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
