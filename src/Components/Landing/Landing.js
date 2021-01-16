import React from 'react';
import './Landing.css';

export default function Landing() {
    return (
      <body className="about-me">
        <div className="container">
          <div className="social">
            <i className="fab fa-github" aria-hidden="true" />
          </div>
          <div className="social">
            <i className="fab fa-instagram" aria-hidden="true" />
          </div>
          <div className="social">
            <i className="fab fa-linkedin" aria-hidden="true" />
          </div>
        </div>
        <img className="meh" src="" alt="" />
        {/* <script async src="https://kkit.fontawesome.com/a076d05399.js"></script> */}
      </body>
    );
}
