import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Lohith | Page Not Found</title>
      </Helmet>
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="not-found-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 