import React from "react";
import ReactDOM from "react-dom";

import "./AuthWindow.css";

class AuthWindow extends React.Component {
  constructor(props) {
    super(props);
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
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />

            <input type="submit" className="fadeIn fourth" value="Log In" />

            <div className="signup-button">
              <a className="underlineHover" href="#">
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
