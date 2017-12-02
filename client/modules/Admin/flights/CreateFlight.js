import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {createFlight} from "../AdminActions";

class CreateFlight extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "from": "",
      "to": "",
      "flightNumber": "",
      "operator": "",
      "depTime": "",
      "arvTime": "",
      "economyPrice": "",
      "businessPrice": "",
      "firstPrice": "",
      "logo": ""
    };

    this.toggle = this.toggle.bind(this);
    this.handleCreateFlight = this.handleCreateFlight.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleCreateFlight() {      

    this.toggle();
    this.props.createFlight(this.state);
    

  }

  render() {

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggle}>{this.props.buttonLabel}</button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader><h3>Create Flight</h3></ModalHeader>
          <ModalBody>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">From</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="From Where?" required onChange={(event) => {
                                    this.setState({
                                        from: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">To</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="To Where?" onChange={(event) => {
                                    this.setState({
                                        to: event.target.value
                                    }); }} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputAddress">Flight Number</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Flight Number" onChange={(event) => {
                                    this.setState({
                                        flightNumber: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputAddress2">Operator</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Operator"  onChange={(event) => {
                                    this.setState({
                                        operator: event.target.value
                                    }); }}/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Departure Time</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Departure Time" onChange={(event) => {
                                    this.setState({
                                        depTime: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Arrival Time</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Arrival Time"  
                  onChange={(event) => {
                                    this.setState({
                                        arvTime: event.target.value
                                    }); }} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputCity">Economy Price</label>
                  <input type="text" className="form-control" id="inputCity" placeholder="Economy Price" onChange={(event) => {
                                    this.setState({
                                        economyPrice: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">Business Price</label>
                  <input type="text" className="form-control" placeholder="Business Price" onChange={(event) => {
                                    this.setState({
                                        businessPrice: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputZip">First Class Price</label>
                  <input type="text" className="form-control" id="inputZip" placeholder="First Class Price" onChange={(event) => {
                                    this.setState({
                                        firstPrice: event.target.value
                                    }); }} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputCity">Operator Logo</label>
                  <input className="form-control-file" type="file" onChange={(event) => {
                                    this.setState({
                                        logo: event.target.value
                                    }); }} />
                </div>
              </div>
              <div className="form-row">
               <div className="form-group col-md-12">
              <button type="button" className="btn btn-primary" onClick={() => {this.handleCreateFlight()}}>Create Flight</button>
              &nbsp;
               <button type="button" className="btn btn-secondary" onClick={this.toggle}>Cancel</button>
               </div>
               </div>
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
  return {
        createFlight : (data) => dispatch(createFlight(data))
    };
};

CreateFlight.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateFlight);

