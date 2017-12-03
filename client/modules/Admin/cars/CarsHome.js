import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateCar from './CreateCar';
import SearchCar from './SearchCar';
import CarItem from './CarItem';
import { Alert } from 'reactstrap';
import CarList from './CarList';
import {getAllCars} from './../AdminActions';

class CarsHome extends Component {

  componentDidMount() {

    this.props.getAllCars();
  }

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
			<CarList carList={this.props.cars} isAdmin="true" />
        </div>
           </div>

      </div>  
    	
    );
  }
}

const mapStateToProps = (state) => {
	let cars = state.admin.carList;
	let msg = state.admin.msg;
	state.admin.msg = undefined;
  	return {cars, msg};
  
};

const mapDispatchToProps = (dispatch) => {
  return {
        getAllCars : () => dispatch(getAllCars())
    };
};

CarsHome.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsHome);
