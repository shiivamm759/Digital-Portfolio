import React, { useState } from 'react';
import { Code2, Terminal, Database, Wrench, Users, Brain, Zap, RefreshCw, Cpu, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const getSkillIcon = (iconName) => {
  switch (iconName) {
    case 'cpp':
    case 'c':
      return <Cpu size={22} />;
    case 'js':
    case 'python':
    case 'java':
    case 'code':
      return <Code2 size={22} />;
    case 'html':
    case 'css':
    case 'layout':
      return <Layers size={22} />;
    case 'mysql':
    case 'mongodb':
      return <Database size={22} />;
    case 'git':
    case 'github':
      return <Terminal size={22} />;
    case 'brain':
    case 'binary':
      return <Brain size={22} />;
    case 'users':
      return <Users size={22} />;
    case 'zap':
      return <Zap size={22} />;
    case 'refresh':
      return <RefreshCw size={22} />;
    default:
      return <Wrench size={22} />;
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillCategories.map(cat => cat.name)];

  const filteredCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.name === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <span className="section-subtitle">Technical Proficiency</span>
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <p className="section-desc">
          Structured overview of programming languages, web technologies, database systems, developer tools, and core engineering competencies.
        </p>

        {/* Category Filters */}
        <div className="skills-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category) => (
            <div key={category.name} className="skill-category-card glass-card">
              <h3 className="category-title">
                <span className="category-indicator"></span> {category.name}
              </h3>

              <div className="skills-item-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-badge-card">
                    <div className="skill-icon-box">
                      {getSkillIcon(skill.icon)}
                    </div>
                    <div className="skill-details">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
