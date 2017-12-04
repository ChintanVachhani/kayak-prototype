import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UncontrolledAlert } from 'reactstrap';
import CreateFlight from './CreateFlight';
import SearchFlight from './SearchFlight';
import FlightItem from './FlightItem';
import FlightList from './FlightList';
import {getAllFlights} from './../AdminActions';

class FlightsHome extends Component {

  componentDidMount() {

    this.props.getAllFlights();
  }


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
				 <UncontrolledAlert color="info">{this.props.msg}</UncontrolledAlert>
				</div>
			</div>
        	: ''}        

        <div className="row">
		<div className="col-12">
			<FlightList flightList={this.props.flights} isAdmin="true" />
        </div>
           </div>

      </div>  
    	
    );
  }
}

const mapStateToProps = (state) => {
	let flights = state.admin.flightList;
	let msg = state.admin.msg;
	state.admin.msg = undefined;
  return {flights, msg};
  
};

const mapDispatchToProps = (dispatch) => {
  return {
        getAllFlights : () => dispatch(getAllFlights())
    };
};

FlightsHome.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightsHome);
