import React from 'react';
import "../styles/Home.css";
import profileImg from '../assets/profile.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from 'react-helmet-async';


const intro = `I am a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies. I enjoy solving complex problems and building scalable, user-friendly applications. My experience spans across modern JavaScript frameworks, RESTful APIs, and cloud platforms,and profectional on LAN based network connecting in Backend sid.`;

export default function Home() {
  return (
    <section id="home" className="hero-wrapper">
      <Helmet>
        <title>Lohith | Home</title>
      </Helmet>
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-heading">
            Hi, I'm Lohith Sai G
          </h1>
          <h2 className="hero-title">
            <Typewriter
              words={['Full-Stack Developer', 'Backend Developer', 'Frontend Developer', 'LAN based project crafting']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="hero-intro">
            {intro}
          </p>
        </div>
        <div className="hero-right">
          <div className="profile-img-anim-wrapper">
            <img src={profileImg} alt="Lohith Sai G" className="profile-img" />
          </div>
        </div>
      </div>
      <div className="icon-container">
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamozdXU0dWZmc3Zud255Y2F3bDNwbW52dm9zYjBjcmNwNWg0cDI1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/eNAsjO55tPbgaor7ma/giphy.gif" alt="React Logo" className="icon" />
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2p3bXBhOXpqMWF6a3RjczJ0b2h4ZWR4Y3ptOG1qMmpuYjdrZGcyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ln7z2eWriiQAllfVcn/giphy.gif" alt="JavaScript Logo" className="icon" />
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExajhxbHg3NjZhMXR6eXI1bW40d2RtdHo4Nm12azVrZnVzZXc1Mm4zNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif" alt="GitHub Logo" className="icon" />
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDBkOGszb3YwZWJncHR0YzAwMXd0cXllM3MxZnc4bW05M3p0MmdiYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LMt9638dO8dftAjtco/giphy.gif" alt="Python Logo" className="icon" />
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmphNXBpaHY2bzNyM2VyNTVmd243NW16YTRvcjkzZHI2NjhqcnkxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kdFc8fubgS31b8DsVu/giphy.gif" alt="Node.js Logo" className="icon" />
        <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGVhYmZsMDVmbmJ3bDlrZ3JjY2ExcHg4aGFneXQ5Y21pcjk0M3M5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/tAjb5pyCEBhEb8jWxC/giphy.gif" alt="MongoDB Logo" className="icon" />
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWo1NGV0bmxyaXk2ZWhxcWF1eXh4MnBhbzljdHg2ZjMyNDVnMnQzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XAxylRMCdpbEWUAvr8/giphy.gif" alt="HTML Logo" className="icon" />
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWIyNjV0eHVyZ2MzcWlpZnU0MzFheXNkZTYxZ2U4cXQyZGt0bGxjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dHM/w7j1Bivh2hvIbhDYO8/giphy.gif" alt="CSS Logo" className="icon" />
      </div>
    </section>
  );
} 