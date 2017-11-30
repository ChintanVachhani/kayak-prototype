import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateCar from './CreateCar';
import SearchCar from './SearchCar';
import CarItem from './CarItem';


class CarsHome extends Component {
  render() {
    return (

    	<div className="col-sm-9 col-md-10 pt-5">			
        <div className="row">
			<div className="col-9">     
        		<p className="text-left"><h4>Cars</h4></p>        		
        	</div>
        	<div className="col-1">
        		<SearchCar  buttonLabel="Search Car" />
        	</div>
        	<div className="col-1">
        		<CreateCar  buttonLabel="Create Car" />
        	</div>
        	<div className="col-1">
        		&nbsp;
        	</div>
        </div>

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
		                 	this.props.cars.map((car) => {
		                 			return (<CarItem operator="CP" number="AX100" from="SJC" to="BLR" depTime="12:30" arvTime="14:50" />);
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
	let cars = ["1", "2", "3", "4", "5"]

  return {cars};
  
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

CarsHome.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsHome);
