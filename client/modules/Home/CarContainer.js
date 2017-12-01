import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Home.css';

import CarForm from "./CarForm";


class CarContainer extends Component {


    state = {
        place : '',
        fromDate : '',
        toDate: '',
     };


componentDidMount() {
    console.log(" Refreshing Home page");
        
    }

    render() {

    	

    return (

    	<div >
            <div className = "row">
    		  <div style={{'display':'block', 'padding':'12px'} }>
    					
    						<table >
                            <tbody>
    						<tr>
    							<td style={{'width':'150px'}}><a href="#"><small>SAME DROP-OFF</small></a></td>
    							
    						</tr>
                            </tbody>
    						</table>
    					
    		  </div>
            </div>
            
            <div >
    		            
                <CarForm />
            
            
            </div>
    	</div>
    	);
}
}
function mapDispatchToProps(dispatch) {
   return {
       handleCar : (carDetails) => dispatch(handleCar(carDetails))
    };
}
export default CarContainer; 