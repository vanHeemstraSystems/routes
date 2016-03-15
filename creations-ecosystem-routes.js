import React from '../libraries/react';
import {Route} from '../libraries/react-router';
import App from '../applications/characters-application';
import Home from '../components/home';
console.log('Creations Ecosystem Routes - called');

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
  </Route>
);
