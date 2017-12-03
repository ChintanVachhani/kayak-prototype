import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {searchFlight} from "../AdminActions";

class SearchFlight extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "origin":"",
      "destination":"",
      "minDepartureTime":"",
      "minArrivalTime":"",
      "maxDepartureTime":"",
      "maxArrivalTime":""
    };

    this.toggle = this.toggle.bind(this);
    this.handleSearchFlight = this.handleSearchFlight.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleSearchFlight() {
      this.toggle();
      let query = "?";
      if(this.state.origin !== "") {
        query = query + "origin="+this.state.origin+"&";
      }

      if(this.state.destination !== "") {
        query = query + "destination="+this.state.destination+"&";
      }

      if(this.state.minDepartureTime !== "") {
        query = query + "minDepartureTime="+this.state.minDepartureTime+"&";
      }

      if(this.state.minArrivalTime !== "") {
        query = query + "minArrivalTime="+this.state.minArrivalTime+"&";
      }

      if(this.state.maxDepartureTime !== "") {
        query = query + "maxDepartureTime="+this.state.maxDepartureTime+"&";
      }

      if(this.state.maxArrivalTime !== "") {
        query = query + "maxArrivalTime="+this.state.maxArrivalTime;
      }

      this.state.origin = "";
      this.state.destination = "";
      this.state.minDepartureTime = "";
      this.state.minArrivalTime = "";
      this.state.maxDepartureTime = "";
      this.state.maxArrivalTime = "";

      this.props.searchFlight(query);
      
  }

  render() {

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggle}>{this.props.buttonLabel}</button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>Search Flight</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="from">From</label>
                  <input type="text" className="form-control" id="from" placeholder="From Where?" required
                  onChange={(event) => {
                                    this.setState({
                                        origin: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="to">To</label>
                  <input type="text" className="form-control" id="to" placeholder="To Where?"
                  onChange={(event) => {
                                    this.setState({
                                        destination: event.target.value
                                    }); }}  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="dep">Min Departure Time</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Min Departure Time" 
                  onChange={(event) => {
                                    this.setState({
                                        minDepartureTime: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Min Arrival Time</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Min Arrival Time" 
                   onChange={(event) => {
                                    this.setState({
                                        minArrivalTime: event.target.value
                                    }); }} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="dep">Max Departure Time</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Max Departure Time" 
                  onChange={(event) => {
                                    this.setState({
                                        maxDepartureTime: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Max Arrival Time</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Max Arrival Time" 
                  onChange={(event) => {
                                    this.setState({
                                        maxArrivalTime: event.target.value
                                    }); }} />
                </div>
              </div>
             <div className="form-row">
               <div className="form-group col-md-12">
              <button type="button" className="btn btn-primary" onClick={() => {this.handleSearchFlight()}}>Search Flight</button>
              &nbsp;
               <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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
        searchFlight : (data) => dispatch(searchFlight(data))
    };
};

SearchFlight.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFlight);
