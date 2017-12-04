import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Hotel from './Hotel';

import {getHotelList} from '../../ListActions';
// Import Style
import styles from './Hotel.css';

class HotelList extends Component {

  componentWillMount(){
    this.props.getHotelList(this.props.hotelFormData);
  }

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
   const hotelList = state.list.hotelList;
   const hotelFormData = state.home.hotelFormData;
    return {hotelList, hotelFormData};
};

 const mapDispatchToProps = (dispatch) => {
   return {
    getHotelList : (criteria) => dispatch(getHotelList(criteria))
   };
 };

HotelList.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelList);
