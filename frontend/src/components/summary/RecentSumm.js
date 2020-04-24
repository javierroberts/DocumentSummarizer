import React from "react";

import "./RecentSumm.css";

class RecentSumm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row summary">
        <div className="col-md-6 type">
          <span>{this.props.type}:</span>
          <span> {this.props.text}</span>
        </div>
        <div className="col-md-6 sumText">
          <span>{this.props.summary}</span>
        </div>
      </div>
    );
  }
}

export default RecentSumm;
