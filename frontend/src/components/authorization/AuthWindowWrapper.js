import React from "react";
import ReactDOM from "react-dom";
import AuthWindow from "./AuthWindow";

import Signup from "./Signup";

class AuthWindowWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signup: false };
  }

  signupHandler = () => {
    if (this.state.signup) {
      this.setState({ signup: false });
    } else {
      this.setState({ signup: true });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            {this.state.signup == false ? (
              <AuthWindow
                closeHandler={this.props.closeHandler}
                signupHandler={this.signupHandler}
              />
            ) : (
              <Signup
                closeHandler={this.props.closeHandler}
                loginHandler={this.signupHandler}
                setToken={this.props.setToken}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AuthWindowWrapper;
