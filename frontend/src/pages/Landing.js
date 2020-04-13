import React from "react";

import Summarizer from "../components/summary/Summarizer";

import "./Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <Summarizer className="summarizer" />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
