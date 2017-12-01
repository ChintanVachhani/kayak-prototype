import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

// Import Style
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
    	<div className="container-fluid">
    	<div className = "row" id={styles['footer']}>
    		<div className="col-md-4">
    			<strong><h4>Services</h4></strong><br/><br/>
    			<Link to="/" style={{color: 'white'}}>Car reservation</Link><br/><br/>
    			<Link to="/" style={{color: 'white'}}>Flight booking</Link><br/><br/>
    			<Link to="/" style={{color: 'white'}}>Hotel reservation</Link><br/><br/>
    		</div>
    		<div className="col-md-4">
    			<strong><h4>Account</h4></strong><br/><br/>
    			<Link to="/" style={{color: 'white'}}>Account Preference</Link><br/><br/>
    			<Link to="/" style={{color: 'white'}}>My Bookings</Link><br/><br/>  		
    		</div>
    		<div className="col-md-4">
    			<strong><h4>About</h4></strong><br/><br/>
    			Project-group 10
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

Footer.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
