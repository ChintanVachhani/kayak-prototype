import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import StarRatings from 'react-star-ratings';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

import Star from 'react-icons/lib/fa/star-o';
import FillStar from 'react-icons/lib/fa/star';

import {filterHotels} from '../../ListActions';

const Range = Slider.Range;


// Import Style
import styles from './Filter.css';

const style = { width: 200, margin:5};

/*
function log(value) {
  console.log(value); //eslint-disable-line
  this.setState({ [name]: value });

}
*/
class HotelSidebar extends Component {

    constructor(props) {
        super(props);
        
        //this.changeRating = this.changeRating.bind(this);
        this.changeStarFilter = this.changeStarFilter.bind(this);
        this.log = this.log.bind(this);
        this.state = { 
          fromPrice:this.props.fromPrice,
          toPrice:this.props.toPrice,
          stars:6
        };
    }

    /*
    changeRating(rating) {
    	console.log(rating);
        this.setState({
          rating: rating
        })
    }
    */

    changeStarFilter(index){
        this.setState({stars : index});
        this.props.filterHotels(this.state);
    }

    log(value) {
	  console.log(value); //eslint-disable-line
	  this.setState({ fromPrice: value[0], toPrice: value[1] });
	}


  render() {

  	const { fromPrice, toPrice } = this.state;

    console.log(this.state);

  	let a = [1,2,3,4,5];


    return (
    	<div className="page-wrap">
        <div style={style}>
        	<p><strong>Price</strong></p><hr />
      		<input className={styles['leftTextFld']} type="text" id="fromPrice" value= {fromPrice} onBlur = {() => { this.props.filterHotels(this.state); }}/>
      		<input className={styles['rightTextFld']} type="text" id="toPrice" value= {toPrice} onBlur = {() => { this.props.filterHotels(this.state); }}/>
			    <Range min={this.props.fromPrice} max={this.props.toPrice} allowCross={false} defaultValue={[fromPrice, toPrice]} value={[fromPrice, toPrice]} onChange={this.log} onAfterChange = {() => { this.props.filterHotels(this.state); }}/>
        </div>
            
        <div>
        <p><strong>Stars</strong></p><hr />
        {
        a.map((index, value) =>{
                  return(index < this.state.stars? <Star onClick={() => { this.changeStarFilter(index); }} size={30}/> : <FillStar onClick={() => { this.changeStarFilter(index); }} color="#0000ff" size={30}/> );
            })
        }

        </div>

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {fromPrice:50, toPrice:1000};
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterHotels : (filters) => dispatch(filterHotels(filters))
  };
};

HotelSidebar.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelSidebar);
