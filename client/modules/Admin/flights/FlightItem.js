import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditFlight from './EditFlight';
import DeleteFlight from './DeleteFlight';

class FlightItem extends Component {
  render() {
    return (

        <tr>
          <td>{this.props.operator}</td>
          <td>{this.props.number}</td>
          <td>{this.props.from}</td>
          <td>{this.props.to}</td>
          <td>{this.props.depTime}</td>
          <td>{this.props.arvTime}</td>
          <td> 
            <EditFlight />
            <DeleteFlight />
          </td>
        </tr>
      
      
    );
  }
}

const mapStateToProps = (state) => {
  return {};  
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

FlightItem.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightItem);