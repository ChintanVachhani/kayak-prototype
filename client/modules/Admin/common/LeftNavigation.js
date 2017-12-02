import React, {Component} from 'react';

class LeftNavigation extends Component {

	render() {

		return( 
        <div className="col-sm-3 col-md-2">     
        <nav className="hidden-xs-down bg-faded sidebar">
          <ul className="nav nav-pills flex-column">
          
            <li className="nav-item">
              <a className="nav-link" href="admin">Dashboard </a>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              <a className="nav-link" href="adminflights">Flights</a>
            </li>
            <li className="nav-item">
              &nbsp; 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="adminhotels">Hotels</a>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              <a className="nav-link" href="admincars">Cars</a>
            </li>
            <li className="nav-item">
             &nbsp;
            </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Bills</a>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Hosts</a>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
          </ul>
        </nav> 
        </div>     
			)
	}

}

export default LeftNavigation;