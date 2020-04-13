import React from "react";

import "./UrlInput.css";

class UrlInput extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ url: "" });
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }

  handleUrlChange(event) {
    this.setState({ url: event.target.value });
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
              />
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary summarize-button"
                type="submit"
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
