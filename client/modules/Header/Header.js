import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {signInvalidation, signUpvalidation, changeType, accountPage, signOut, redirectToHome } from './HeaderActions';
//import {Link } from 'react-router';

// Import Style
import styles from './Header.css';

class Header extends Component {

    popSignupWindow= (event) => {
      this.refs.signupPopup.style="display: inline-block";
    }

    popSigninWindow= (event) => {
      this.refs.signinPopup.style="display: inline-block";
    }
   /* accountPage1 = (event) => {
      this.props.accountPage();
    }*/
    signinSubmit = (event) => {
      console.log("in signinsubmit");
      let email = this.refs.lemail.value;
      let password = this.refs.lpassword.value;
      console.log("printing in header.js in signiinsubmit "+ email, password);
      this.refs.signinPopup.style="display: none";
      this.refs.signinForm.reset();
      this.props.signInvalidation({
                                    "email" : email, 
                                    "password" : password
                                  });
    }

    signupSubmit = (event) => {
      console.log("in signupsubmit");
      console.log(this.refs.semail.value);

      let email = this.refs.semail.value;
      let password = this.refs.spassword.value;
      let firstName = this.refs.sfirstName.value;
      let lastName = this.refs.slastName.value;
      this.refs.signupPopup.style="display: none";
      this.refs.signupForm.reset();
      this.props.signUpvalidation({
                                    "email" : email, 
                                    "password" : password,
                                    "firstName" : firstName,
                                    "lastName" : lastName
                                  });
    }

    closePopup= (event) => {
          
      this.refs.signupPopup.style="display: none";
      this.refs.signinPopup.style="display: none";
      this.refs.signinForm.reset();
      this.refs.signupForm.reset();
    }
    
    render() {
        return (
                <div className="row m-0 p-0" id={styles['nav-bar']}>
                    <div className="col-2" id={styles['logo']}>
                       <a onClick={() => {this.props.redirectToHome()}}><img src="https://a1.r9cdn.net/rimg/provider-logos/common/socialmedia/kayak-logo.png" id={styles['logo-img']}></img></a>
                    </div>
                    <div className="col" id={styles['nav-tabs']}>
                        <a onClick={() => {this.props.changeType('hotels')}} >
                            <div className={styles['nav-item']}>Hotels</div>
                        </a>
                        <a onClick={() => {this.props.changeType('flights')}}>
                            <div className={styles['nav-item']}>Flights</div>
                        </a>
                        <a onClick={() => {this.props.changeType('cars')}}>
                            <div className={styles['nav-item']}>Cars</div>
                        </a>
                    </div>
                    <div className="col-2" id={styles['account-tab']}>
                        <div className="dropdown">
                            <a  className="dropdown" id={styles['my-account-dropdown-button']} data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                                <span><i className="fa fa-user-circle-o fa-lg"
                                         aria-hidden="true"></i>&nbsp;&nbsp;My Account</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" id={styles['my-account-dropdown-menu']}
                                 aria-labelledby="my-account-dropdown-button">
                                <button className="dropdown-item py-1"  onClick={this.popSignupWindow}>
                                    <div className="btn" id={styles['signup-btn']} >Sign up</div>
                                </button>
                                <a className="dropdown-item py-1"  onClick={this.popSigninWindow}>
                                    <div className="btn" id={styles['signin-btn']}>Sign in</div>
                                </a>
                                <span>
                                  {
                                    this.props.isAuthenticated?
                                  (<span><button className="dropdown-item py-1"  onClick={this.props.accountPage}><i className="fa fa-cog" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Account Preferences</button>
                                  <a className="dropdown-item py-1" ><i className="fa fa-briefcase" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Bookings</a>
                                  <a className="dropdown-item py-1" >
                                      <div className="btn btn-secondary" onClick={this.props.signOut} id={styles['signout-btn']}>Sign out</div>
                                  </a></span>):''
                                  }
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['popup']} id="signupPopup" style={{'display': 'none'}} ref="signupPopup">
                      <div className="row" >
                        <button type="button" className="close" aria-label="Close" id={styles['xbutton']} onClick={this.closePopup}>X</button>
                      </div>
                      <div className="col-md-offset-1 col-md-10">
                        <form ref="signupForm">
                          <div className="form-group" >
                              <input
                                className="form-control"
                                style={{'width':'100%', 'font-size': '14px'}}
                                type="text"
                                label="firstName"
                                ref="sfirstName"
                                placeholder="First Name"                              
                              required />
                          </div>
                          <div className="form-group" >
                              <input
                                className="form-control"
                                style={{'width':'100%', 'font-size': '14px'}}
                                type="text"
                                label="lastName"
                                ref="slastName"
                                placeholder="Last Name"                              
                              required />
                          </div>
                          <div className="form-group" >
                            <input
                              className="form-control"
                              style={{'font-size': '14px', 'width':'100%'}}
                              type="email"
                              label="email"
                              ref="semail"
                              placeholder="Email address"                   
                            required />  
                          </div>
                          <div className="form-group" >
                              <input
                                className="form-control"
                                style={{'width':'100%', 'font-size': '14px'}}
                                type="password"
                                label="password"
                                ref="spassword"
                                placeholder="Password"                              
                              required />
                          </div>
                          <br />
                          <div  className="form-group" >
                            <input type="button" className="btn btn-primary btn-block"  value="Create Account" style={{'width':'100%', 'font-size': '14px'}} onClick={this.signupSubmit}/>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className={styles['popup']} id="signinPopup" style={{'display': 'none'}} ref="signinPopup">
                      <div className="row" >
                        <button type="button" className="close" aria-label="Close" id={styles['xbutton']} onClick={this.closePopup}>X</button>
                      </div>
                      <div className="col-md-offset-1 col-md-10">
                          <form ref="signinForm">  
                            <div className="form-group" style={{'padding':'1px' }}>
                                <input
                                  className="form-control"
                                  style={{'font-size': '14px', 'width':'100%'}}
                                  type="email"
                                  label="email"
                                  ref="lemail"
                                  placeholder="Email address"                              
                                required />
                            </div>   
                            <div className="form-group" style={{'padding':'1px' }}>
                                <input
                                  className="form-control"
                                  style={{'font-size': '14px', 'width':'100%'}}
                                  type="password"
                                  label="password"
                                  ref="lpassword"
                                  placeholder="Password"                            
                                required />
                            </div>                    
                            <div className="form-group" >
                              <input type="button" className="btn btn-primary btn-block" value="Sign In" style={{'width':'100%', 'font-size': '14px'}} onClick={this.signinSubmit} />
                            </div>
                          </form>
                      </div>
                    </div>
                </div> 
            );
    }
}
function mapStateToProps(store) {
    const {header} = store;
    let isAuthenticated = header.isAuthenticated;
  return {isAuthenticated};
}
function mapDispatchToProps(dispatch) {
  console.log("this is in dispatch of header");
   return {
       signInvalidation : (signInData) => dispatch(signInvalidation(signInData)),
       signUpvalidation : (signUpData) => dispatch(signUpvalidation(signUpData)),
       changeType : (formType) => dispatch(changeType(formType)),
       accountPage : () => dispatch(accountPage()),
       signOut : () => dispatch(signOut()),
       redirectToHome : () => dispatch(redirectToHome())
    };
}

export default connect(null, mapDispatchToProps)(Header);