import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {createHotel} from "../AdminActions";

class CreateHotel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "hotelName":"",
      "star":"",
      "avgRating":"",
      "noReviews":"",
      "price":"",
      "address":"",
      "city":"", 
      "state":"",
      "zipCode":""
    };

    this.toggle = this.toggle.bind(this);
    this.handleCreateHotel = this.handleCreateHotel.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleCreateHotel() {
    this.toggle();
    this.props.createHotel(this.state);  

  }

  render() {

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggle}>{this.props.buttonLabel}</button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>Create Hotel</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Hotel Name</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Hotel Name" required
                  onChange={(event) => {
                                    this.setState({
                                        hotelName: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Address</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Address"
                  onChange={(event) => {
                                    this.setState({
                                        address: event.target.value
                                    }); }} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputAddress">City</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="City"
                onChange={(event) => {
                                    this.setState({
                                        city: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputAddress2">State</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="State"
                onChange={(event) => {
                                    this.setState({
                                        state: event.target.value
                                    }); }} />
                </div>
                 <div className="form-group col-md-4">
                  <label for="inputAddress2">Zip</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Zip"
                onChange={(event) => {
                                    this.setState({
                                        zipCode: event.target.value
                                    }); }} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">Price</label>
                  <input type="text" className="form-control" id="inputCity" placeholder="Price" 
                  onChange={(event) => {
                                    this.setState({
                                        price: event.target.value
                                    }); }} />
                </div>

                 <div className="form-group col-md-6">
                  <label for="inputCity">Star</label>
                  <input type="text" className="form-control" id="inputCity" placeholder="Star" 
                  onChange={(event) => {
                                    this.setState({
                                        star: event.target.value
                                    }); }}/>
                </div>
   
              </div>

              <div className="form-row">
               
                <div className="form-group col-md-6">
                  <label for="inputState">Average Rating</label>
                  <input type="text" className="form-control" placeholder="Average Rating" 
                  onChange={(event) => {
                                    this.setState({
                                        avgRating: event.target.value
                                    }); }}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputZip">Number of Reviews</label>
                  <input type="text" className="form-control" id="inputZip" placeholder="Reviews Number"
                  onChange={(event) => {
                                    this.setState({
                                        noReviews: event.target.value
                                    }); }} />
                </div>
              </div>
              
              <button type="button" className="btn btn-primary" onClick={() => {this.handleCreateHotel()}}>Create Hotel</button>
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
  return {
        createHotel : (data) => dispatch(createHotel(data))
    };
};

CreateHotel.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateHotel);

