import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Booking from './Booking';
import {getUserBilling} from '../../ListActions';


// Import Style
import styles from './Booking.css';

class BookingList extends Component {
  componentWillMount(){
    this.props.getUserBilling(this.props.userEmail);
  }  
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
  const userEmail = state.header.userdetails.email;
  const bookingList = state.list.bookingList;
  return {userEmail,bookingList};
};

 const mapDispatchToProps = (dispatch) => {
   return {
       getUserBilling : (email)  => dispatch(getUserBilling(email))
    };
 }

 BookingList.propTypes = {
 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingList);
