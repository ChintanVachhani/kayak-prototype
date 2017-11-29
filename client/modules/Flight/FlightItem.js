import React, {Component} from 'react';
import styles from './Flight.css';
export default class FlightItem extends Component {

    render() {
        const {flight} = this.props;       
        let duration = calculateInterval();
        console.log(duration);
        return (
            <div className={styles['item']}>
            <div className="row">
                <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                image
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h5 className="{styles['companyName']}">{flight.operator}</h5>
                            </div>
                        </div>
                      </div>                            
                      <div className="col-md-2">
                        <div className="row">
                            <div className="col-md-12">
                                <strong>{flight.departureTime}</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <strong>{flight.origin}</strong>
                            </div>
                        </div>                            
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                            <div className="col-md-12">
                                <span className={styles['fromToLine']}><hr/></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <span className={styles['flightStop']}>nonstop</span>
                            </div>
                        </div>                            
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                            <div className="col-md-12">
                                <strong>{flight.arrivalTime}</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <strong>{flight.destination}</strong>
                            </div>
                        </div>                            
                      </div>
                      <div className="col-md-2">
                        {duration}
                      </div>                                                                              
                    </div> 
                </div>
                <div className="col-md-2">
                    <span className= {styles['itemActionBlock']}>
                        <span className={styles['priceValue']}>{flight.price}</span><br/><br/>    
                        <button className="btn btn-warning" onClick="">Book Flight</button>
                    </span>                
                </div> 
            </div>               
            </div>
        );
    }
}
