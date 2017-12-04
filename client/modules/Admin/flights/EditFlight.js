import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {updateFlight} from "../AdminActions";

class EditFlight extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "origin": "",
      "destination": "",
      "flightID": "",
      "operator": "",
      "departureTime": "",
      "arrivalTime": "",
      "economyPrice": "",
      "businessPrice": "",
      "firstPrice": "",
      "duration": "",
      "logo": "",
      "price":"",
      "data":""
    };

    this.toggle = this.toggle.bind(this);
    this.handleUpdateFlight = this.handleUpdateFlight.bind(this);
  }

  componentDidMount() {

    this.state.origin = this.props.flight.origin;
    this.state.destination = this.props.flight.destination;
    this.state.flightID = this.props.flight.flightID;
    this.state.operator = this.props.flight.operator;
    this.state.departureTime = this.props.flight.departureTime;
    this.state.arrivalTime = this.props.flight.arrivalTime;
    this.state.economyPrice = this.props.flight.economyPrice;
    this.state.businessPrice = this.props.flight.businessPrice;
    this.state.firstPrice = this.props.flight.firstPrice;
    this.state.duration = this.props.flight.duration;

  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleUpdateFlight(id) {      
    this.toggle();
    this.props.updateFlight(this.state, id);  

  }

  render() {

    return (
     <div>
        <button type="button" className="btn btn-warning" onClick={this.toggle}>Edit</button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader><h3>Update Flight</h3></ModalHeader>
          <ModalBody>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">From</label>
                  <input type="text" className="form-control" id="inputEmail4" defaultValue={this.props.flight.origin} placeholder="From Where?" required onChange={(event) => {
                                    this.setState({
                                        origin: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">To</label>
                  <input type="text" className="form-control" id="inputPassword4" defaultValue={this.props.flight.destination} placeholder="To Where?" onChange={(event) => {
                                    this.setState({
                                        destination: event.target.value
                                    }); }} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputAddress">Flight Number</label>
                <input type="text" className="form-control" id="inputAddress" defaultValue={this.props.flight.flightID} placeholder="Flight Number" onChange={(event) => {
                                    this.setState({
                                        flightID: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputAddress2">Operator</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Operator" defaultValue={this.props.flight.operator}  onChange={(event) => {
                                    this.setState({
                                        operator: event.target.value
                                    }); }}/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputEmail4">Departure Time</label>
                  <input type="text" className="form-control" id="inputEmail4" defaultValue={this.props.flight.departureTime} placeholder="Departure Time" onChange={(event) => {
                                    this.setState({
                                        departureTime: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Arrival Time</label>
                  <input type="text" className="form-control" id="inputPassword4" defaultValue={this.props.flight.arrivalTime} placeholder="Arrival Time"  
                  onChange={(event) => {
                                    this.setState({
                                        arrivalTime: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Duration</label>
                  <input type="text" className="form-control" id="inputPassword4" defaultValue={this.props.flight.duration} placeholder="Duration"  
                  onChange={(event) => {
                                    this.setState({
                                        duration: event.target.value
                                    }); }} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputCity">Economy Price</label>
                  <input type="text" className="form-control" id="inputCity" defaultValue={this.props.flight.price.economyPrice} placeholder="Economy Price" onChange={(event) => {
                                    this.setState({
                                        economyPrice: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">Business Price</label>
                  <input type="text" className="form-control" placeholder="Business Price" defaultValue={this.props.flight.price.businessPrice} onChange={(event) => {
                                    this.setState({
                                        businessPrice: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputZip">First Class Price</label>
                  <input type="text" className="form-control" id="inputZip" defaultValue={this.props.flight.price.firstPrice} placeholder="First Class Price" onChange={(event) => {
                                    this.setState({
                                        firstPrice: event.target.value
                                    }); }} />
                </div>
              </div>

              <div className="form-row">
               <div className="form-group col-md-12">
              <button type="button" className="btn btn-primary" onClick={() => {this.handleUpdateFlight(this.props.flight._id)}}>Update Flight</button>
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
        updateFlight : (data) => dispatch(updateFlight(data))
    };
};

EditFlight.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFlight);

