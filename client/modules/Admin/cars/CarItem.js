import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CarItem extends Component {
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
            <button type="button" className="btn btn-primary">Edit</button>&nbsp;
            <button type="button" className="btn btn-primary">Delete</button>
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

CarItem.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarItem);