import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="section-container">
        <h1>404</h1>
        <h2>Page not found</h2>

        <p>
          The page you are looking for does not exist or has been moved.
        </p>

        <Link to="/" className="btn primary">
          Go back home
        </Link>
      </div>
    </div>
  );
}