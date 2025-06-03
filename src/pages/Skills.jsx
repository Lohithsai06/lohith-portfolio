import React from 'react';
import '../styles/Skills.css';
import { Helmet } from 'react-helmet-async';

const programmingSkills = [
  { name: 'JavaScript', icon: <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTdrcXo2bHczNGVtY3V3ajg2cjY0MHBzejQ0dGZtOGNpZXR6ZDhlNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ln7z2eWriiQAllfVcn/giphy.gif" alt="JavaScript" className="skill-icon" /> },
  { name: 'React', icon: <img src="https://media3.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt="React" className="skill-icon" /> },
  { name: 'HTML5', icon: <img src="https://media4.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif" alt="HTML5" className="skill-icon" /> },
  { name: 'CSS3', icon: <img src="https://media1.giphy.com/media/w7j1Bivh2hvIbhDYO8/giphy.gif" alt="CSS3" className="skill-icon" /> },
  { name: 'GitHub', icon: <img src="https://media1.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" alt="GitHub" className="skill-icon" /> },
  { name: 'VS Code', icon: <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnY0a3A5aDkwc3dteHhlaGs4cnp4cGx1dmViOHh2ZXR3anprODAxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IdyAQJVN2kVPNUrojM/giphy.gif" alt="VS Code" className="skill-icon" />},
];

const backendSkills = [
  { name: 'Node.js', icon: <img src="https://media4.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif" alt="Node.js" className="skill-icon" /> },
  { name: 'MongoDB', icon: <img src="https://media0.giphy.com/media/tAjb5pyCEBhEb8jWxC/giphy.gif" alt="MongoDB" className="skill-icon" /> },
  { name: 'Python', icon: <img src="https://media2.giphy.com/media/LMt9638dO8dftAjtco/giphy.gif" alt="Python" className="skill-icon" /> },
  { name: 'Networking', icon: <span className="skill-icon">🌐</span> },
  { name: 'REST APIs', icon: <span className="skill-icon">🔗</span> },
  { name: 'Socket.io', icon: <span className="skill-icon">⚡</span> },
];

const softSkills = [
  { name: 'Problem Solving', icon: <span className="skill-icon">🧠</span> },
  { name: 'Teamwork', icon: <span className="skill-icon">🤝</span> },
  { name: 'Communication', icon: <span className="skill-icon">💬</span> },
  { name: 'Adaptability', icon: <span className="skill-icon">🔄</span> },
  { name: 'Time Management', icon: <span className="skill-icon">⏰</span> },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <Helmet>
        <title>Lohith | Skills</title>
      </Helmet>
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-row">
        <div className="skill-category">
          <h2 className="category-title animated-heading">Programming &amp; Tools</h2>
          <div className="skills-grid">
            {programmingSkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                {skill.icon}
                <span className="skill-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h2 className="category-title animated-heading">Backend &amp; Networking</h2>
          <div className="skills-grid">
            {backendSkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                {skill.icon}
                <span className="skill-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h2 className="category-title animated-heading">Soft Skills</h2>
          <div className="skills-grid">
            {softSkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                {skill.icon}
                <span className="skill-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
