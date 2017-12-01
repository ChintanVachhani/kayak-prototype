import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteAccount} from './HeaderActions';
import styles from './Header.css';


class AccountDetails extends Component {
	
componentDidMount(){

}

	render(){
		//var profile = this.props.profileDetails;
          //let token = localStorage.getItem('token');
          let token;

		return(
			<div style={{'padding':'40px'}}>
				
				<div>
					<div className="col-md-3 ">
						<img src={this.props.user.picture} id={styles['profile-img']}></img>
                         </div>
                    </div>
                    <div className="col-md-offset-1 col-md-7" style={{'width': '650px'}}>
                    	<table style={{'padding':'10px'}}>
                    		<tbody style={{'border-spacing':'10px'}}>
                    			<tr style={{'padding' : '10px'}}>
                    				<td style={{'width': '100px', 'padding' : '10px'}}><b>FirstName</b></td>
                    				<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    				<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.firstName}</td>
                    			</tr>
                    			<tr>
                    				<td style={{'width': '100px', 'padding' : '10px'}}><b>LastName</b></td>
                    				<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    				<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.LastName}</td>
                    			</tr>
                    			<tr>
                    				<td style={{'width': '100px', 'padding' : '10px'}}><b>Email</b></td>
                    				<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    				<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.Email}</td>
                    			</tr>
                    			<tr>
                    				<td style={{'width': '100px', 'padding' : '10px'}}><b>Address</b></td>
                    				<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    				<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.Address}</td>
                    			</tr>
                    			<tr>
                    				<td style={{'width': '100px', 'padding' : '10px'}}><b>Phone</b></td>
                    				<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    				<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.Phone}</td>
                    			</tr>
                    			<tr>
                    				<td style={{'width': '100px', 'padding' : '10px'}}><b>Hobbies</b></td>
                    				<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    				<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.Hobbies}</td>
                    			</tr>
                    			<tr>
                    				<td align="center" style={{'width': '200px','align': 'center', 'padding' : '10px'}}>
                    					<a href='#' className="btn btn-primary btn-lg" role="button">Edit Profile</a>
                    				</td>
                    			</tr>
                    			<tr>
                    				<td style={{'align': 'center'}}>
                    					<a href='#' className="btn btn-primary btn-lg" role="button" onClick={this.props.deleteAccount(token)}>Delete Account</a>
                    				</td>
                    			</tr>



                    		</tbody>
                    	</table>
                    </div>
			</div>

			);
	}
}

function mapStateToProps(store) {
    const {header} = store;
    console.log("this is header reducer " + JSON.stringify(header));
    let user = header.userdetails
  return {user};
}

function mapDispatchToProps(dispatch) {
    console.log("this is in dispatch");
     return {
       deleteAccount : (token) => dispatch(deleteAccount(token))
     };
}
export default connect( mapStateToProps,  mapDispatchToProps)(AccountDetails);