import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Hotel from './Hotel';

// Import Style
import styles from './Hotel.css';

class HotelList extends Component {
  render() {
    const {hotelList} = this.props;
    return (
            <div className="container-fluid">
                <div className={styles['listBackground']}>
                    <div className="row">
                        {
                        <div className="col-md-12">
                            {
                            hotelList.map((hotel,index) => {
                                return(
                                    <Hotel
                                        key={index}
                                        hotel={hotel}
                                    />
                                );
                            })
                            }
                        </div>
                        }
                    </div>
                </div>      
            </div>    	
    );
  }
}

const mapStateToProps = (state) => {
   const hotelList = state.hotel.hotelList;
    return {hotelList};
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

HotelList.propTypes = {
};

export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(HotelList);
