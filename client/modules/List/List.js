import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CarList from './components/Car/CarList';
import FlightList from './components/Flight/FlightList';
import HotelList from './components/Hotel/HotelList';
import Header from '../Header/Header';
import CarForm from '../Home/CarForm';
import FlightForm from '../Home/FlightForm';
import HotelForm from '../Home/HotelForm';
import Footer from '../Footer/Footer';
import CarSidebar from './components/Filter/CarSidebar';
import FlightSidebar from './components/Filter/FlightSidebar';
import HotelSidebar from './components/Filter/HotelSidebar';


// Import Style
import styles from './List.css';

export default class List extends Component {

  render() {
	const components = {
		car: [CarList,CarForm,CarSidebar],
		flight: [FlightList,FlightForm,FlightSidebar],
		hotel: [HotelList,HotelForm,HotelSidebar]
	};
	//if(this.props.params.service){
	  	const Service = components[this.props.params.service][0];
	  	const ServiceForm = components[this.props.params.service][1];
	  	const FilterSidebar = components[this.props.params.service][2];
  	//}
    return (
    	<div className="container-fluid">
	    	<div className="row" id={styles['header']}>
		    	<Header/>
	    	</div>
	    	<div className="row" id={styles['form-color']}>
		    	<ServiceForm/>
	    	</div>
	    	<div className="row" id={styles['body']}>
		    	<div className="col-md-3" id={styles['sidebar']}>
		    		<FilterSidebar/>
		    	</div>
		    	<div className="col-md-8">
		    		<Service/>
		    	</div>
	    	</div>
	    	<div>
	    		<Footer/>
	    	</div>
    	</div>
    );
  }
}

// const mapStateToProps = (state) => {
// 	console.log(state);
//    	const carList = state.list.carList;
//     return {carList};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// List.propTypes = {
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(List);
