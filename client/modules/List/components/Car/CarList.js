import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Car from './Car';

// Import Style
import styles from './Car.css';

class CarList extends Component {
  render() {
    const {carList} = this.props;
    return (
            <div className="container-fluid">
                <div className={styles['listBackground']}>
                    <div className="row">
                        {
                        <div className="col-md-12">
                            {
                            carList.map((car,index) => {
                                return(
                                    <Car
                                        key={index}
                                        car={car} isAdmin={this.props.isAdmin}
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
//     // const carList = [{ id: "1", class : "Economy" ,  company: "Enterprise", model: "nissan", cap_persons: "4", cap_bags: '2', doors: '4', location: 'sanjose airport', price: '$25'}
//     //       ,{ id: "2", class : "Luxury" ,  company: "Enterprise", model: "nissan", cap_persons: "4", cap_bags: '2', doors: '4', location: 'sanjose airport', price: '$25'}];
   const carList = state.list.carList;
    return {carList};
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// CarList.propTypes = {
// };

export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(CarList);
