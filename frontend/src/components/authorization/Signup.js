import React from "react";
import ReactDOM from "react-dom";

import "./Signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPass: "",
      accExists: false
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfrimPassChange = this.handleConfrimPassChange.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
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

  handleConfrimPassChange = e => {
    this.setState({ confirmPass: e.target.value });
  };

  handleCreateAccount = event => {
    if (this.state.username.length < 7 || this.state.password < 7) {
      this.setState({ username: "", password: "" });
      return;
    }
    event.preventDefault();
    fetch("http://localhost:5000/users/create", {
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
          this.setState({ accExists: true });
          return;
        }
        console.log("DATA: " + JSON.stringify(data.token));
        this.props.setToken(data.token);
        this.props.closeHandler();
      });
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            {this.state.accExists ? (
              <h3>Account already exists</h3>
            ) : (
              <h3>Signup</h3>
            )}
          </div>
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="username"
              placeholder="username (at least 7 characters)"
              onChange={this.handleUsernameChange}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password (at least 7 characters)"
              onChange={this.handlePasswordChange}
            />

            <input
              type="submit"
              className="fadeIn fourth"
              value="Sign up"
              onClick={this.handleCreateAccount}
            />
          </form>
          <div id="formFooter">
            <a className="underlineHover" onClick={this.props.loginHandler}>
              Already have an account?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
