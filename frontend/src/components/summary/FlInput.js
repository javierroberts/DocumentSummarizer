import React from "react";

class FlInput extends React.Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(event) {
    const files = event.target.files;
    const formData = new FormData();
    formData.append("myFile", files[0]);

    fetch("http://localhost:5000/getSumm/file", {
      method: "POST",
      body: formData
    });
  }

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
                onChange={this.uploadFile}
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

export default FlInput;
