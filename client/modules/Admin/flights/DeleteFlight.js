import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {createFlight} from "../AdminActions";

class DeleteFlight extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleOnclick() {      

    this.toggle();
    this.props.createFlight(this.state);
    

  }

  render() {

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggle}>Delete</button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader><h3>Delete Flight</h3></ModalHeader>
          <ModalBody>
            Do you want to delete this flight?
          </ModalBody>
          <ModalFooter>
                <Button color="primary" onClick={() => {this.handleOnclick()}} >Confirm</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};  
};

const mapDispatchToProps = (dispatch) => {
  return {
        createFlight : (data) => dispatch(createFlight(data))
    };
};

DeleteFlight.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteFlight);

