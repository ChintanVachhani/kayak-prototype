import React, {Component} from 'react';
import {populateCities, populateCarDashBoardData, populateFlightDashBoardData,populateHotelDashBoardData, populateCityRevenueData } from '../AdminActions';
import {connect} from 'react-redux';
import GenericBarGraph from './GenericBarGraph';

class DashboardHome extends Component {
    componentWillMount(){
        this.props.populateCities();
        this.props.populateCarDashBoardData();
        this.props.populateFlightDashBoardData();
        this.props.populateHotelDashBoardData();
        this.props.populateCityRevenueData();
    } 
	render() {
    

		return( 
             
        <div className="col-sm-9 col-md-10 pt-5">
          <h1>Dashboard</h1>

          <div col-sm-9>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-5">  <GenericBarGraph title="Hotels Revenue Chart" field="total" fieldName="Hotel Revenue" xLabel="Hotels" yLabel="Revenue in $" data={this.props.hotels} /> </div>
              <div className="col-1"> &nbsp; </div>
               <div className="col-5"><GenericBarGraph title="Flights Revenue Chart" field="total" fieldName="Flight Revenue" xLabel="Flights" yLabel="Revenue in $" data={this.props.flights} /> </div>
            </div>
            <div className="row">
               <div className="row">
                          <div className="col-12"> &nbsp;</div>
                </div>
            </div>
            <div className="row">
                <div className="col-5"><GenericBarGraph title="Cars Revenue Chart" field="total" fieldName="Car Revenue" xLabel="Cars" yLabel="Revenue in $" data={this.props.cars} />   </div>
                <div className="col-1"> &nbsp; </div>
                 <div className="col-5"><GenericBarGraph title="City wise Revenue" field="total" fieldName="City Revenue" xLabel="City Name" yLabel="Revenue in $" data={this.props.cityRevenue} />   </div>
            </div>
           
          </div>
          </div>
        </div>
       
			)
	}

}

const mapStateToProps = (state) => {
    const cars = state.admin.dashboardCars;
    const hotels = state.admin.dashboardFlights;
    const flights = state.admin.dashboardHotels;
    const cityRevenue = state.admin.dashboardCityRevenue;
    console.log(cityRevenue);
  return {cars, hotels, flights, cityRevenue};  
};


const mapDispatchToProps = (dispatch) => {
   return {
        populateCities : () => dispatch(populateCities()),
        populateHotelDashBoardData : () => dispatch(populateHotelDashBoardData()),
        populateCarDashBoardData: () => dispatch(populateCarDashBoardData()),
        populateFlightDashBoardData : () => dispatch(populateFlightDashBoardData()),
        populateCityRevenueData : () => dispatch(populateCityRevenueData())
        
    };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHome);