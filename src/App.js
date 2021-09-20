import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/header";
import Menu from "./components/menu";

import Dashboard from "./pages/Dashboard/Dashboard";
import Contacts from "./pages/Contacts";
import ContactsEdit from "./pages/ContactsEdit";
import NoMatch from "./pages/NoMatch/NotMatch";

const App = () => {
  return (
    <>
      <Header />
      <div className="container-main">
        <Menu />
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/contatos" component={Contacts} />
            <Route exact path={"/contatos-editar"} component={ContactsEdit} />
            <Route path="*" component={NoMatch} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
