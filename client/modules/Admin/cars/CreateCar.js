import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateCar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleCreateFolder = this.handleCreateFolder.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleCreateFolder() {
      
      this.toggle();

  }

  render() {

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggle}>{this.props.buttonLabel}</button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>Create Flight</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">From</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="From Where?" required />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">To</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="To Where?" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputAddress">Flight Number</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Flight Number" />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputAddress2">Operator</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Departure Time</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Departure" />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Arrival Time</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Arrival" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputCity">Economy Price</label>
                  <input type="text" className="form-control" id="inputCity" placeholder="Economy Price" />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">Business Price</label>
                  <input type="text" className="form-control" placeholder="Business Price" />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputZip">First Class Price</label>
                  <input type="text" className="form-control" id="inputZip" placeholder="First Class Price" />
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary" onSubmit={() => {this.handleCreateFolder()}}>Create Car</button>
              &nbsp;
               <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </form>
          </ModalBody>
        </Modal>
        
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

CreateCar.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCar);

