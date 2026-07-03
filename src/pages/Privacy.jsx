import React from "react";

export default function Privacy() {
  return (
    <div className="legal-page">
      <div className="section-container">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: July 2026</p>

        <p>
          TTKS AI (“we”, “our”, or “us”) respects your privacy and is committed
          to protecting your personal data.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>Account information (name, email)</li>
          <li>TikTok OAuth identifiers (when authorized by user)</li>
          <li>Usage data and analytics</li>
          <li>Product data provided by the user</li>
        </ul>

        <h2>2. How We Use Information</h2>
        <ul>
          <li>Provide access to TTKS AI services</li>
          <li>Authenticate users via TikTok OAuth</li>
          <li>Generate and publish content as requested</li>
          <li>Improve platform performance and reliability</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>
          We do not sell personal data. Data may only be shared with:
        </p>
        <ul>
          <li>TikTok APIs (as authorized by the user)</li>
          <li>Cloud service providers required to operate the platform</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to
          protect user data against unauthorized access or disclosure.
        </p>

        <h2>5. User Rights</h2>
        <ul>
          <li>Access your data</li>
          <li>Request correction or deletion</li>
          <li>Revoke TikTok authorization at any time</li>
        </ul>

        <h2>6. Contact</h2>
        <p>
          For privacy-related questions: <br />
          <strong>privacy@ttks-ai.com</strong>
        </p>
      </div>
    </div>
  );
}