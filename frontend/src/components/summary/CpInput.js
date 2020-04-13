import React from "react";

import "./CpInput.css";

class CpInput extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ cpValue: "" });
    this.handleCpChange = this.handleCpChange.bind(this);
  }

  handleCpChange(event) {
    this.setState({ cpValue: event.target.value });
  }
  render() {
    return (
      <div className="container cpInput">
        <div className="row instruction-row">
          <div className="col-md-12">
            <h4>Instructions for copy/paste input:</h4>
          </div>
        </div>
        <div className="row instruction-row">
          <div className="col-md-12">
            1. Copy the text that you would like to summarize
          </div>
        </div>
        <div className="row instruction-row">
          <div className="col-md-12">
            2. Paste the text into the input field below and click summarize
          </div>
        </div>
        <div className="row instruction-row">
          <div className="col-md-12">3. The summary will appear below</div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <textarea
              className="form-control"
              placeholder="Paste text here"
              rows="7"
              onChange={this.handleCpChange}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button
              type="submit"
              className="btn btn-secondary summarize-button"
            >
              Summarize
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CpInput;
