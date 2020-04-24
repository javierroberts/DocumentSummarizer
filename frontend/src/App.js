import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import NavigationBar from "./components/UI/NavigationBar";
import Landing from "./pages/Landing";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { auth: false };

    this.authHandler = this.authHandler.bind(this);
  }

  authHandler = () => {
    this.state.auth == false
      ? this.setState({ auth: true })
      : this.setState({ auth: false });
  };

  render() {
    return (
      <Router>
        <NavigationBar authHandler={this.authHandler} />
        <Switch>
          <Route path="/" exact>
            <Landing auth={this.state.auth} authHandler={this.authHandler} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
