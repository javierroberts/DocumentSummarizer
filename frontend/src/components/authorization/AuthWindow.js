import React from "react";
import ReactDOM from "react-dom";

import "./AuthWindow.css";

class AuthWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wrongPass: false };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.props.closeHandler();
    }
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleLogin = event => {
    if (this.state.username.length < 7 || this.state.password < 7) {
      this.setState({ username: "", password: "" });
      return;
    }
    event.preventDefault();
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.token == -1) {
          this.setState({ wrongPass: true });
          return;
        } else {
          this.props.setToken(data.token);
          this.props.closeHandler();
        }
      });
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            {this.state.wrongPass ? (
              <h3>Wrong password or no account exists</h3>
            ) : (
              <h3>Login</h3>
            )}
          </div>
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="username"
              placeholder="username"
              onChange={this.handleUsernameChange}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={this.handlePasswordChange}
            />

            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={this.handleLogin}
            />

            <div className="signup-button">
              <a className="underlineHover" onClick={this.props.signupHandler}>
                or sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthWindow;
