import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contacts";
import ContactsEdit from "./pages/ContactsEdit";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/contacts-edit" component={ContactsEdit} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
