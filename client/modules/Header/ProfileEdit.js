import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {editAccount} from './HeaderActions';
import styles from './Header.css';
import Header from './Header';

class ProfileEdit extends Component {

     
	
constructor(props)
{
     super(props);
     if(props.user == null)
     {
      this.state = {
        firstName: '',
        lastName : '',
        email: '',
        phone: '',
        address : '',
        hobbies : ''
          };    
     }
     if(props.user != null)
     this.state = {
        firstName: props.user.firstName,
        lastName : props.user.lastName,
        email: props.user.email,
        phone: props.user.email,
        address : props.user.address,
        hobbies : props.user.hobbies
    };

}

componentWillMount(){

}


	render(){
		//var profile = this.props.profileDetails;
          //let token = localStorage.getItem('token');

		return(
			<div>
				<div className="row" style={{'background-color':'#000000'}}>
					<Header/>
				</div>
                    <div>
                    <div className="col-md-2 sidenav hidden-xs sidebar" style={{'background-color':'#f2f2f2', 'height':'800px'}}>
                        
                        <br />
                        <ul className = "nav nav-list">
                            <li><a href="#">My Account</a></li>
                        </ul>   
                    </div>
                    <div className="col-md-offset-1 col-md-8" style={{'width': '650px'}}>
				     <div >
					     <div className="col-md-3 " style={{'padding-top' : '20px'}}>
                                   <img src="//placehold.it/100" className="avatar img-circle" alt="avatar"></img>
						     <h6>Upload a different photo...</h6>
                                   <input type="file" className="form-control"></input>
                              </div>
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
                                                  this.setState({
                                                       firstName: event.target.value
                                                   });
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
                                                  this.setState({
                                                       lastName: event.target.value
                                                   });
                                                  }} 
                                             required />
                                        </div>
                                   </div>
                                   </div>
                                   <div style={{'padding' : '20px'}}>
                                   <div className="row">
                                        <div className="col-md-3">
                                             <h5>Email</h5>
                                        </div>
                                        <div className="col-md-offset-1 col-md-8">
                                             <input
                                                  className="form-control"
                                                  type="email"
                                                  label="email"
                                                  name = "email"
                                                  placeholder="Enter Email"
                                                  value = {this.state.email}
                                                  onChange={(event) => {                                 
                                                  this.setState({
                                                       lastName: event.target.value
                                                   });
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
                                                  this.setState({
                                                       phone: event.target.value
                                                   });
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
                                                  type="textbox"
                                                  label="address"
                                                  name = "address"
                                                  placeholder="Enter Address"
                                                  value = {this.state.address}
                                                  onChange={(event) => {                                 
                                                  this.setState({
                                                       address: event.target.value
                                                   });
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
                                                  type="textbox"
                                                  label="hobbies"
                                                  name = "hobbies"
                                                  placeholder="Enter Your Hobbies"
                                                  value = {this.state.hobbies}
                                                  onChange={(event) => {                                 
                                                  this.setState({
                                                       hobbies: event.target.value
                                                   });
                                                  }} 
                                             required />
                                        </div>
                                   </div>
                                   </div>
                                   <div className="row">
                                        <button type="Button" className="btn btn-primary btn-block" style={{'background-color': '#DC143C'}}
                                                  onClick={() => this.props.handleEditProfile(this.state)}
                                                  >Edit Profile</button>
                                   </div>
                             </form>
                         </div>
                    </div>
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
       handleEditProfile : (userdetails) => dispatch(handleEditProfile(userdetails))
     };
}
export default connect( null,  mapDispatchToProps)(ProfileEdit);