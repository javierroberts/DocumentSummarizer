import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import NavigationBar from "./components/UI/NavigationBar";
import Landing from "./pages/Landing";
import Recent from "./pages/Recent";
import AuthWindow from "./components/authorization/AuthWindow";

import "./App.css";
import AuthWindowWrapper from "./components/authorization/AuthWindowWrapper";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { auth: false, token: -1 };

    this.authHandler = this.authHandler.bind(this);
    this.setToken = this.setToken.bind(this);
    this.logout = this.logout.bind(this);
  }

  authHandler = () => {
    this.state.auth == false
      ? this.setState({ auth: true })
      : this.setState({ auth: false });
  };

  setToken = token => {
    this.setState({ token: token });
    localStorage.setItem("userData", JSON.stringify({ token: token }));
  };

  componentDidMount = () => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      this.setToken(storedData.token);
    }
  };

  logout = () => {
    this.setState({ token: "-1" });
    localStorage.setItem("userData", JSON.stringify({ token: "-1" }));
  };

  render() {
    return (
      <Router>
        <NavigationBar authHandler={this.authHandler} />
        {this.state.auth ? (
          <div className="loginWindow">
            <AuthWindowWrapper
              closeHandler={this.authHandler}
              setToken={this.setToken}
              authHandler={this.state.authHandler}
              logoutHandler={this.logout}
              token={this.state.token}
            />
          </div>
        ) : (
          <Switch>
            <Route path="/" exact>
              <Landing
                auth={this.state.auth}
                authHandler={this.authHandler}
                token={this.state.token}
              />
            </Route>
            <Route path="/recent" exact>
              <Recent token={this.state.token} />
            </Route>
          </Switch>
        )}
      </Router>
    );
  }
}

export default App;
