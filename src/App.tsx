import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { I18n } from 'react-polyglot';
import './App.css';
import UserDetailsPage from "./pages/UserDetailsPage";
import ApplicationDetailsPage from "./pages/ApplicationDetailsPage";
import UserEditPage from "./pages/UserEditPage";
import UserListPage from "./pages/UserListPage";
import UserCreatePage from "./pages/UserCreatePage";
import ClaimDetailsPage from "./pages/ClaimDetailsPage";
import ClaimEditPage from "./pages/ClaimEditPage";
import ClaimListPage from "./pages/ClaimListPage";
import ApplicationEditPage from "./pages/ApplicationEditPage";
import ApplicationListPage from "./pages/ApplicationListPage";
import ApplicationCreatePage from "./pages/ApplicationCreatePage";
import ClaimCreatePage from "./pages/ClaimCreatePage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <I18n locale={'en'} messages={{}} allowMissing>
      <>
        <Navigation/>
        <Router>
          <Switch>
            <Route path="/user/:id" component={UserDetailsPage}/>
            <Route path="/user/:id/edit" component={UserEditPage}/>
            <Route path="/users" component={UserListPage}/>
            <Route path="/user/new" component={UserCreatePage}/>

            <Route path="/claim/:id" component={ClaimDetailsPage}/>
            <Route path="/claim/:id/edit" component={ClaimEditPage}/>
            <Route path="/claims" component={ClaimListPage}/>
            <Route path="/claim/new" component={ClaimCreatePage}/>

            <Route path="/application/:id" component={ApplicationDetailsPage}/>
            <Route path="/application/:id/edit" component={ApplicationEditPage}/>
            <Route path="/applications" component={ApplicationListPage}/>
            <Route path="/application/new" component={ApplicationCreatePage}/>

          </Switch>
        </Router>
      </>
    </I18n>
  );
}

export default App;
