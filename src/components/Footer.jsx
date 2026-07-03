import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>TTKS AI</h3>
          <p>
            AI platform to create, manage and publish TikTok Shop videos
            automatically.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h4>Legal</h4>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TTKS AI. All rights reserved.</p>
      </div>
    </footer>
  );
}