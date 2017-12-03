import React, {Component} from 'react';
import FlightIcon from 'react-icons/lib/md/flight-takeoff';
import People from 'react-icons/lib/md/people';
import Bag from 'react-icons/lib/fa/shopping-bag';
import styles from './Car.css';
export default class Car extends Component {

    render() {
        const {car} = this.props;
        return (
            <div className={styles['item']}>
            <div className="row">
                <div className="col-md-10" id= {styles['itemDetailBlock']}>
                        <h3>
                            Economy
                        </h3>
                        <div className="row">
                          <div className="col-md-8">
                            <span className={styles['carModel']}>Toyota or similar</span><br/>
                            <People size={car.capPersons}/>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;
                            <Bag size={car.capBags}/>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>doors {car.doors} &nbsp;&nbsp;&nbsp;</span>
                            <hr/>
                            <div className="row">
                                <div className="col-md-2">
                                    <span className="{styles['border-right']}">
                                        <h4 className="{styles['companyName']}">car.companyName</h4>
                                    </span>
                                </div>
                                <div className="col-md-8">
                                    <FlightIcon size={20} color='#cccccc'/>&nbsp;<span className={styles['ocation']}>car.location</span>&nbsp; shuttle
                                </div>      
                            </div>                 
                          </div>
                          <div className="col-md-4">
                            <p>Image</p>
                          </div>
                        </div> 
                </div>

                {this.props.isAdmin === 'true' ?
                    <div className="col-md-2" id= {styles['itemActionBlock']}>
                        <button className="btn btn-warning" onClick="">Edit</button><br/><br/>    
                        <button className="btn btn-warning" onClick="">Delete</button>            
                    </div> 
                :
                    <div className="col-md-2" id= {styles['itemActionBlock']}>
                        <strong><span className={styles['priceValue']}>{car.price}</span></strong><br/><br/>    
                        <button className="btn btn-warning" onClick="">Book Car</button>            
                    </div> 
                }

            </div>               
            </div>
        );
    }
}
