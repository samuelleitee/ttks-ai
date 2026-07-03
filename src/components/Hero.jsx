import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-badge">
          ⚡ AI-powered TikTok Shop automation
        </div>

        <h1 className="hero-title">
          Create and publish TikTok Shop videos with AI
        </h1>

        <p className="hero-subtitle">
          TTKS AI helps you generate marketing videos, optimize product content,
          and publish directly to TikTok Shop automatically.
        </p>

        <div className="hero-actions">
          <a href="#features" className="btn primary">
            Get Started
          </a>
          <a href="/privacy" className="btn secondary">
            Learn More
          </a>
        </div>

        <div className="hero-preview">
          <div className="mock-card">
            <div className="mock-header">Dashboard Preview</div>
            <div className="mock-body">
              <div className="mock-line" />
              <div className="mock-line short" />
              <div className="mock-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}