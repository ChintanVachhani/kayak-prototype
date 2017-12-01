import React, {Component} from 'react';
import Star from 'react-icons/lib/fa/star';
import styles from './Hotel.css';
export default class Hotel extends Component {

    render() {
        const {hotel,isAdmin} = this.props;
        let starPrinted = 0;
        let stars= function(){

        }
        return (
            <div className={styles['item']}>
            <div className="row">
                <div className="col-md-10" id= {styles['itemDetailBlock']}>
	                <div className="row">
	                  <div className="col-md-5">  
	                  	image              
	                  </div>
	                  <div className="col-md-7">
						<h4>{hotel.name}</h4>
						<span>
						  {
						  	Array(5).fill(1).map((el, starPrinted) =>
						    (starPrinted<hotel.star)?(<Star size={15}/>):<Star color="#cccccc" size={15}/>)
						  }
						</span><br/><br/><br/><br/>
						<div className="row">
							<div className="col-md-1" id={styles['rating']}>
								<strong>{hotel.avgRatings}</strong>
							</div>
							<div className="col-md-10">
								{hotel.noReviews}&nbsp;&nbsp;reviews
							</div>
						</div>
	                  </div>
	                </div> 
                </div>
                {isAdmin === 'true' ?
	 				<div className="col-md-2" id= {styles['itemActionBlock']}>
	                    <button className="btn btn-warning" onClick="">Edit</button><br/><br/>    
	                    <button className="btn btn-warning" onClick="">Delete</button>            
	                </div> 
                :
                	<div className="col-md-2" id= {styles['itemActionBlock']}>
	                    <strong><span className={styles['priceValue']}>{hotel.price.standard}</span></strong><br/><br/>    
	                    <button className="btn btn-warning" onClick="">Book Hotel</button>            
	                </div>

            	}
               
            </div>               
            </div>
        );
    }
}
