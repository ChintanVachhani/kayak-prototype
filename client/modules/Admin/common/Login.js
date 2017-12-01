import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {adminsignin} from './../AdminActions';
import { Alert } from 'reactstrap';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "email":"",
      "password":""
    };
  }

	render() {

		return( 
                
      <div className="container">
        <div className="row pt-5">
          <div className="col-4"> &nbsp;</div>
          <div className="col-4">
          {this.props.msg ? <Alert color="danger">{this.props.msg}</Alert> : ''}
          
             <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }} />
              </div>

              <button type="button" className="btn btn-primary" onClick={() => {this.props.signin(this.state)}}>Sign in</button>
            </form>
          </div>
         <div className="col-4"> &nbsp;</div>
        </div>
    </div>

        
			)
	}

}


const mapStateToProps = (state) => {
  let msg = state.admin.msg;
  return {msg};
};

const mapDispatchToProps = (dispatch) => {
  return { signin : (data) => dispatch(adminsignin(data)) };
};

Login.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
