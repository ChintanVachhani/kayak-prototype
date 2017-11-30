import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../common/Header';
import LeftNavigation from './../common/LeftNavigation';
import CarsHome from './CarsHome';
import styles from './../Admin.css';

class AdminCars extends Component {
  render() {
    return (

    	<div>
  		    <Header />
  		  	<div className={styles['headerMargin']}>
  		    <div className="container-fluid">
        			<div className="row">
        				<LeftNavigation />
        				<CarsHome />
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

AdminCars.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminCars);
