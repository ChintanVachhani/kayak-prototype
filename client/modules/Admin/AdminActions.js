import * as API from './api/AdminApi';

// Export Constants
export const CREATE_FLIGHT = 'CREATE_FLIGHT';


// Export Actions
export function createFlight(data) {
	
	let req = {};
	req.flightID = data.flightNumber;
	let price = {economy: data.economyPrice, business: data.businessPrice, firstClass: data.firstPrice }
	req.price = price;
	req.operator = data.operator;
	req.departureTime = data.depTime;
	req.arrivalTime = data.arvTime;
	req.origin = data.from;
	req.destination = data.to;
	req.duration = 1;

	return function(dispatch) {
		return  API.createFlight(req)
			    	.then((resData) => {
			    		if(resData.code === 502) {
			    			dispatch(createFlightResponse()); 
			    		}
			    		else {
			    			dispatch(createFlightResponse()); 	
			    		}
				        
	      		});
	  	};

}

function createFlightResponse() {
	return {
		type: CREATE_FLIGHT,
		msg : "New Flight Created"
	}
}
