import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../common/Header';
import LeftNavigation from './../common/LeftNavigation';
import HotelsHome from './HotelsHome';
import styles from './../Admin.css';

class AdminHotels extends Component {
  render() {
    return (

    	<div>
  		    <Header />
  		  	<div className={styles['headerMargin']}>
  		    <div className="container-fluid">
        			<div className="row">
        				<LeftNavigation />
        				<HotelsHome />
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

AdminHotels.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHotels);
