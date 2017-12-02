import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {changeType} from './HeaderActions';

// Import Style
import styles from './Header.css';

class Header extends Component {

	state = {
        signin: {email : '', password:''},
        signup: {email : '', password:''},
        
     };


	popSignupWindow= (event) => {
      console.log("creating folder, create an input field to display");
      
      //this.refs.filepath.value = filepath;
      this.refs.signupPopup.style="display: inline-block";
    }

    popSigninWindow= (event) => {
      console.log("creating folder, create an input field to display");
      
      //this.refs.filepath.value = filepath;
      this.refs.signinPopup.style="display: inline-block";
    }

    signinSubmit = (event) =>
    {
    	console.log("in signinsubmit");
    	this.refs.signinPopup.style="display: none";
    	this.refs.signinForm.reset();
    	this.signInvalidation(this.state.signin);

    }

    signupSubmit = (event) =>
    {
    	console.log("in signupsubmit");
    	this.refs.signupPopup.style="display: none";
    	this.refs.signupForm.reset();
    	this.signUpvalidation(this.state.signup);

    }

    closePopup= (event) => {
      console.log("creating folder, create an input field to display");
      
      //this.refs.filepath.value = filepath;
      this.refs.signupPopup.style="display: none";
      this.refs.signinPopup.style="display: none";
      this.refs.signinForm.reset();
      this.refs.signupForm.reset();
    }
	componentDidMount() {
    console.log(" Refreshing Home page");
  
        
    }

    render() {

      console.log(this.props);
      console.log("testing here");

      

    return (

    		             
            <div className="row m-0 p-0" id={styles['nav-bar']}>
                <div className="col-2" id={styles['logo']}>
                   <a href=""><img src="https://a1.r9cdn.net/rimg/provider-logos/common/socialmedia/kayak-logo.png" id={styles['logo-img']}></img></a>
                </div>
                <div className="col" id={styles['nav-tabs']}>
                    <a onClick={() => {this.props.changeType('hotels');}} >
                        <div className={styles['nav-item']}>Hotels</div>
                    </a>
                    <a onClick={() => {this.props.changeType('flights');}}>
                        <div className={styles['nav-item']}>Flights</div>
                    </a>
                    <a onClick={() => {this.props.changeType('cars');}}>
                        <div className={styles['nav-item']}>Cars</div>
                    </a>
                </div>
                <div className="col-2" id={styles['account-tab']}>
                    <div className="dropdown">
                        <a href="" className="dropdown" id={styles['my-account-dropdown-button']} data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <span><i className="fa fa-user-circle-o fa-lg"
                                     aria-hidden="true"></i>&nbsp;&nbsp;My Account</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" id={styles['my-account-dropdown-menu']}
                             aria-labelledby="my-account-dropdown-button">
                            <button className="dropdown-item py-1" href="#" onClick={this.popSignupWindow}>
                                <div className="btn" id={styles['signup-btn']} >Sign up</div>
                            </button>
                            <a className="dropdown-item py-1" href="#" onClick={this.popSigninWindow}>
                                <div className="btn" id={styles['signin-btn']}>Sign in</div>
                            </a>
                            <a className="dropdown-item py-1" href="#"><i className="fa fa-cog" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Account Preferences</a>
                            <a className="dropdown-item py-1" href="#"><i className="fa fa-briefcase" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Bookings</a>
                            <a className="dropdown-item py-1" href="#">
                                <div className="btn btn-secondary" id={styles['signout-btn']}>Sign out</div>
                            </a>
                        </div>
                    </div>
                </div>

            <div className={styles['popup']} id="signupPopup" style={{'display': 'none'}} ref="signupPopup">
            	<div className="row" >

            	<button type="button" className="close" aria-label="Close" id={styles['xbutton']} onClick={this.closePopup}>X
  						
				</button>
				</div>
            	<div className="col-md-offset-1 col-md-10">
                <form ref="signupForm">
                	
						<div className="form-group" >
                            	<input
                                className="form-control"

                                style={{'font-size': '14px', 'width':'100%'}}
                               	type="email"
                                label="email"
                                placeholder="Email address"
                                onChange={(event) => {
                                          this.setState({
                                                       signup: Object.assign(this.state.signup, {email: event.target.value})
                                                   });
                                 }}                              
                            	                           
                            	required />
                        
                    </div>
                    
						<div className="form-group" >
                            	<input
                                className="form-control"
                                style={{'width':'100%', 'font-size': '14px'}}
                               	type="password"
                                label="password"
                                placeholder="Password"
                                onChange={(event) => {
                                          this.setState({
                                                       signup: Object.assign(this.state.signup, {password: event.target.value})
                                                   });
                                 }}                               
                            	required />
                        </div>
                   
                    	<br />
                    	<div  className="form-group" >
                    		<input type="button" value="Create Account" style={{'width':'100%', 'font-size': '14px'}} onClick={this.signupSubmit}/>
                    	</div>
                    
                </form>
                </div>
            </div>

            <div className={styles['popup']} id="signinPopup" style={{'display': 'none'}} ref="signinPopup">

            	<div className="row" >

            	<button type="button" className="close" aria-label="Close" id={styles['xbutton']} onClick={this.closePopup}>X
  						
				</button>
				</div>
				<div className="col-md-offset-1 col-md-10">
                <form ref="signinForm">
                	
						<div className="form-group" style={{'padding':'1px' }}>
                            	<input
                                className="form-control"
                                style={{'font-size': '14px', 'width':'100%'}}
                               	type="email"
                                label="email"
                                placeholder="Email address"
                                onChange={(event) => {
                                          this.setState({
                                                       signin: Object.assign(this.state.signin, {email: event.target.value})
                                                   });
                                 }}                              
                            	required />
                        </div>
                   
                    
						<div className="form-group" style={{'padding':'1px' }}>
                            	<input
                                className="form-control"
                                style={{'font-size': '14px', 'width':'100%'}}
                               	type="password"
                                label="password"
                                placeholder="Password"
                                 onChange={(event) => {
                                          this.setState({
                                                       signin: Object.assign(this.state.signin, {password: event.target.value})
                                                   });
                                 }}                             
                            	required />
                        </div>
                    
                    
                    	<div className="form-group" >
                    		<input type="button" value="Sign In" style={{'width':'100%', 'font-size': '14px'}} onClick={this.signinSubmit} />
                    	</div>
                    
                </form>
                </div>
        	</div>

            </div>
            
              
       	);
	}
}


function mapDispatchToProps(dispatch) {
  console.log("in header dipatch ot props");
   return {
       changeType : (name) => dispatch(changeType(name))
    };
}

export default connect(null, mapDispatchToProps)(Header);



