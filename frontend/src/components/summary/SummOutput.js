import React from "react";

class SummOutput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Summary:</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>{this.props.outputText}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SummOutput;
