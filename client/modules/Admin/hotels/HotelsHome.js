import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateHotel from './CreateHotel';
import SearchHotel from './SearchHotel';
import HotelItem from './HotelItem';


class HotelsHome extends Component {
  render() {
    return (

    	<div className="col-sm-9 col-md-10 pt-5">			
        <div className="row">
			<div className="col-9">     
        		<p className="text-left"><h4>Hotels</h4></p>        		
        	</div>
        	<div className="col-1">
        		<SearchHotel  buttonLabel="Search Hotels" />
        	</div>        	
        	<div className="col-1">
        		<CreateHotel  buttonLabel="Create Hotel" />
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
		                 	this.props.hotels.map((hotel) => {
		                 			return (<HotelItem operator="CP" number="AX100" from="SJC" to="BLR" depTime="12:30" arvTime="14:50" />);
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
	let hotels = ["1", "2", "3", "4", "5"]

  return {hotels};
  
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

HotelsHome.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelsHome);
