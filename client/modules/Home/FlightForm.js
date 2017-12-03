import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Home.css';
import {handleFlight} from './HomeActions';

class FlightForm extends Component {

state= {
    fromPlace: '',
    toPlace : '',
    departDate: '',
    returnDate: '',
    cabinClass: '',
    passengers: ''
};


hideReturn() 
    {   
        console.log("in one-way hding return");
        this.refs.returnDisplay.style="display: none";    
    }

showReturn() 
    {   
        console.log("in one-way hding return");
        this.refs.returnDisplay.style="display: block";  
        
    }


    render() {

    	

    return (

    	<div className="container">
    		<div style={{'display':'block', 'padding':'12px'} }>
    					
    						<table >
                            <tbody>
    						<tr>
    							<td style={{'width':'100px'}}><a id="divInFlights" href="#" onClick = {() => { this.showReturn()}}><small>ROUND-TRIP</small></a></td>
    							<td style={{'width':'75px'}}><a id="divInFlights" href="#" onClick = {() => { this.hideReturn()}}><small>ONE-WAY</small></a></td>
    						</tr>
                            </tbody>
    						</table>
    					
    		</div>
    		<div style={{'display':'block'} }>
    			
    				<div className="row">
                    <form className="form-inline">
						
							<div className="form-group"  style={{'padding':'1px'}}>
                            	<input
                                className="form-control"
                                id = {styles['formcontrol3']}
                                style={{'padding':'1px'}}
                               	type="text"
                                label="source"
                                placeholder="From Where?"
                                onChange={(event) => {
                                          this.setState({
                                        fromPlace: event.target.value
                                    });
                                 }}
                            	required />
                         	</div>
                    
                        
							<div className="form-group" style={{'padding':'1px'}}>
                            	<input
                                className="form-control"
                                id = {styles['formcontrol3']}
                                style={{'padding':'1px'}}
                                type="text"
                                label="destination"
                                placeholder="To where?"
                                onChange={(event) => {
                                          this.setState({
                                        toPlace: event.target.value
                                    });
                                 }}
                            	/>
                        	</div>
                        
                        
							<div className="form-group" style={{'padding':'1px'}}>
                            	<input
                                className="form-control"
                                id = {styles['formcontrol3']}
                                style={{'padding':'1px'}}
                                type="date"
                                label="depart"
                                placeholder="Depart"
                                onChange={(event) => {
                                          this.setState({
                                        departDate: event.target.value
                                    });
                                 }}
                                
                            	/>
                        	</div>
                        
                            <div id="returnDiv" ref="returnDisplay" style={{'padding':'1px'}}>
							 <div className="form-group" style={{'padding':'1px'}}>
                            	<input
                                className="form-control"
                                id = {styles['formcontrol3']}
                                style={{'padding':'1px'}}
                                type="date"
                                label="return"
                                placeholder="Return"
                                onChange={(event) => {
                                          this.setState({
                                        returnDate: event.target.value
                                    });
                                 }}
                                
                            	/>
                        	   </div>
                            </div>
                        
                            <div className="form-group" style={{'padding':'2px'}}>
                                <select id = {styles['formcontrol3']} className="form-control"
                                onChange={(event) => {
                                          this.setState({
                                        cabinClass: event.target.value
                                    });
                                 }}>
                                    
                                    <option value="economy" title="1" >Economy</option>
                                    <option value="business" title="2" >Business</option>
                                    <option value="first" title="3" >First</option>
                                </select>
                            </div>
                        
                        
                            <div className="form-group" style={{'padding':'1px'}}>
                                
                                <input
                                className="form-control"
                                id = {styles['formcontrol3']}
                                type="number"
                                min = "1"
                                label="Adults"
                                placeholder="Adults"
                                onChange={(event) => {
                                          this.setState({
                                        passengers: event.target.value
                                    });
                                 }}
                                 />
                            </div>
                      
                            <div  style={{'padding':'1px'}}>
							     <button type="Button" className={styles['arrow']} style={{'background-color': '#DC143C'}}
                                 onClick={() => this.props.handleFlight(this.state)}>
							     <span>
							     <svg className="_yT _nF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
							     <path d="M31.88 12.32l-1.43 1.4L39.56 23H20v2h19.56l-9.11 9.27 1.43 1.41L43.35 24 31.88 12.32M11 23h6v2h-6zM5 23h3v2H5z"></path>
							     </svg>
							     </span>
							     </button>
                            </div>

                    </form>
                   	</div>
    			

    		</div>
    	</div>
    	);
}
}
function mapDispatchToProps(dispatch) {
   return {
       handleFlight : (flightDetails) => dispatch(handleFlight(flightDetails))
    };
}

export default connect( null,  mapDispatchToProps)(FlightForm);
