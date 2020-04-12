import React from "react";

import "./Summarizer.css";
class Summarizer extends React.Component {
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
            <button type="button" className="btn btn-primary url-button">
              URL
            </button>
          </div>
          <div className="col-md-2 button-col">
            <button type="button" className="btn btn-primary cp-button">
              Copy/Paste
            </button>
          </div>
          <div className="col-md-3 button-col">
            <button type="button" className="btn btn-primary fl-button">
              File Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Summarizer;
