import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Booking from './Booking';
// import {getCarList} from '../../ListActions';


// Import Style
import styles from './Booking.css';

class BookingList extends Component {


  render() {
    const {bookingList} = this.props;
    return (
        <div className={styles['listBackground']}>
            <div className="row">
                {
                <div className="col-md-12">
                    {
                    bookingList.map((booking,index) => {
                        return(
                            <Booking
                                key={index}
                                booking={booking}
                            />
                        );
                    })
                    }
                </div>
                }
            </div>
        </div>   	
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
//     // const carList = [{ id: "1", class : "Economy" ,  company: "Enterprise", model: "nissan", cap_persons: "4", cap_bags: '2', doors: '4', location: 'sanjose airport', price: '$25'}
//     //       ,{ id: "2", class : "Luxury" ,  company: "Enterprise", model: "nissan", cap_persons: "4", cap_bags: '2', doors: '4', location: 'sanjose airport', price: '$25'}];
  const bookingList = state.list.bookingList;
  // const carFormdata = state.home.carFormData;
  return {bookingList};
};

 const mapDispatchToProps = (dispatch) => {
   return {
       // getCarList : (criteria)  => dispatch(getCarList(criteria))
    };
 };

 BookingList.propTypes = {
 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingList);
