import React from "react";
import axios from "axios";

class FlInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null, fileReader: null, text: null, button: true, error: null };
    this.uploadFile = this.uploadFile.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onLoadFile = this.onLoadFile.bind(this);
  }

  onLoadFile = event => {
    this.setState({ ...this.state, text: this.state.fileReader.result, button: false });
  }


  onChangeHandler = event => {
    var ext = event.target.files[0].name.substr(event.target.files[0].name.length - 3);
    if (ext == "txt") {
      let fileReader = new FileReader();
      fileReader.onloadend = this.onLoadFile;
      fileReader.readAsText(event.target.files[0]);
      this.setState({ ...this.state, file: event.target.files[0], fileReader, error: null, button: true });
    } else {
      this.setState({...this.state, error: "Sorry, at the moment we only accept .txt files", button: true})
    }
  };


  uploadFile = event => {
    event.preventDefault();
    fetch("http://localhost:5000/getSumm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.token
      },
      body: JSON.stringify({
        type: "cp",
        text: this.state.text
      })
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
          <div className="col-md-12">1. Select the local text file below</div>
        </div>
        <div className="row instruction-row">
          <div className="col-md-12">2. The summary will appear below</div>
        </div>
        <div className="row instruction-row">
          <div className="col-md-12" style={{color: "red"}}>{this.state.error}</div>
        </div>
        <div className="row">
          <form className="form-inline url-input" action="#">
            <div className="col-md-6">
              <input
                type="file"
                className="form-control-file border"
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary summarize-button"
                type="submit"
                onClick={this.uploadFile}
                disabled={this.state.button}
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
