import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {createCar} from "../AdminActions";

class CreateCar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "operator":"",
      "class":"",
      "price":"",
      "model":"",
      "capPersons":"",
      "capBags":"",
      "doors":"",
      "location":"",
      "data":""
    };

    this.toggle = this.toggle.bind(this);
    this.handleCreateCar = this.handleCreateCar.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  updateLogo = (event) => {
    const data = new FormData();
    data.append('operator', this.state.operator);
    data.append('class', this.state.class);
    data.append('price', this.state.price);
    data.append('model', this.state.model);
    data.append('capPersons', this.state.capPersons);
    data.append('capBags', this.state.capBags);
    data.append('doors', this.state.doors);
    data.append('location', this.state.location);
    data.append('file', event.target.files[0]);
    this.setState({
      data: data
    });

  }


  handleCreateCar() {      
      this.toggle();
      this.props.createCar(this.state.data);
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
                  <label for="inputEmail4">Operator</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Operator" required 
                  onChange={(event) => {
                                    this.setState({
                                        operator: event.target.value
                                    }); }}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Class</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Class" 
                  onChange={(event) => {
                                    this.setState({
                                        class: event.target.value
                                    }); }}/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputAddress">Cap Persons</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Cap Persons"
                onChange={(event) => {
                                    this.setState({
                                        capPersons: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputAddress2">Cap Bags</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Cap Bags" 
                onChange={(event) => {
                                    this.setState({
                                        capBags: event.target.value
                                    }); }}/>
                </div>
                 <div className="form-group col-md-4">
                  <label for="inputAddress2">Doors</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Doors"
                onChange={(event) => {
                                    this.setState({
                                        doors: event.target.value
                                    }); }} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Price</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Price"
                  onChange={(event) => {
                                    this.setState({
                                        price: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Model</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Model"
                  onChange={(event) => {
                                    this.setState({
                                        model: event.target.value
                                    }); }} />
                </div>
              </div>              
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputEmail4">Location</label>
                  <input list="cities" className="form-control" id="inputEmail4" placeholder="Location"
                  onChange={(event) => {
                                    this.setState({
                                        location: event.target.value
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
                <div className="form-group col-md-12">
                  <label for="inputCity">Operator Logo</label>
                  <input className="form-control-file" type="file" onChange={this.updateLogo} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
              <button type="button" className="btn btn-primary" onClick={() => {this.handleCreateCar()}}>Create Car</button>
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
    const cities = store.home.cities;
  return {cities};
}

const mapDispatchToProps = (dispatch) => {
  return {
        createCar : (data) => dispatch(createCar(data))
    };
};

CreateCar.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCar);

