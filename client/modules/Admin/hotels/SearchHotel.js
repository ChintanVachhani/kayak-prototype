import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {searchHotel} from "../AdminActions";

class SearchHotel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "star":"",
      "city":"",
       "minPrice":"",
       "maxPrice":""
    };

    this.toggle = this.toggle.bind(this);
    this.handleSearchHotel = this.handleSearchHotel.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleSearchHotel() {      
      this.toggle();
       let query = "?";
      if(this.state.star !== "") {
        query = query + "star="+this.state.star+"&";
      }

      if(this.state.city !== "") {
        query = query + "city="+this.state.city+"&";
      }

      if(this.state.minPrice !== "") {
        query = query + "minPrice="+this.state.minPrice+"&";
      }

      if(this.state.maxPrice !== "") {
        query = query + "maxPrice="+this.state.maxPrice;
      }

      this.state.star = "";
      this.state.city = "";
      this.state.minPrice = "";
      this.state.maxPrice = "";

      console.log(query)
      this.props.searchHotel(query);

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
                  <label for="from">City</label>
                  <input type="text" className="form-control" id="from" placeholder="City" required 
                   onChange={(event) => {
                                    this.setState({
                                        city: event.target.value
                                    }); }}  />
                </div>
                <div className="form-group col-md-6">
                  <label for="to">Star</label>
                  <input type="text" className="form-control" id="to" placeholder="Star" 
                   onChange={(event) => {
                                    this.setState({
                                        star: event.target.value
                                    }); }} />
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
            
              <button type="button" className="btn btn-primary" onClick={() => {this.handleSearchHotel()}}>Search Hotel</button>
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
        searchHotel : (data) => dispatch(searchHotel(data))
    };
};

SearchHotel.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchHotel);
