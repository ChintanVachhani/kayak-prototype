import React, {Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {adminsignout} from './../AdminActions';

// Import Style
import styles from './../Admin.css';

class LeftNavigation extends Component {

	render() {

		return( 
        <div className="col-sm-3 col-md-2">     
        <nav className="hidden-xs-down bg-faded sidebar" id={styles['whiteBackground']}>
          <ul className="nav nav-pills flex-column">
          
            <li className="nav-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              <Link to="/admin/flights">Flights</Link>
            </li>
            <li className="nav-item">
              &nbsp; 
            </li>
            <li className="nav-item">
              <Link to="/admin/hotels">Hotels</Link>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              <Link to="/admin/cars">Cars</Link>
            </li>
            <li className="nav-item">
             &nbsp;
            </li>
            <li className="nav-item">
              <Link to="/admin/hotels">Bills</Link>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              <Link to="/admin/hotels">Hosts</Link>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              <Link to="admin" onClick={() => {this.props.adminsignout()}} >Logout</Link>
            </li>
          </ul>
        </nav> 
        </div>     
			)
	}

}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return { adminsignout : () => dispatch(adminsignout()) };
};

LeftNavigation.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavigation);

