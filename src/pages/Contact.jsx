import React from "react";

export default function Contact() {
  return (
    <div className="legal-page">
      <div className="section-container">
        <h1>Contact</h1>
        <p className="subtitle">
          Get in touch with the TTKS AI team.
        </p>

        <div className="contact-card">
          <h2>Email</h2>
          <p>support@ttks-ai.com</p>
        </div>

        <div className="contact-card">
          <h2>Business Inquiries</h2>
          <p>business@ttks-ai.com</p>
        </div>

        <div className="contact-card">
          <h2>Response Time</h2>
          <p>We typically respond within 24–48 hours.</p>
        </div>

        <div className="contact-note">
          <p>
            TTKS AI is a platform for AI-powered TikTok Shop video creation and
            publishing automation.
          </p>
        </div>
      </div>
    </div>
  );
}