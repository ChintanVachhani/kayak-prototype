import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Admin.css';

class Admin extends Component {
  render() {
    return (
      <h1>Admin</h1>
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
