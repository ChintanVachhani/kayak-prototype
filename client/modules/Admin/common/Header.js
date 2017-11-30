import React, {Component} from 'react';

// Import Style
import styles from './../Admin.css';

class Header extends Component {

	render() {

		return( 
             
          <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
            <a className="navbar-brand" href="admin"><h2 className={styles['headerBrand']}>Kayak Admin</h2></a>
            <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
          </nav>          
			)
	}

}

export default Header;