import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {searchCar} from "../AdminActions";

class SearchCar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "class":"",
      "location":"",
      "minPrice":"",
      "maxPrice":""
    };

    this.toggle = this.toggle.bind(this);
    this.handleSearchCar = this.handleSearchCar.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }



  handleSearchCar() {      
      this.toggle();
       let query = "?";
      if(this.state.class !== "") {
        query = query + "class="+this.state.class+"&";
      }

      if(this.state.location !== "") {
        query = query + "location="+this.state.location+"&";
      }

      if(this.state.minPrice !== "") {
        query = query + "minPrice="+this.state.minPrice+"&";
      }

      if(this.state.maxPrice !== "") {
        query = query + "maxPrice="+this.state.maxPrice;
      }

      this.state.class = "";
      this.state.location = "";
      this.state.minPrice = "";
      this.state.maxPrice = "";

      console.log(query)
      this.props.searchCar(query);

  }

  render() {

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggle}>{this.props.buttonLabel}</button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>Search Car</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="from">Class</label>
                  <input type="text" className="form-control" id="from" placeholder="Class" required 
                  onChange={(event) => {
                                    this.setState({
                                        class: event.target.value
                                    }); }}  />
                </div>
                <div className="form-group col-md-6">
                  <label for="to">Location</label>
                  <input type="text" className="form-control" id="to" placeholder="Location" onChange={(event) => {
                                    this.setState({
                                        location: event.target.value
                                    }); }}  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="dep">Min Price</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Min Price" 
                   onChange={(event) => {
                                    this.setState({
                                        minPrice: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Max Price</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Max Price" 
                   onChange={(event) => {
                                    this.setState({
                                        maxPrice: event.target.value
                                    }); }}  />
                </div>
              </div>
              <button type="button" className="btn btn-primary" onClick={() => {this.handleSearchCar()}}>Search Car</button>
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
        searchCar : (data) => dispatch(searchCar(data))
    };
};

SearchCar.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCar);
