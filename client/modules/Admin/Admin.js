import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './common/Header';
import LeftNavigation from './common/LeftNavigation';
import MainContent from './common/MainContent';

// Import Style
import styles from './Admin.css';


class Admin extends Component {
  render() {
    return (
        <div>
  		    <Header />
  		  	<div className={styles['headerMargin']}>
  		    <div className="container-fluid">
        			<div className="row">
        				<LeftNavigation />
        				<MainContent />
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

Admin.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
