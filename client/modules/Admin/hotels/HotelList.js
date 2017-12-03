import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Hotel from './../../List/components/Hotel/Hotel';

// Import Style
import styles from './../../List/components/Hotel/Hotel.css';

class HotelList extends Component {
  render() {
    const {hotelList} = this.props;
    return (
        <div className={styles['listBackground']}>
            <div className="row">
                {
                <div className="col-md-12">
                    {
                    hotelList.map((hotel,index) => {
                        return(
                            <Hotel
                                key={index}
                                hotel={hotel} isAdmin={this.props.isAdmin}
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
   const hotelList = state.admin.hotelList;
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
