import React from "react";
import axios from "axios";

class FlInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.uploadFile = this.uploadFile.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = event => {
    this.setState({ file: event.target.files[0] });
  };

  uploadFilse = event => {
    event.preventDefault();
    console.log("file on frontend: " + this.state.file);
    fetch("http://localhost:5000/getSumm/file", {
      method: "POST",
      headers: {
        Authorization: this.props.token,
        "content-type": this.state.file.type
      },
      body: this.state.file
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.props.handleSummaryChange(data.text);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row instruction-row">
          <div className="col-md-12">
            <h4>Instructions for file input:</h4>
          </div>
        </div>
        <div className="row instruction-row">
          <div className="col-md-12">1. Select the local PDF file below</div>
        </div>
        <div className="row instruction-row">
          <div className="col-md-12">2. The summary will appear below</div>
        </div>
        <div className="row">
          <form className="form-inline url-input" action="#">
            <div className="col-md-6">
              <input
                type="file"
                class="form-control-file border"
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary summarize-button"
                type="submit"
                onClick={this.uploadFile}
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

export default FlInput;
