import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'reactstrap';
import {getAllBills} from './../AdminActions';
import SearchBills from './SearchBills';
import BillList from './BillList';
import Bill from './Bill';

class BillingHome extends Component {

  componentDidMount() {

    this.props.getAllBills();
  }

  render() {
    return (

    	<div className="col-sm-9 col-md-10 pt-5">			
        <div className="row">
			<div className="col-9">     
        		<p className="text-left"><h4>Bills</h4></p>        		
        	</div>
        	<div className="col-2">
        		<SearchBills  buttonLabel="Search Bills" />
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
			                    {
                    this.props.bills.map((bill,index) => {
                        return(
                            <Bill
                                bill={bill} isAdmin="true"
                            />
                        );
                    })
                    }
        </div>
           </div>

      </div>  
    	
    );
  }
}

const mapStateToProps = (state) => {
	let bills = state.admin.billList;
  console.log("ss : ", bills)
	let msg = state.admin.msg;
	state.admin.msg = undefined;
  	return {bills, msg};
  
};

const mapDispatchToProps = (dispatch) => {
  return {
        getAllBills : () => dispatch(getAllBills())
    };
};

BillingHome.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingHome);
