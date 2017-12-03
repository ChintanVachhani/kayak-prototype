import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteAccount, handleEditProfile} from './HeaderActions';
import styles from './Header.css';


class AccountDetails extends Component {

   state= {
        edit : '',
        firstName: '',
        lastName: '',
        email : '',
        phone: '',
        address: '',
        picture: '',
        hobbies: ''
    }

    handleEditFlip()
    {
        this.setState({edit:'false'});
        this.props.handleEditProfile(this.state);
    }
    componentDidMount(){
       this.setState({

                firstName : this.props.user.firstName,
                lastName : this.props.user.lastName,
                email: this.props.user.email,
                phone : this.props.user.phone,
                picture : this.props.user.picture,
                hobbies : this.props.user.hobbies,
                address : this.props.user.address
            });     
    }

	
	render(){
		
	return(
		<div style={{'padding':'20px'}}>
        { this.state.edit == 'true'?
            <div>
                <div className="col-md-3 " style={{'padding-top' : '20px'}}>
                    <img src="//placehold.it/100" className="avatar img-circle" alt="avatar"></img>
                    <h6>Upload a different photo...</h6>
                    <input type="file" className="form-control"></input>
                </div>
                <div className="col-md-9" style={{'width': '650px', 'padding':'20px'}}>
                    <form>
                        <div style={{'padding' : '20px'}}>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>First Name</h5>
                                </div>
                                <div className="col-md-offset-1 col-md-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        label="firstName"
                                        name = "firstname"
                                        placeholder="Enter FirstName"
                                        value = {this.state.firstName}
                                        onChange={(event) => {             
                                                    this.setState({firstName: event.target.value});
                                                }} 
                                    required />
                                </div>
                            </div>
                        </div>
                        <div style={{'padding' : '20px'}}>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>Last Name</h5>
                                </div>
                                <div className="col-md-offset-1 col-md-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        label="lastName"
                                        name = "lastName"
                                        placeholder="Enter LastName"
                                        value = {this.state.lastName}
                                        onChange={(event) => {                           
                                                  this.setState({lastName: event.target.value});
                                                  }} 
                                    required />
                                </div>
                            </div>
                        </div>
                        <div style={{'padding' : '20px'}}>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>Phone</h5>
                                </div>
                                <div className="col-md-offset-1 col-md-8">
                                    <input
                                        className="form-control"
                                        type="number"
                                        label="phone"
                                        name = "phone"
                                        placeholder="Enter Phone Number"
                                        value = {this.state.phone}
                                                onChange={(event) => {                                 
                                                this.setState({phone: event.target.value});
                                                }} 
                                    required />
                                </div>
                            </div>
                        </div>
                        <div style={{'padding' : '20px'}}>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>Address</h5>
                                </div>
                                <div className="col-md-offset-1 col-md-8">
                                    <input
                                        className="form-control"
                                        type="textarea"
                                        label="address"
                                        name = "address"
                                        placeholder="Enter Address"
                                        value = {this.state.address}
                                                onChange={(event) => {                                 
                                                  this.setState({address: event.target.value});
                                                }} 
                                    required />
                                </div>
                            </div>
                        </div>
                        <div style={{'padding' : '20px'}}>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>Hobbies</h5>
                                </div>
                                <div className="col-md-offset-1 col-md-8">
                                    <input
                                        className="form-control"
                                        type="textarea"
                                        label="hobbies"
                                        name = "hobbies"
                                        placeholder="Enter Your Hobbies"
                                        value = {this.state.hobbies}
                                        onChange={(event) => {                                 
                                                  this.setState({hobbies: event.target.value});
                                                }} 
                                    required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <button type="Button" className="btn btn-primary btn-block" style={{'background-color': '#DC143C'}}
                                    onClick={(event) => this.handleEditFlip()}
                            >Edit Profile</button>
                            </div>
                    </form>
                </div>
            </div>
        :
            <div>
			<div className="col-md-3 ">
				<img src={this.props.user.picture} id={styles['profile-img']}></img>
            </div>
            <div className="col-md-offset-1 col-md-7" style={{'width': '650px'}}>
                <table style={{'padding':'10px'}}>
                    <tbody style={{'border-spacing':'10px'}}>
                    	<tr>
                    		<td style={{'width': '100px', 'padding' : '10px'}}><b>FirstName</b></td>
                    		<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    		<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.firstName}</td>
                    	</tr>
                    	<tr>
                    		<td style={{'width': '100px', 'padding' : '10px'}}><b>LastName</b></td>
                    		<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    		<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.lastName}</td>
                    	</tr>
                    	<tr>
                    		<td style={{'width': '100px', 'padding' : '10px'}}><b>Email</b></td>
                    		<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    		<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.email}</td>
                    	</tr>
                    	<tr>
                    		<td style={{'width': '100px', 'padding' : '10px'}}><b>Address</b></td>
                    		<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    		<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.address}</td>
                    	</tr>
                    	<tr>
                    		<td style={{'width': '100px', 'padding' : '10px'}}><b>Phone</b></td>
                    		<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    		<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.phone}</td>
                    	</tr>
                    	<tr>
                    		<td style={{'width': '100px', 'padding' : '10px'}}><b>Hobbies</b></td>
                    		<td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                    		<td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.hobbies}</td>
                    	</tr>
                    	<tr>
                    		<td align="center" style={{'width': '150px','align': 'center', 'padding' : '10px'}}>
                    			<a className="btn btn-primary btn-lg" role="button" style={{'background-color': '#DC143C'}} 
                                onClick={() => {this.setState({ edit: 'true'});}}>Edit Profile</a>
                    		</td>
                    		<td style={{'float': 'right', 'padding' : '10px', 'width': '150px'}}>
                    			<a className="btn btn-primary btn-lg" role="button" style={{'background-color': '#DC143C'}} onClick={this.props.deleteAccount(this.state.email)}>Delete Account</a>
                    		</td>
                    	</tr>
                    </tbody>
                </table>
            </div>
            </div>
         }   
	    </div>
           
    );
	}
}

function mapStateToProps(store) {
    const {header} = store;
    console.log("this is home mapstateto prop reducer " );
    let user = header.userdetails;
  return {user};
}
function mapDispatchToProps(dispatch) {
  
   return {
     deleteAccount : (email) => dispatch(deleteAccount(email)),
     handleEditProfile: (userDetails) => dispatch(handleEditProfile(userDetails))
    };
}
export default connect( mapStateToProps,  mapDispatchToProps)(AccountDetails);