import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { UserDetailsPage } from "./pages/UserDetailsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:id">
          <UserDetailsPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
