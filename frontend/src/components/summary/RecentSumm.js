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
          <h4>{this.props.type == "cp" ? "copied text" : this.props.type}:</h4>
          {this.props.text}
        </div>
        <div className="col-md-6 sumText">
          <span>{this.props.summary}</span>
        </div>
      </div>
    );
  }
}

export default RecentSumm;
