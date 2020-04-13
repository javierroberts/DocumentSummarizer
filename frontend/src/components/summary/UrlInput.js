import React from "react";

import "./UrlInput.css";

class UrlInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
  }

  handleUrlChange(event) {
    this.setState({ url: event.target.value });
  }

  handleUrlSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/getSumm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ type: "url", text: this.state.url })
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row instruction-row">
          <div className="col-md-12">
            <h4>Instructions for URL input:</h4>
          </div>
        </div>
        <div className="row instruction-row">
          <div className="col-md-12">
            1. Copy the URL of the web page that contains the text you would
            like to summarize
          </div>
        </div>
        <div className="row instruction-row">
          <div className="col-md-12">
            2. Paste the URL into the URL input field below and click summarize
          </div>
        </div>
        <div className="row instruction-row">
          <div className="col-md-12">3. The summary will appear below</div>
        </div>
        <div className="row">
          <form className="form-inline url-input" action="#">
            <div className="col-md-6">
              <input
                className="form-control mr-sm-2"
                type="text"
                onChange={this.handleUrlChange}
                placeholder="URL"
                value={this.state.url}
              />
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary summarize-button"
                onClick={this.handleUrlSubmit}
              >
                Summarize
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UrlInput;
