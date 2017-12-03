import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Home.css';
import {handleCar} from './HomeActions';


class CarForm extends Component {


    state = {
        place : '',
        fromDate : '',
        toDate: '',
     };


    render() {

    	

    return (

    	
    		
    		<div style={{'display':'block', 'padding':'12px'} }>
    			<form>
    				<div className="row">
						
							<div className="form-inline" style={{'padding':'1px' }}>
                            	<input
                                id = {styles['formcontrol3']}
                                className="form-control"
                                style={{'padding':'1px', 'font-size': '14px'}}
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
                        
                        
							<div className="form-inline" style={{'padding':'1px'}}>
                            	<input
                                id = {styles['formcontrol3']}
                                className="form-control"
                                style={{'padding':'1px'}}
                                type="date"
                                label="fromDate"
                                placeholder="from"
                                onChange={(event) => {
                                          this.setState({
                                        fromDate: event.target.value
                                    });
                                 }}
                                
                            	/>
                        	</div>
                        
                        
                        
							<div className="form-inline" style={{'padding':'1px'}}>
                            	<input
                                id = {styles['formcontrol3']}
                                className="form-control"
                                style={{'padding':'1px'}}
                                type="date"
                                label="toDate"
                                placeholder="To"
                                onChange={(event) => {
                                          this.setState({
                                        toDate: event.target.value
                                    });
                                 }}
                                
                            	/>
                        	</div>
                        
                        <div style={{'padding':'1px'}}>
							<button type="Button" className={styles['arrow']} style={{'background-color': '#DC143C'}}
                            onClick={() => this.props.handleCar(this.state)}>
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
    	
    	);
}
}

function mapStateToProps(store) {
    const {home} = store;
    console.log("this is checkig reduer");
    console.log(home);
  return {};
}
function mapDispatchToProps(dispatch) {
   return {
       handleCar : (carDetails) => dispatch(handleCar(carDetails))
    };
}
export default connect( null,  mapDispatchToProps)(CarForm);