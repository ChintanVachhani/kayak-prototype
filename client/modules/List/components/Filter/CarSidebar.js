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
        
        this.changeRating = this.changeRating.bind(this);
        this.changeStarFilter = this.changeStarFilter.bind(this);
        this.log = this.log.bind(this);
        this.state = { 
          rating: 0,
          fromprice:0,
          toprice:100,
          stars:3
        };
    }

    changeRating(rating) {
    	console.log(rating);
        this.setState({
          rating: rating
        })
    }

    changeStarFilter(index){
        this.setState({stars : index});
    }

    log(value) {
	  console.log(value); //eslint-disable-line
	  this.setState({ fromprice: value[0], toprice: value[1] });
	}


  render() {

  	const { fromprice, toprice } = this.state;

  	let a = [1,2,3,4,5];


    return (
    	<div className="page-wrap">
        <div>
          <StarRatings
            rating={this.state.rating}
            isSelectable={true}
            starRatedColor={'blue'}
            isAggregateRating={false}
            changeRating={this.changeRating}
            numOfStars={5}
            starWidthAndHeight={'24px'}
            starSpacing={'2px'}
          />
        </div>
        <div>
          <StarRatings
            rating={3.33}
            isSelectable={false}
            isAggregateRating={true}
            starWidthAndHeight={'24px'}
            starSpacing={'2px'}
          />
        </div>

        <div style={style}>
        	<p><strong>Price</strong></p><hr />

        	<span>
        		<div class="row">
	        		<input className={styles['leftTextFld']} type="text" id="fromPrice" value= {fromprice}/>
	        		<input className={styles['rightTextFld']} type="text" id="toPrice" value= {toprice}/>
        		</div>
        	</span>

			<Range allowCross={false} defaultValue={[fromprice, toprice]} onChange={this.log} />

        </div>
        
        <br/><br/>

        <div style={style}>
        	<p><strong>Take-off</strong></p><hr />

        	<span>
        		<div class="row">
	        		<input className={styles['leftTextFld']} type="text" id="fromArrivalTime" value= {fromprice}/>
	        		<input className={styles['rightTextFld']} type="text" id="toArrivalTime" value= {toprice}/>
        		</div>
        	</span>

			<Range allowCross={false} defaultValue={[fromprice, toprice]} onChange={this.log} />

        </div>

        <br/><br/>

        <div style={style}>
        	<p><strong>Landing</strong></p><hr />

        	<span>
        		<div class="row">
	        		<input className={styles['leftTextFld']} type="text" id="fromDepTime" value= {fromprice}/>
	        		<input className={styles['rightTextFld']} type="text" id="toDepTime" value= {toprice}/>
        		</div>
        	</span>

			<Range allowCross={false} defaultValue={[fromprice, toprice]} onChange={this.log} />

        </div>

        <div>

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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

CarSidebar.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarSidebar);
