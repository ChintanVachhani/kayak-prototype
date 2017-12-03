import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {createFlight} from "../AdminActions";

class CreateFlight extends React.Component {

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
    this.handleCreateFlight = this.handleCreateFlight.bind(this);
    this.updateLogo = this.updateLogo.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  updateLogo = (event) => {
      const data = new FormData();
      data.append('origin', this.state.origin);
    data.append('destination', this.state.destination);
    data.append('flightID', this.state.flightID);
    data.append('operator', this.state.operator);
    data.append('departureTime', this.state.departureTime);
    data.append('arrivalTime', this.state.arrivalTime);
    data.append('economy', this.state.economyPrice);
    data.append('business', this.state.businessPrice);
    data.append('firstClass', this.state.firstPrice);
    data.append('duration', this.state.duration);
    console.log("dTA : ", data)
      data.append('file', event.target.files[0]);
      this.setState({
        data: data
      });
      console.log("daaaaa :", data)
  }

  handleCreateFlight() {   
    
    
    this.toggle();
   
    this.props.createFlight(this.state.data);    

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
                  <input list="cities" className="form-control" id="inputEmail4" placeholder="From Where?" required onChange={(event) => {
                                    this.setState({
                                        origin: event.target.value
                                    }); }} />
                                <datalist id="cities">
                                {
                                  this.props.cities.map((city)=>{
                                    return (<div><option value={city}></option></div>)
                                  })
                                }
                                </datalist>                                    
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">To</label>
                  <input list="cities" className="form-control" id="inputPassword4" placeholder="To Where?" onChange={(event) => {
                                    this.setState({
                                        destination: event.target.value
                                    }); }} />
                                <datalist id="cities">
                                {
                                  this.props.cities.map((city)=>{
                                    return (<div><option value={city}></option></div>)
                                  })
                                }
                                </datalist>                                    
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputAddress">Flight Number</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Flight Number" onChange={(event) => {
                                    this.setState({
                                        flightID: event.target.value
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
                <div className="form-group col-md-4">
                  <label for="inputEmail4">Departure Time</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Departure Time" onChange={(event) => {
                                    this.setState({
                                        departureTime: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Arrival Time</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Arrival Time"  
                  onChange={(event) => {
                                    this.setState({
                                        arrivalTime: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Duration</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Duration"  
                  onChange={(event) => {
                                    this.setState({
                                        duration: event.target.value
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
                  <input className="form-control-file" type="file" onChange={this.updateLogo} />
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

function mapStateToProps(store) {
    const cities = store.admin.cities;
  return {cities};
}

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

