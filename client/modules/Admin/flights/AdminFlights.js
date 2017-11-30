import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../common/Header';
import LeftNavigation from './../common/LeftNavigation';
import FlightsHome from './FlightsHome';
import styles from './../Admin.css';

class AdminFlights extends Component {
  render() {
    return (

    	<div>
  		    <Header />
  		  	<div className={styles['headerMargin']}>
  		    <div className="container-fluid">
        			<div className="row">
        				<LeftNavigation />
        				<FlightsHome />
        			</div>
        		</div>
        	</div>
		</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

AdminFlights.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminFlights);
