/**
 * Root Component
 */
import React from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory, Route} from 'react-router';

// Import Routes
import routes from './routes';
import history from './history';

// Base stylesheet
require('./main.css');

export default function App(props) {
  return (
    <Provider store={props.store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
