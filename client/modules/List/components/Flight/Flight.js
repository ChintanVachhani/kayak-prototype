import React, {Component} from 'react';
import styles from './Flight.css';
import EditFlight from './../../../Admin/flights/EditFlight';
import DeleteFlight from './../../../Admin/flights/DeleteFlight';
import {connect} from 'react-redux';
import {deleteFlight} from './../../../Admin/AdminActions';
import {serviceForBooking} from '../../ListActions';

class Flight extends Component {

  render() {

    const {flight, isAdmin, showOnly, serviceForBooking} = this.props;
    let depTime = flight.departureTime.toString();
    let arvTime = flight.arrivalTime.toString();
    switch (depTime.length) {
      case 1 :
        depTime = "000" + depTime;
        break;
      case 2 :
        depTime = "00" + depTime;
        break;
      case 3 :
        depTime = "0" + depTime;
        break;
    }
    let f = depTime.substring(0, 2) + ":" + depTime.substring(2, 4);
    switch (arvTime.length) {
      case 1 :
        arvTime = "000" + arvTime;
        break;
      case 2 :
        arvTime = "00" + arvTime;
        break;
      case 3 :
        arvTime = "0" + arvTime;
        break;
    }
    let a = arvTime.substring(0, 2) + ":" + arvTime.substring(2, 4);
    var imgSrc = new Buffer(flight.operatorImage.data, 'base64').toString();
    let img = "data:" + flight.operatorImage.contentType + ";base64," + imgSrc;
    return (
      <div className={styles['item']}>
        <div className="row">
          <div className="col-md-10" id={styles['itemDetailBlock']}>
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <img src={img} className={styles['imgWidth']}/>
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
                    <strong>{f}</strong>
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
                    <strong>{a}</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <strong>{flight.destination}</strong>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                {flight.duration}
              </div>
            </div>
          </div>
          {isAdmin === 'true' ?
            <div className="col-md-2" id={styles['itemActionBlock']}>
              <span className={styles['priceValue']}>${flight.price.economy}</span><br/><br/>
              <EditFlight flight={flight}/><br/>
              <button className="btn btn-warning" onClick={() => {
                if (confirm("Are you Sure? You want to delete this Flight?")) this.props.deleteFlight(flight._id)
              }}>Delete
              </button>
            </div>
            :
            <div className="col-md-2" id={styles['itemActionBlock']}>
              <span className={styles['priceValue']}>${flight.price.economy}</span><br/><br/>
              <div>
                {
                  showOnly ? '' :
                    <button className="btn btn-warning" onClick={() => {
                      serviceForBooking(flight, 'Flight')
                    }}>Book Flight</button>
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
    deleteFlight: (data) => dispatch(deleteFlight(data)),
    serviceForBooking: (data, type) => dispatch(serviceForBooking(data, type)),
  };
};

Flight.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Flight);
