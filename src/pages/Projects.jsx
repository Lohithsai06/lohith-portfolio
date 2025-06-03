import React from 'react';
import '../styles/Projects.css';
import mindSpendImg from '../assets/mindspend.png';
import glowDropImg from '../assets/glowdrop.png';
import shareBlastImg from '../assets/shareblast.png';
import { Helmet } from 'react-helmet-async';

const projects = [
  {
    image: mindSpendImg,
    title: 'MindSpend',
    description: 'A productivity and habit-tracking app that helps users manage their time and build better habits with analytics and reminders.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    role: ' Full-stack dev (backend logic + AI integration)',
    github: 'https://github.com/NothingADSR123/Code4orce_MIT',
  },
  {
    image: glowDropImg,
    title: 'GlowDrop',
    description: 'A real-time chat and collaboration platform with glowing UI, file sharing, and group video calls.',
    tech: ['React', 'Socket.io', 'Node.js', 'CSS'],
    role: 'Backend + Real-time file sharing logic',
    github: 'https://github.com/Lohithsai06/GlowDrop-offline-file-sharing-',
  },
  {
    image: shareBlastImg,
    title: 'ShareBlast',
    description: 'A social media sharing tool that lets users schedule, analyze, and blast content across multiple platforms.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    role: 'Backend + real-time messaging and UI/UX design',
    github: 'https://github.com/Lohithsai06/Shareblast-A-offline-messaging-app-',
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <Helmet>
        <title>Lohith | Projects</title>
      </Helmet>
      <h1 className="projects-title">My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card fadeInUp" key={project.title}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              <b>Tech Stack:</b> {project.tech.join(', ')}
            </div>
            <div className="project-role">
              <b>Role:</b> {project.role}
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
                tabIndex={0}
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
