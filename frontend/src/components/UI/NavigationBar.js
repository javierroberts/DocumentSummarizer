import React from "react";

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
        <a className="navbar-brand" href="#">
          DocuSum
        </a>
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
              <a className="nav-link" href="#">
                Summarize
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recent Summaries
              </a>
            </li>
            <li className="nav-item d-lg-none d-xl-block">
              <a className="nav-link" href="#">
                Sign in
              </a>
            </li>
          </ul>
          <form
            className="form-inline quick-search d-none d-lg-block d-xl-none"
            action="/action_page.php"
          >
            <input
              className="form-control mr-sm-2"
              type="text"
              onChange={this.handleSearchOnChange}
              placeholder="URL"
            />
            <button className="btn btn-default" type="submit">
              Quick Summary
            </button>
          </form>
        </div>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <a href="#">
            <i
              className="fas fa-user fa-lg d-none d-lg-block d-xl-none user-icon"
              data-fa-transform="up-7"
            ></i>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
