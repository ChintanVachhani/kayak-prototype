import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Car from './Car';
import {getCarList} from '../../ListActions';


// Import Style
import styles from './Car.css';

class CarList extends Component {

  componentWillMount(){
    this.props.getCarList(this.props.carFormdata);
  }


  render() {
    const {carList} = this.props;
    return (
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
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state in car list");
  console.log(state);
//     // const carList = [{ id: "1", class : "Economy" ,  company: "Enterprise", model: "nissan", cap_persons: "4", cap_bags: '2', doors: '4', location: 'sanjose airport', price: '$25'}
//     //       ,{ id: "2", class : "Luxury" ,  company: "Enterprise", model: "nissan", cap_persons: "4", cap_bags: '2', doors: '4', location: 'sanjose airport', price: '$25'}];
  const carList = state.list.carList;
  const carFormdata = state.home.carFormData;
  return {carList, carFormdata};
};

 const mapDispatchToProps = (dispatch) => {
   return {
       getCarList : (criteria)  => dispatch(getCarList(criteria))
    };
 };

 CarList.propTypes = {
 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList);
