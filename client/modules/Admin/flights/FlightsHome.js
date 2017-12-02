import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'reactstrap';
import CreateFlight from './CreateFlight';
import SearchFlight from './SearchFlight';
import FlightItem from './FlightItem';


class FlightsHome extends Component {
  render() {
    return (

    	<div className="col-sm-9 col-md-10 pt-5">		
        <div className="row">
			<div className="col-9">     
        		<p className="text-left"><strong>Flights</strong></p>        		
        	</div>
        	<div className="col-1">
        		<SearchFlight  buttonLabel="Search Flight" />
        	</div>
        	<div className="col-1">
        		<CreateFlight  buttonLabel="Create Flight" />
        	</div>
        	<div className="col-1">
        		&nbsp;
        	</div>
        </div>
        <br/>
        {this.props.msg !== undefined ? 
        	<div className="row">
				<div className="col-12">
				 <Alert color="info">{this.props.msg}</Alert>
				</div>
			</div>
        	: ''}
	        

        <div className="row">
		<div className="col-12">
		 <div className="card">
		        <div className="card-header">
		          <i className="fa fa-table"></i> Existing Flights</div>
		        <div className="card-body">
		          <div className="table-responsive">
		            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
		              <thead>
		                <tr>
		                  <th>Operator</th>
		                  <th>FLight Number</th>
		                  <th>From</th>
		                  <th>To</th>
		                  <th>Departure Time</th>
		                  <th>Arrival Time</th>
		                  <th>Action</th>
		                </tr>
		              </thead>
		              <tbody>
		                 {
		                 	this.props.flights.map((flight) => {
		                 			return (<FlightItem operator="CP" number="AX100" from="SJC" to="BLR" depTime="12:30" arvTime="14:50" />);
		                 	})	                 	
		                 	
		                 }
		               
		              </tbody>
		            </table>
		          </div>
		        </div>
		      </div>

        </div>
           </div>

      </div>  
    	
    );
  }
}

const mapStateToProps = (state) => {
	let flights = ["1", "2", "3", "4", "5"]

	let msg = state.admin.msg;
	console.log("msg from admin : ",state);
	console.log("msg from admin : "+msg);
  return {flights, msg};
  
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

FlightsHome.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightsHome);
