/* eslint-disable global-require */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './modules/App/App';
<<<<<<< HEAD
import Billing from './modules/Billing/Billing';
=======
import Admin from "./modules/Admin/Admin";
import Home from "./modules/Home/Home";
<<<<<<< HEAD
>>>>>>> 5b22e3db2d4dcb466545030598186a7457e825f2
=======
import CarList from "./modules/Car/CarList";
import FlightList from "./modules/Flight/FlightList";
import HotelList from "./modules/Hotel/HotelList";
>>>>>>> 658f10a7cbf568ec0257c3f55019f08e2d555fa7

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  /*require('./modules/Admin/Admin');
  require('./modules/Home/Home');*/
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
<<<<<<< HEAD
  <Route path="/" component={Billing}>
=======
  <Route path="/" component={App}>
    {/*<IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Home/Home').default);
        });
      }}
    />
    <Route
      path="/admin"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Admin/Admin').default);
        });
      }}
    />*/}
    <IndexRoute component={Home}/>
    <Route path="admin" component={Admin}/>
<<<<<<< HEAD
>>>>>>> 5b22e3db2d4dcb466545030598186a7457e825f2
=======
    <Route path="car" component={CarList}/>
    <Route path="flight" component={FlightList}/>
    <Route path="hotel" component={HotelList}/>
>>>>>>> 658f10a7cbf568ec0257c3f55019f08e2d555fa7
  </Route>
);
