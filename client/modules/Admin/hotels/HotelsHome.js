import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateHotel from './CreateHotel';
import SearchHotel from './SearchHotel';
import { Alert } from 'reactstrap';
import HotelItem from './HotelItem';
import HotelList from './../../List/components/Hotel/HotelList';

class HotelsHome extends Component {
  render() {
    return (

    	<div className="col-sm-9 col-md-10 pt-5">			
        <div className="row">
			<div className="col-9">     
        		<p className="text-left"><h4>Hotels</h4></p>        		
        	</div>
        	<div className="col-1">
        		<SearchHotel  buttonLabel="Search Hotels" />
        	</div>        	
        	<div className="col-1">
        		<CreateHotel  buttonLabel="Create Hotel" />
        	</div>
        	<div className="col-1">
        		&nbsp;
        	</div>
        </div>
 		<br/>
        {this.props.msg !== undefined ? 
        	<div className="row">
				<div className="col-12">
				 <Alert color="info">{this.props.msg}</Alert>
				</div>
			</div>
        	: ''}    
        <div className="row">
		<div className="col-12">
			<HotelList hotelList={this.props.hotels} isAdmin="true"/>
        </div>
           </div>

      </div>  
    	
    );
  }
}

const mapStateToProps = (state) => {
	let hotels = state.admin.hotelList;
	let msg = state.admin.msg;
	state.admin.msg = undefined;
  	return {hotels, msg};
  
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

HotelsHome.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelsHome);
