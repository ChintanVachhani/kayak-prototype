import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CarList from './components/Car/CarList';
import FlightList from './components/Flight/FlightList';
import HotelList from './components/Hotel/HotelList';

// Import Style
// import styles from './List.css';

export default class List extends Component {

  render() {
	const components = {
		car: CarList,
		flight: FlightList,
		hotel: HotelList
	};	
  	const Service = components[this.props.params.service];
    return (
    	<Service/>
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
