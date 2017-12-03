import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {searchBillsByDate, searchBillsByMonth} from './../AdminActions';

class SearchBills extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "date":"",
      "month":""
    };

    this.toggle = this.toggle.bind(this);
    this.handleSearchByDate = this.handleSearchByDate.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleSearchByDate() {      
      this.toggle();
      this.props.searchBillsByDate(this.state.date);

  }

  handleSearchByMonth() {      
      this.toggle();
      this.props.searchBillsByMonth(this.state.month);
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
                                        date: event.target.value
                                    });
                                 }}
                                
                              />
                </div>
                <div className="form-group col-md-6">
                  <button type="button" className="btn btn-primary" onClick={() => {this.handleSearchByDate()}}>Search By Date</button>
                </div>
              </div>
              <hr />
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="from">Select Date</label>
                      <select className="form-control" onChange={(event) => {
                                          this.setState({
                                        month: event.target.value
                                    });
                                 }}>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                      </select>
                </div>
                <div className="form-group col-md-6">
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
  return {
        searchBillsByDate : (data) => dispatch(searchBillsByDate(data)),
        searchBillsByMonth : (data) => dispatch(searchBillsByMonth(data))
    };
};

SearchBills.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBills);
