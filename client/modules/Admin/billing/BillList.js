import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class BillList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "date":"",
      "month":""
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
        <button type="button" className="btn btn-primary" onClick={this.toggle}>Search Bills</button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>Search Bills</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="from">Select Date</label>
                  <input className="form-control"
                                type="date"                            
                                placeholder="Select Date"
                                onChange={(event) => {
                                          this.setState({
                                        fromDate: event.target.value
                                    });
                                 }}
                                
                              />
                </div>
                <div className="form-group col-md-6">
                  <label for="to">To</label>
                  <button type="button" className="btn btn-primary" onClick={() => {this.handleSearchByDate()}}>Search By Date</button>
                </div>
              </div>

               <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="from">Select Date</label>
                  <input className="form-control"
                                type="date"                            
                                placeholder="Select Date"
                                onChange={(event) => {
                                          this.setState({
                                        fromDate: event.target.value
                                    });
                                 }}
                                
                              />
                </div>
                <div className="form-group col-md-6">
                  <label for="to">To</label>
                  <button type="button" className="btn btn-primary" onClick={() => {this.handleSearchByMonth()}}>Search By Month</button>
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
  return {};
};

BillList.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillList);
