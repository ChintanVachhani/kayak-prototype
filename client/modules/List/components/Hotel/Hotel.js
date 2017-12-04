import React, {Component} from 'react';
import Star from 'react-icons/lib/fa/star';
import styles from './Hotel.css';
import {connect} from 'react-redux';
import {deleteHotel} from './../../../Admin/AdminActions';
import {serviceForBooking} from '../../ListActions';

class Hotel extends Component {

  render() {
    const {hotel, isAdmin, showOnly, serviceForBooking} = this.props;
    let starPrinted = 0;
    let stars = function () {

    }
    var imgSrc = new Buffer(hotel.hotelImage.data, 'base64').toString();
    let img = "data:" + hotel.hotelImage.contentType + ";base64," + imgSrc;
    return (
      <div className={styles['item']}>
        <div className="row">
          <div className="col-md-10" id={styles['itemDetailBlock']}>
            <div className="row">
              <div className="col-md-5">
                <img src={img} className={styles['imgWidth']}/>
              </div>
              <div className="col-md-7">
                <h4>{hotel.hotelName}</h4>
                <span>
						  {
                Array(5).fill(1).map((el, starPrinted) =>
                  (starPrinted < hotel.star) ? (<Star size={15}/>) : <Star color="#cccccc" size={15}/>)
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
            <div className="col-md-2" id={styles['itemActionBlock']}>
              <strong><span className={styles['priceValue']}>${hotel.price}</span></strong><br/><br/>
              <button className="btn btn-warning" onClick="">Edit</button>
              <br/><br/>
              <button className="btn btn-warning" onClick={() => {
                if (confirm("Are you Sure? You want to delete this Hotel?")) this.props.deleteHotel(hotel._id)
              }}>Delete
              </button>
            </div>
            :
            <div className="col-md-2" id={styles['itemActionBlock']}>
              <strong><span className={styles['priceValue']}>{hotel.price}</span></strong><br/><br/>
              <div>
                {
                  showOnly ? '' :
                    <button className="btn btn-warning" onClick={() => {
                      serviceForBooking(hotel, 'Hotel')
                    }}>Book Hotel</button>
                }
              </div>
            </div>

          }

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHotel: (data) => dispatch(deleteHotel(data)),
    serviceForBooking: (data, type) => dispatch(serviceForBooking(data, type)),
  };
};

Hotel.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hotel);
