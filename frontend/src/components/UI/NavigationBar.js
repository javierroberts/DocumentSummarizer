import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import "./NavigationBar.css";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
    this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
  }

  handleSearchOnChange(event) {
    this.setState({ searchValue: event.target.value });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-static-top bg-dark navbar-dark">
        <Link to="/" className="navbar-brand">
          DocuSum
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="link" to="/">
                Summarize
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/recent">
                Recent Summaries
              </Link>
            </li>
            <li className="nav-item d-lg-none d-xl-none">
              <a className="nav-link" href="#">
                Sign in
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <a onClick={this.props.authHandler}>
            <i
              className="fas fa-user fa-lg d-none d-lg-block d-xl-block user-icon"
              data-fa-transform="up-7"
            ></i>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
