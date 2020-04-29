import React from "react";

import LanguagePicker from "../UI/LanguagePicker";

import "./UrlInput.css";

class UrlInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: "", language: "en" };
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleUrlChange(event) {
    this.setState({ url: event.target.value });
  }
  handleLanguageChange(language) {
    this.setState({ language: language });
  }

  handleUrlSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/getSumm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.token
      },
      body: JSON.stringify({
        type: "url",
        text: this.state.url,
        language: this.state.language
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.props.handleSummaryChange(data.text);
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
            <div className="row">
              <div className="col-md-6 lp">
                <LanguagePicker
                  handleLanguageChange={this.handleLanguageChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UrlInput;
