import React, { Fragment, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import PrivateRoute from "./layout/common/PrivateRoute";
import Login from "./layout/auth/Login";
import Signup from "./layout/auth/Signup";
import Main from "./Main";
// import LandingPage from "./layout/pages/LandingPage";
import Profile from "./layout/pages/Profile";
import "./App.css";
import store from "./store/store";
import { loadUser } from "./authentication/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

  return (
    <Router>
      <Fragment>
        <Switch>
          <PrivateRoute exact path="/" component={Main} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Fragment>
    </Router>
  );
}

App.propTypes = {
  loadUser: PropTypes.func,
};

export default App;
