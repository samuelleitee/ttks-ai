import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">TTKS AI</Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="nav-cta">
          <a
            href="https://seudominio.com"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}