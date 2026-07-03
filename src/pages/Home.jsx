import React from "react";
import Hero from "../components/Hero.jsx";

export default function Home() {
  return (
    <div className="home">
      <Hero />

      <section id="features" className="features">
        <div className="section-container">
          <h2>Features</h2>
          <p className="section-subtitle">
            Everything you need to automate TikTok Shop content creation.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <h3>AI Video Generation</h3>
              <p>
                Generate short-form marketing videos automatically from product
                data.
              </p>
            </div>

            <div className="feature-card">
              <h3>Smart Publishing</h3>
              <p>
                Publish content directly to TikTok Shop with optimized timing.
              </p>
            </div>

            <div className="feature-card">
              <h3>Product Automation</h3>
              <p>
                Import products and let AI create engaging promotional content.
              </p>
            </div>

            <div className="feature-card">
              <h3>Workflow Automation</h3>
              <p>
                Reduce manual work by automating repetitive content tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="section-container">
          <h2>Start building with TTKS AI</h2>
          <p>
            Create your TikTok Shop automation pipeline in minutes.
          </p>

          <a className="btn primary" href="https://seudominio.com">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}