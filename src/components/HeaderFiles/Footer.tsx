import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Desenvolvido por <strong>Emmanuel Martins</strong>
        </p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/emmanuelmartinsb/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link linkedin"
            title="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/EmmanuelMartins21"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link github"
            title="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
