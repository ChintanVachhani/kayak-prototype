import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import StarRatings from 'react-star-ratings';

//import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

import Star from 'react-icons/lib/fa/star-o';
import FillStar from 'react-icons/lib/fa/star';

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
          initFromPrice : 12,
          initToPrice:200,
          fromPrice:12,
          toPrice:200,
          fromArrivalTime: 1,
          toArrivalTime:23,
          fromDepTime:1,
          toDepTime:23
        };
    }

    changePrice = (value) => {
	   console.log(value); //eslint-disable-line
	   this.setState({ fromPrice: value[0], toPrice: value[1] });
	  }

    changeTakeOff = (value) => {
     console.log(value); //eslint-disable-line
     this.setState({ fromArrivalTime: value[0], toArrivalTime: value[1] });
    }

    changeLanding = (value) => {
     console.log(value); //eslint-disable-line
     this.setState({ fromDepTime: value[0], toDepTime: value[1] });
    }

    changeLeft = (e) => {
        console.log("left value changed: " + e.target.value + e.target.id);
        if(e.target.id == "fromDepTime")
          this.setState({fromDepTime : e.target.value});
        else if(e.target.id == "fromArrivalTime")
          this.setState({fromArrivalTime : e.target.value});
        else if(e.target.id == "fromPrice")
          this.setState({fromPrice : e.target.value});
    }

    changeRight = (e) => {
        console.log("Right value changed: " + e.target.value);
        if(e.target.id == "toDepTime")
          this.setState({toDepTime : e.target.value});
        else if(e.target.id == "toArrivalTime")
          this.setState({toArrivalTime : e.target.value});
        else if(e.target.id == "toPrice")
          this.setState({toPrice : e.target.value});
    }




  render() {

  	const { fromPrice, toPrice, fromArrivalTime, toArrivalTime, fromDepTime, toDepTime } = this.state;


    return (
    	<div className="page-wrap">
        

        <div style={style}>
        	<p><strong>Price</strong></p><hr />

      		<input className={styles['leftTextFld']} type="text" id="fromPrice" value= {fromPrice} onChange={this.changeLeft}/>
      		<input className={styles['rightTextFld']} type="text" id="toPrice" value= {toPrice} onChange={this.changeRight}/>

		      <Range min={this.state.initFromPrice} max={this.state.initToPrice} allowCross={false} defaultValue={[fromPrice, toPrice]} value= {[fromPrice, toPrice]} onChange={this.changePrice} />

        </div>
        
        <br/><br/>

        <div style={style}>
        	<p><strong>Take-off</strong></p><hr />
  
      		<input className={styles['leftTextFld']} type="text" id="fromArrivalTime" value= {fromArrivalTime} onChange={this.changeLeft}/>
      		<input className={styles['rightTextFld']} type="text" id="toArrivalTime" value= {toArrivalTime} onChange={this.changeRight}/>
  
			    <Range min={0} max={24} allowCross={false} defaultValue={[fromArrivalTime, toArrivalTime]} value={[fromArrivalTime, toArrivalTime]} onChange={this.changeTakeOff} />

        </div>

        <br/><br/>

        <div style={style}>
        	<p><strong>Landing</strong></p><hr />

      		<input className={styles['leftTextFld']} type="text" id="fromDepTime" value= {fromDepTime} onChange={this.changeLeft} />
      		<input className={styles['rightTextFld']} type="text" id="toDepTime" value= {toDepTime} onChange={this.changeRight}/>

			    <Range min={0} max={24} allowCross={false} defaultValue={[fromDepTime, toDepTime]} onChange={this.changeLanding} value={[fromDepTime, toDepTime]} />

        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

FlightSidebar.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightSidebar);
