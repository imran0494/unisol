// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./../css/style.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        {/* Navbar brand */}
        <Link className="navbar-brand me-2" to="/">
          <img
            src="./img/logo/unisol-logo.png" // Assuming SITE_LOGO is now an environment variable
            height="50"
            alt="logo"
            loading="lazy"
            style={{ marginTop: "-1px" }}
          />
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 text-bold"
            style={{ margin: "auto" }}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/healthcare">
                HealthCare +
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/waste">
                Waste Management +
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/start-up-project">
                Start-up Project +
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hospitality">
                Hospitality +
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inspiration">
                Our Inspiration
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-lg btn-primary me-3">
              Opportunity with us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
