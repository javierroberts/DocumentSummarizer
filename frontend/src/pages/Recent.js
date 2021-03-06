import React from "react";

import RecentSumm from "../components/summary/RecentSumm";

class Recent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { summaries: [], retrieved: false };
    this.getSummaries = this.getSummaries.bind(this);
  }

  getSummaries = () => {
    if (this.props.token == -1 || this.state.retrieved) {
      return;
    }
    fetch("http://localhost:5000/getSumm", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.token
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ summaries: data });
        this.setState({ retrieved: true });
      });
  };

  componentDidUpdate = () => {
    this.getSummaries();
  };
  componentDidMount = () => {
    this.getSummaries();
  };
  render() {
    return (
      <div className="container main-content">
        {this.props.token == -1 ? (
          <div className="row">
            <div className="col-md-12">
              <h3>Create an account to store and view recent summaries</h3>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-12">
              <h3>Recent Summaries</h3>
            </div>
          </div>
        )}

        {this.state.summaries.length > 0 &&
          this.state.summaries.map(summary => {
            return (
              <RecentSumm
                id={summary.userId}
                type={summary.type}
                text={summary.text}
                summary={summary.summary}
              />
            );
          })}
      </div>
    );
  }
}

export default Recent;
