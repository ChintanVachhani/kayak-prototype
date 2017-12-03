import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import StarRatings from 'react-star-ratings';

//import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

import Star from 'react-icons/lib/fa/star-o';
import FillStar from 'react-icons/lib/fa/star';

import {filterFlights} from '../../ListActions';

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
class FlightSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          initFromPrice : this.props.initFromPrice,
          initToPrice:this.props.initToPrice,
          fromPrice:this.props.initFromPrice,
          toPrice:this.props.toPrice,
          fromArrivalTime: 0,
          toArrivalTime:24,
          fromDepTime:0,
          toDepTime:24
        };
    }

    changePrice = (value) => {
	   console.log(value);
	   this.setState({ fromPrice: value[0], toPrice: value[1] });
     //this.props.filterFlights(this.state);
	  }

    changeTakeOff = (value) => {
     console.log(value); //eslint-disable-line
     this.setState({ fromArrivalTime: value[0], toArrivalTime: value[1] });
     //this.props.filterFlights(this.state);
    }

    changeLanding = (value) => {
     console.log(value); //eslint-disable-line
     this.setState({ fromDepTime: value[0], toDepTime: value[1] });
     //this.props.filterFlights(this.state);
    }

    changeLeft = (e) => {
        console.log("left value changed: " + e.target.value + e.target.id);
        if(e.target.id == "fromDepTime")
          this.setState({fromDepTime : e.target.value});
        else if(e.target.id == "fromArrivalTime")
          this.setState({fromArrivalTime : e.target.value});
        else if(e.target.id == "fromPrice")
          this.setState({fromPrice : e.target.value});
        
        //this.props.filterFlights(this.state);
    }

    changeRight = (e) => {
        console.log("Right value changed: " + e.target.value);
        if(e.target.id == "toDepTime")
          this.setState({toDepTime : e.target.value});
        else if(e.target.id == "toArrivalTime")
          this.setState({toArrivalTime : e.target.value});
        else if(e.target.id == "toPrice")
          this.setState({toPrice : e.target.value});

        //this.props.filterFlights(this.state);
    }




  render() {

  	const { fromPrice, toPrice, fromArrivalTime, toArrivalTime, fromDepTime, toDepTime } = this.state;


    return (
    	<div className="page-wrap">
        

        <div style={style}>
        	<p><strong>Price</strong></p><hr />

      		<input className={styles['leftTextFld']} type="text" id="fromPrice" value= {fromPrice} onChange={this.changeLeft} onBlur={() => { this.props.filterFlights(this.state); }}/>
      		<input className={styles['rightTextFld']} type="text" id="toPrice" value= {toPrice} onChange={this.changeRight} onBlur={() => { this.props.filterFlights(this.state); }}/>

		      <Range min={this.state.initFromPrice} max={this.state.initToPrice} allowCross={false} defaultValue={[fromPrice, toPrice]} value= {[fromPrice, toPrice]} onChange={this.changePrice} onAfterChange={() => { this.props.filterFlights(this.state); }}/>
        </div>

        <br/><br/>

        <div style={style}>
          <p><strong>Take-off</strong></p><hr />

          <input className={styles['leftTextFld']} type="text" id="fromDepTime" value= {fromDepTime} onChange={this.changeLeft} onBlur={() => { this.props.filterFlights(this.state); }}/>
          <input className={styles['rightTextFld']} type="text" id="toDepTime" value= {toDepTime} onChange={this.changeRight} onBlur={() => { this.props.filterFlights(this.state); }}/>

          <Range min={0} max={24} allowCross={false} defaultValue={[fromDepTime, toDepTime]} onChange={this.changeLanding} value={[fromDepTime, toDepTime]} onAfterChange = {() => { this.props.filterFlights(this.state); }}/>

        </div>
        
        <br/><br/>

        <div style={style}>
        	<p><strong>Landing</strong></p><hr />
  
      		<input className={styles['leftTextFld']} type="text" id="fromArrivalTime" value= {fromArrivalTime} onChange={this.changeLeft} onBlur={() => { this.props.filterFlights(this.state); }} />
      		<input className={styles['rightTextFld']} type="text" id="toArrivalTime" value= {toArrivalTime} onChange={this.changeRight} onBlur={() => { this.props.filterFlights(this.state); }} />
  
			    <Range min={0} max={24} allowCross={false} defaultValue={[fromArrivalTime, toArrivalTime]} value={[fromArrivalTime, toArrivalTime]} onChange={this.changeTakeOff} onAfterChange = {() => { this.props.filterFlights(this.state); }} />

        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {initFromPrice : 100, initToPrice: 1500, fromPrice:100, toPrice:1500};
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterFlights : (filters) => dispatch(filterFlights(filters))
  };
};

FlightSidebar.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightSidebar);
