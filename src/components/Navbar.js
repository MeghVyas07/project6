import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Navbar(props) {
  function about() {
    document.title = 'React - About'
  }
  function home() {
    document.title = 'React - Home'
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <img src={logo} className="App-logo" />
        <a className={`navbar-brand text-${props.mode2}`} href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler bg-body-tertiary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link onClick={home} class={`nav-link active text-${props.mode2}`} to="/">
                Word-Editor
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={about} class={`nav-link active text-${props.mode2}`} to="/about">
                To-do
              </Link>
            </li>
          </ul>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            onClick={props.darkmode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            class={`form-check-label text-${props.mode2}`}
            for="flexSwitchCheckDefault"
          >
            {props.mode}
          </label>
        </div>
      </div>
    </nav>
  );
}