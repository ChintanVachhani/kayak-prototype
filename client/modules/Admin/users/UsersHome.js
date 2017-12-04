import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UncontrolledAlert } from 'reactstrap';
import User from './User';
import {getAllUsers} from './../AdminActions';

class UsersHome extends Component {

  componentDidMount() {

    this.props.getAllUsers();
  }


  render() {
    return (

    	<div className="col-sm-9 col-md-10 pt-5">		
        <div className="row">
			<div className="col-9">     
        		<p className="text-left"><strong>Users</strong></p>        		
        	</div>
        	
        </div>
        <br/>
        {this.props.msg !== undefined ? 
        	<div className="row">
				<div className="col-12">
				 <UncontrolledAlert color="info">{this.props.msg}</UncontrolledAlert>
				</div>
			</div>
        	: ''}        

        <div className="row">
		<div className="col-12">
	       {
                    users.map((user,index) => {
                        return(
                            <User
                                key={index}
                                user={user}
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
	let users = state.admin.users;
	let msg = state.admin.msg;
	state.admin.msg = undefined;
  return {users, msg};
  
};

const mapDispatchToProps = (dispatch) => {
  return {
        getAllUsers : () => dispatch(getAllUsers())
    };
};

UsersHome.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersHome);
