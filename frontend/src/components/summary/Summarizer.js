import React from "react";

import UrlInput from "./UrlInput";
import CpInput from "./CpInput";
import FlInput from "./FlInput";

import "./Summarizer.css";
class Summarizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openInput: "" };
    this.handleUrlButton = this.handleUrlButton.bind(this);
    this.handleCpButton = this.handleCpButton.bind(this);
    this.handleFlButton = this.handleFlButton.bind(this);
  }

  handleUrlButton(event) {
    this.setState({ openInput: "url" });
  }
  handleCpButton(event) {
    this.setState({ openInput: "cp" });
  }
  handleFlButton(event) {
    this.setState({ openInput: "fl" });
  }
  render() {
    return (
      <div className="container summarizer">
        <div className="row">
          <div className="col-md-12">
            <h3>Summarizing Machine</h3>
          </div>
        </div>
        <div className="row buttons-row">
          <div className="col-md-1 button-col">
            <button
              type="button"
              onClick={this.handleUrlButton}
              className="btn btn-primary url-button"
            >
              URL
            </button>
          </div>
          <div className="col-md-2 button-col">
            <button
              type="button"
              onClick={this.handleCpButton}
              className="btn btn-primary cp-button"
            >
              Copy/Paste
            </button>
          </div>
          <div className="col-md-3 button-col">
            <button
              type="button"
              onClick={this.handleFlButton}
              className="btn btn-primary fl-button"
            >
              File Upload
            </button>
          </div>
        </div>
        <div className="row">
          {this.state.openInput == "url" && <UrlInput />}
          {this.state.openInput == "cp" && <CpInput />}
          {this.state.openInput == "fl" && <FlInput />}
        </div>
      </div>
    );
  }
}

export default Summarizer;
