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
      "zipCode":"",
      "data":""
    };

    this.toggle = this.toggle.bind(this);
    this.handleCreateHotel = this.handleCreateHotel.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  updateLogo = (event) => {
      const data = new FormData();
      data.append('hotelName', this.state.hotelName);
    data.append('star', this.state.star);
    data.append('avgRating', this.state.avgRating);
    data.append('noReviews', this.state.noReviews);
    data.append('price', this.state.price);
    data.append('address', this.state.address);
    data.append('city', this.state.city);
    data.append('state', this.state.state);
    data.append('zipCode', this.state.zipCode);
    data.append('file', event.target.files[0]);
    this.setState({
      data: data
    });
  }

  handleCreateHotel() {
    this.toggle();
    this.props.createHotel(this.state.data);  

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
                <input list="cities" className="form-control" id="inputAddress" placeholder="City"
                onChange={(event) => {
                                    this.setState({
                                        city: event.target.value
                                    }); }} />
                                <datalist id="cities">
                                {
                                  this.props.cities.map((city)=>{
                                    return (<div><option value={city}></option></div>)
                                  })
                                }
                                </datalist>                                    

                </div>
                <div className="form-group col-md-4">
                  <label for="inputAddress2">State</label>
                <input list="states" className="form-control" id="inputAddress2" placeholder="State"
                onChange={(event) => {
                                    this.setState({
                                        state: event.target.value
                                    }); }} />
                                <datalist id="states">
                                {
                                  this.props.states.map((state)=>{
                                    return (<div><option value={state}></option></div>)
                                  })
                                }
                                </datalist>                                    
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
             <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputCity">Operator Logo</label>
                  <input className="form-control-file" type="file" onChange={this.updateLogo} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
              <button type="button" className="btn btn-primary" onClick={() => {this.handleCreateHotel()}}>Create Hotel</button>
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

function mapStateToProps(store) {
    const cities = store.admin.cities;
    const states = store.admin.states;
  return {cities,states};
}

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

