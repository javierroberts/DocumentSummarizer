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

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
