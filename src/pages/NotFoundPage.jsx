import React from 'react';
import { Link } from 'react-router-dom'; 
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-header">404: Page Not Found</h1>
      <p className="notfound-text">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="notfound-btn">Return to Home</Link> 
    </div>
  );
}

export default NotFoundPage;
