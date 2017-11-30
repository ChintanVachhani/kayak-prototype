import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SearchCar extends React.Component {

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
          <ModalHeader>Search Flight</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="from">From</label>
                  <input type="text" className="form-control" id="from" placeholder="From Where?" required />
                </div>
                <div className="form-group col-md-6">
                  <label for="to">To</label>
                  <input type="text" className="form-control" id="to" placeholder="To Where?" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="dep">Departure Time</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Departure Time" />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Arrival Time</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Arrival Time" />
                </div>
              </div>
            
              <button type="submit" className="btn btn-primary" onSubmit={() => {this.handleCreateFolder()}}>Search Car</button>
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

SearchCar.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCar);
