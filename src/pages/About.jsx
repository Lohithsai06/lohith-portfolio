import React from 'react';
import '../styles/About.css';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <section className="about-section">
      <Helmet>
        <title>Lohith | About</title>
      </Helmet>
      {/* Left-side icons */}
      <div className="about-icons-left">
     
      </div>
      <div className="about-content">
        <div className="about-left">
          <h1 className="about-heading animated-heading">About Me</h1>
          <div className="about-description">
          I'm a dedicated full-stack developer with a strong passion for backend systems, real-time communication, and building impactful digital experiences. My work reflects a balance of clean code, performance, and practicality — whether it's crafting secure REST APIs, enabling LAN-based communication, or visualizing complex algorithms.
          </div>
          <div className="skills-container">
            <div className="about-box education-box">
              <h2 className="animated-heading">Education</h2>
              <ul>
                <li>🎓 <b>B.Tech in Information Science</b> – Brindavan Group of Institutions (Expected 2026)</li>
                <li>🏫 <b>2nd PUC</b> – Government Pre-University College, Yelahanka,Bangalore (2022)</li>
              </ul>
            </div>
            <div className="skills-row">
              <div className="about-box">
                <h2 className="animated-heading">Soft Skills</h2>
                <ul>
                  <li>Problem Solving🧠</li>
                  <li>Team Collaboration🤼</li>
                  <li>Communication📱</li>
                </ul>
              </div>
              <div className="about-box">
                <h2 className="animated-heading">Languages I Speak</h2>
                <ul>
                  <li>English</li>
                  <li>Kannada</li>
                  <li>Telugu</li>
                  <li>Hindi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right">
          {/* Optional: Add an image or illustration here */}
        </div>
      </div>
      {/* Right-side icons */}
      <div className="about-icons-right">
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHQzOTI2OTg3dzVyaDM3NjBxaDhicTBueDE0ZHB5cHhzd2NoOWt4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif" alt="Right Icon 1" className="about-icon about-icon-right about-icon-right-large" />
        
      </div>
    </section>
  );
}
