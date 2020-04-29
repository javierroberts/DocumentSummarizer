import React from "react";

import LanguagePicker from "../UI/LanguagePicker";
import "./CpInput.css";

class CpInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cpValue: "", language: "en" };
    this.handleCpChange = this.handleCpChange.bind(this);
    this.handleCpSubmit = this.handleCpSubmit.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleCpChange(event) {
    this.setState({ cpValue: event.target.value });
  }

  handleLanguageChange(language) {
    this.setState({ language: language });
  }

  handleCpSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/getSumm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.token
      },
      body: JSON.stringify({
        type: "cp",
        text: this.state.cpValue,
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
              value={this.state.cpValue}
              onChange={this.handleCpChange}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 lp">
            <LanguagePicker handleLanguageChange={this.handleLanguageChange} />
          </div>
          <div className="col-md-6">
            <button
              onClick={this.handleCpSubmit}
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
