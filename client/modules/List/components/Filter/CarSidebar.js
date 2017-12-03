import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StarRatings from 'react-star-ratings';

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
class CarSidebar extends Component {

    constructor(props) {
        super(props);
        
        //this.changeRating = this.changeRating.bind(this);
        //this.changeStarFilter = this.changeStarFilter.bind(this);
        this.log = this.log.bind(this);
        //let step = (this.props.maxPrice - this.props.minPrice)/100;
        this.state = { 
          carfromprice:this.props.minPrice,
          cartoprice:this.props.maxPrice,
          carTypes : ['compact', 'economy', 'intermediate']
        };
    }

    /*changeRating(rating) {
      console.log(rating);
        this.setState({
          rating: rating
        })
    }

    changeStarFilter(index){
        this.setState({stars : index});
    }*/

    log(value) {
      console.log(value); //eslint-disable-line
      this.setState({ carfromprice: value[0], cartoprice: value[1] });
    }

    changeLeft = (e) => {
        console.log("left value changed: " + e.target.value);
        this.setState({carfromprice: e.target.value});
    }

    changeRight = (e) => {
        console.log("Right value changed: " + e.target.value);
        this.setState({cartoprice: e.target.value});
    }


    toggleCheckbox = (e) => {
      console.log(e.target.name);
      var arr = this.state.carTypes;
      console.log(arr);
      if(e.target.checked){
        console.log("checked");
        arr.push(e.target.name);
      }
      else{
        console.log("unchecked");
        var arr = this.state.carTypes.filter(function(item) { 
            return item !== e.target.name
        });
      }
      this.setState({carTypes : arr});
    }


  render() {

    const { carfromprice, cartoprice } = this.state;
    console.log(this.state);


    return (
      <div className="page-wrap">
        <br/><br/>

        <div style={style}>
          <p><strong>Price</strong></p><hr />

          <input className={styles['leftTextFld']} type="text" id="fromPrice" value= {carfromprice} onChange={this.changeLeft}/>
          <input className={styles['rightTextFld']} type="text" id="toPrice" value= {cartoprice} onChange={this.changeRight}/>
          
          <Range min={this.props.minPrice} max={this.props.maxPrice} allowCross={false} defaultValue={[carfromprice, cartoprice]} onChange={this.log} />

        </div>

        <br />


       <div style={style}>
          <p><strong>Car Type</strong></p><hr />

          <span>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="compact"
                    defaultChecked
                    onChange={this.toggleCheckbox}
                    disabled={this.state.disabled}
                  />
                  &nbsp; Compact
                </label>
                &nbsp;&nbsp;
              </p>

              <p>
                <label>
                  <input
                    type="checkbox"
                    name="economy"
                    defaultChecked
                    onChange={this.toggleCheckbox}
                    disabled={this.state.disabled}
                  />
                  &nbsp; Economy
                </label>
                &nbsp;&nbsp;
              </p>

              <p>
                <label>
                  <input
                    type="checkbox"
                    name="intermediate"
                    defaultChecked
                    onChange={this.toggleCheckbox}
                    disabled={this.state.disabled}
                  />
                  &nbsp; Intermediate
                </label>
                &nbsp;&nbsp;
              </p>

          </span>

        </div>


        <br/><br/>

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    minPrice : 20,
    maxPrice : 120
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleStar : (fileId) => dispatch(fileActions.toggleStar(fileId)),
    deleteFile : (fileId) => dispatch(fileActions.deleteFile(fileId)),
  };
};

CarSidebar.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarSidebar);
