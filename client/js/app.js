import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import {  MasterPage, IndexPage, LoginPage, DashboardPage, RegisterPage } from './pages';

function loggedIn() {
  return localStorage.getItem('token') ? true : false;
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/',

      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function checkIfLoggedIn(nextState, replace){
  if(loggedIn()){
    let pathName = '/dashboard';
    replace({
      pathname: pathName,
      state: { nextPathname: nextState.location.pathname }
    })
  }
}


ReactDOM.render(
    <Router history={browserHistory}>
      <HomeRoute path='/' component={MasterPage}>
        <IndexRoute component={LoginPage} onEnter={checkIfLoggedIn} />
        <Route path='/register' component={RegisterPage} onEnter={checkIfLoggedIn} />
        <Route path='/dashboard' component={DashboardPage} onEnter={requireAuth} />
      </HomeRoute>
    </Router>,
    document.getElementById('app-container')
);
