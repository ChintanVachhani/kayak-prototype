import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './common/Header';
import LeftNavigation from './common/LeftNavigation';
import Login from './common/Login';
import DashboardHome from './dashboard/DashboardHome';
import CarsHome from './cars/CarsHome';
import HotelsHome from './hotels/HotelsHome';
import FlightsHome from './flights/FlightsHome';
import BillsHome from './billing/BillingHome';

// Import Style
import styles from './Admin.css';


class Admin extends Component { 
  render() {   
    return (
        <div>
  		    <Header />
          <div className={styles['headerMargin']}>
          {this.props.isLoggedin === undefined || this.props.isLoggedin === false ? <Login /> : ''}
          {this.props.isLoggedin === true || this.props.isLoggedin === true ?            
              <div className="container-fluid">
                <div className="row" >
                  <LeftNavigation />
                  {this.props.params.service === undefined ? <DashboardHome /> : ''}
                  {this.props.params.service === 'flights' ? <FlightsHome /> : ''}
                  {this.props.params.service === 'hotels' ? <HotelsHome /> : ''}
                  {this.props.params.service === 'cars' ? <CarsHome /> : ''}
                  {this.props.params.service === 'bills' ? <BillsHome /> : ''}
                </div>
              </div>
            : ''}
  		  	
		    </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let isLoggedin = state.admin.isLoggedIn;

  return {isLoggedin};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Admin.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
