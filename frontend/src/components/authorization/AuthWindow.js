import React from "react";
import ReactDOM from "react-dom";

import "./AuthWindow.css";

class AuthWindow extends React.Component {
  constructor(props) {
    super(props);
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
    event.preventDefault();
    console.log("Sendingg");
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        username: this.state.username,
        password: this.state.password
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("DATA: " + JSON.stringify(data.token));
        this.props.setToken(data.token);
      });
    this.props.closeHandler();
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h3>Login</h3>
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

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthWindow;
