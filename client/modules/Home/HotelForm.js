import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Home.css';
import {handleHotel} from './HomeActions';

class HotelForm extends Component {

    state = {
        place: '',
        checkin: '',
        checkout: '',
        rooms: ''
    }

    render() {

    	

    return (

    	<div className="container">
           <br />
           <br />
    		
    		<div  style={{'display':'block'} }>
    			<form>
    				<div className="row">
						<div className = "col-md-2" style={{'padding':'1px'}}>
							<div className="form-inline" style={{'padding':'1px'}}>
                            	<input
                                className="form-control"
                                id = {styles['formcontrol3']}
                               	type="text"
                                label="source"
                                placeholder="Where?"
                               
                                onChange={(event) => {
                                          this.setState({
                                        place: event.target.value
                                    });
                                 }}
                            	required />
                         	</div>
                        </div>
                        <div className = "col-md-2" style={{'padding':'1px'}}>
							<div className="form-inline" style={{'padding':'1px'}}>
                            	<input
                                className="form-control"
                                id = {styles['formcontrol3']}
                                type="date"
                                label="checkin"
                                placeholder="Check-in"
                                onChange={(event) => {
                                          this.setState({
                                        checkin: event.target.value
                                    });
                                 }}
                                
                            	required/>
                        	</div>
                        </div>
                        
                        <div className = "col-md-2" style={{'padding':'1px'}}>
							<div className="form-inline" style={{'padding':'1px'}}>
                            	<input
                                className="form-control"
                                id = {styles['formcontrol3']}
                                type="date"
                                label="checkout"
                                placeholder="Check-out"
                                onChange={(event) => {
                                          this.setState({
                                        checkout: event.target.value
                                    });
                                 }}
                                
                            	required/>
                        	</div>
                        </div>
                        <div className = "col-md-2" style={{'padding':'1px'}}>
                            <div className="form-inline" style={{'padding':'1px'}}>
                                
                                <input
                                className="form-control"
                                id = {styles['formcontrol3']}
                                type="number"
                                min = "1"
                                label="rooms"
                                placeholder="Rooms"
                                onChange={(event) => {
                                          this.setState({
                                        rooms: event.target.value
                                    });
                                 }}
                                 required/>
                                  
                                
                               
                            </div>
                        </div>
                        <div className = "col-md-1" style={{'padding':'1px'}}>
							<button type="Button" className={styles['arrow']} style={{'background-color': '#DC143C'}}
                            onClick={() => this.props.handleHotel(this.state)}>
							<span>
							<svg className="_yT _nF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
							<path d="M31.88 12.32l-1.43 1.4L39.56 23H20v2h19.56l-9.11 9.27 1.43 1.41L43.35 24 31.88 12.32M11 23h6v2h-6zM5 23h3v2H5z"></path>
							</svg>
							</span>
							</button>
                        </div>


                   	</div>
    			</form>

    		</div>
    	</div>
    	);
}
}

function mapDispatchToProps(dispatch) {
   return {
       handleHotel : (hotelDetails) => dispatch(handleHotel(hotelDetails))
    };
}
export default connect( null,  mapDispatchToProps)(HotelForm);