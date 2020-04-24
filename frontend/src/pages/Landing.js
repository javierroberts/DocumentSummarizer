import React from "react";

import Summarizer from "../components/summary/Summarizer";
import AuthWindow from "../components/authorization/AuthWindow";

import "./Landing.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10 main-content">
            {!this.props.auth ? (
              <Summarizer className="summarizer" />
            ) : (
              <AuthWindow closeHandler={this.props.authHandler} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
