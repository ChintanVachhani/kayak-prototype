import React, {Component} from 'react';
import styles from './Flight.css';
export default class Flight extends Component {

    render() {
        const {flight} = this.props;
        function calculateInterval(){
            let departure = flight.departureTime.split(':');
            let departureTime = toSeconds(departure[0], departure[1]);
            let arrival = flight.arrivalTime.split(':');
            let arrivalTime = toSeconds(arrival[0], arrival[1]);
            let difference = arrivalTime - departureTime;
            console.log("time diff",difference);
            if (difference < 0)
            {
                difference = Math.abs(difference);
            }
            let hours = parseInt(difference/3600) 
            hours = hours < 10 ? "0" + hours : hours;
            let minutes =  parseInt((difference/3600) % 1 *60)
            minutes = minutes < 10 ? "0" + minutes : minutes;

            return (hours + "h " + minutes+"m");
        }

        function toSeconds(hours, minutes)
        {
            console.log("recevd in sec",hours+':'+minutes);
            let seconds = 0;
            if ( (hours >= 0 && hours < 24) && (minutes >= 0 && minutes < 60))
            {
                seconds += (parseInt(hours)*3600) + (parseInt(minutes)*60);
            }
            return seconds;
        }        
        let duration = calculateInterval();
        console.log(duration);
        return (
            <div className={styles['item']}>
            <div className="row">
                <div className="col-md-10" id={styles['itemDetailBlock']}>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                image
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h7 className={styles['companyName']}>{flight.operator}</h7>
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
                                <span className={styles['fromToLine']}><hr className={styles['fromToLine']}/></span>
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
                <div className="col-md-2" id={styles['itemActionBlock']}>
                        <span className={styles['priceValue']}>{flight.economy.price}</span><br/><br/>    
                        <button className="btn btn-warning" onClick="">Book Flight</button>               
                </div> 
            </div>               
            </div>
        );
    }
}
