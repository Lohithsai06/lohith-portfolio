import React from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:Lohithsai0808@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:9380324074";
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Lohithsai06", "_blank", "noopener noreferrer");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/lohith-sai-g-b929b6281", "_blank", "noopener noreferrer");
  };

  return (
    <section className="contact-section">
      <Helmet>
        <title>Lohith | Contact</title>
      </Helmet>
      <h1 className="contact-title">Contact Me</h1>
      
      <div className="contact-gif-container">
        <img 
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3lyaWVjeWZtN25yM2NqN2MwamVwYW9mMDAzdnJ1cW9xc2M3bjZ5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif" 
          alt="Contact animation" 
          className="contact-gif"
        />
      </div>
      
      <div className="contact-grid">
        <a 
          href="mailto:Lohithsai0808@gmail.com" 
          className="contact-card"
          onClick={(e) => {
            e.preventDefault();
            handleEmailClick();
          }}
        >
          <FaEnvelope className="contact-icon" />
          <p className="contact-text">Lohithsai0808@gmail.com</p>
        </a>
        <a 
          href="tel:9380324074" 
          className="contact-card"
          onClick={(e) => {
            e.preventDefault();
            handlePhoneClick();
          }}
        >
          <FaPhone className="contact-icon" />
          <p className="contact-text">9380324074</p>
        </a>
        <a 
          href="https://github.com/Lohithsai06" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card"
          onClick={(e) => {
            e.preventDefault();
            handleGithubClick();
          }}
        >
          <FaGithub className="contact-icon" />
          <p className="contact-text">GitHub: Lohithsai06</p>
        </a>
        <a 
          href="https://www.linkedin.com/in/lohith-sai-g-b929b6281" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card"
          onClick={(e) => {
            e.preventDefault();
            handleLinkedinClick();
          }}
        >
          <FaLinkedin className="contact-icon" />
          <p className="contact-text">LinkedIn: lohith-sai-g-b929b6281</p>
        </a>
      </div>
    </section>
  );
}
