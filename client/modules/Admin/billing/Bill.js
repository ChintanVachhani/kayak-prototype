import React, {Component} from 'react';
import styles from './Bill.css';
export default class Bill extends Component {

    render() {
       
        return (
             <div className={styles['item']}>
            <div className="row">
                <div className="col-md-12" id= {styles['itemDetailBlock']}>
                        <h3>
                            {this.props.bill.serviceType}
                        </h3>
                        <div className="row">
                          <div className="col-md-12">
                                                      
                            <span>{this.props.bill.dateAdded} &nbsp;&nbsp;&nbsp;</span>
                            <hr/>
                            <div className="row">
                                <div className="col-md-2">
                                    <span className="{styles['border-right']}">
                                        <h4 className="{styles['companyName']}">Price : {this.props.bill.bookingDetail.price}</h4>
                                    </span>
                                </div>
                                <div className="col-md-8">
                                    &nbsp;<span className={styles['ocation']}>{this.props.bill.bookingDetail.serviceId}</span>&nbsp; shuttle
                                </div>      
                            </div>                 
                          </div>
                          
                        </div> 
                </div>

   
            </div>               
            </div>
        );
    }
}
