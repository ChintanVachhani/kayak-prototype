/* eslint-disable global-require */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './modules/App/App';
import Billing from './modules/Billing/Billing';
import Admin from "./modules/Admin/Admin";
import Home from "./modules/Home/Home";
import AdminFlights from "./modules/Admin/flights/AdminFlights";
import AdminHotels from "./modules/Admin/hotels/AdminHotels";
import AdminCars from "./modules/Admin/cars/AdminCars";

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
    <Route path="admin" component={Admin}>
      <Route path="/flights" component={AdminFlights}/>
      <Route path="/hotels" component={AdminHotels}/>
      <Route path="/cars" component={AdminCars}/>
    </Route>
    <Route path="billing" component={Billing}/>
  </Route>
);
