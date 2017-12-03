import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Header.css';
import Header from './Header';
import AccountDetails from './AccountDetails';
import Footer from '../Footer/Footer';
import {handleCard} from './HeaderActions';


class AccountPage extends Component {
    state = {
        displaycomp: '',
        creditCard : ''
    }

    showCreditForm= (event) => {
      console.log("in showing credit form");
      this.refs.creditForm.style="display: inline-block";
    }
    closeCreditForm= (event) => {
      console.log("in closing credit form");
      this.refs.creditForm.style="display: none";
      this.props.handleCard(this.state.creditCard);
    }


    render(){
        return(
            <div className="container-fluid p-0 m-0">
              <div>
                <div className="row"  style={{'background-color':'#000000'}}>
                    <Header/>
                </div>
                <div>
                    <div className="col-md-2 sidenav hidden-xs sidebar" style={{'text-align':'center', 'height':'400px', 'background-color':'#999999'}}>
                        <br />
                        <ul className = "nav nav-list">
                            <li><a onClick={() => {this.setState({
                                        displaycomp: 'account'
                                    });}}><b>My Account</b></a></li>
                        </ul>
                        <ul className = "nav nav-list">
                            <li><a onClick={() => {this.setState({
                                        displaycomp: 'payment'
                                    });}}><b>Payment Details</b></a></li>
                        </ul>
                        
                    </div>
                    <div className=" col-md-8" style={{'width': '650px'}}>
                        {
                            this.state.displaycomp== 'payment'?
                              <div style={{'padding' : '20px'}}>
                                <div style={{'padding' : '20px'}}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td style={{'width': '100px', 'padding' : '10px'}}><b>Credit Card</b></td>
                                                <td style={{'width': '25px', 'padding' : '10px'}}>:</td>
                                                <td style={{'width': '200px', 'padding' : '10px'}}>{this.props.creditCard}</td>
                                            </tr>
                                            <tr>
                                                <td style={{'width': '200px', 'padding' : '10px'}}>
                                                    <a className="btn btn-primary btn-lg" role="button" onClick={(event) => {this.showCreditForm()}}>Edit</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="creditForm" style={{'display': 'none', 'padding' : '20px'}} ref="creditForm">
                                    <div className = "col-md-offset-1 col-md-11">
                                    <form>
                                          <div className="row">
                                              <h5><b> Edit Credit Card Details</b></h5>
                                          </div>
                                          <div className="row">
                                              
                                                <div className="form-group" style={{'width': '450px', 'padding' : '10px'}}>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            label="creditCardNumber"
                                                            placeholder="Credit Card Number"
                                                            onChange={(event) => {
                                                            this.setState({creditCard: event.target.value}); }}

                                                        required />
                                                </div>
                                             
                                          </div>
                                          <div className="row">
                                              <button type="Button" className="btn btn-primary btn-block" style={{'background-color': '#DC143C'}}
                                              onClick={() => this.closeCreditForm()}
                                              >Submit</button>
                                          </div>
                                    </form>
                                    </div>
                                </div>
                              </div>
                            :
                            <div>
                                <AccountDetails />
                            </div>
                        }
                    </div>
                </div>
              </div>
             

            </div>
        );
    }
}
function mapStateToProps(store) {
    console.log("this is home mapstateto prop reducer " );
    const {header} = store;
    let creditCard = header.userdetails.creditCard;
  return {creditCard};
}
function mapDispatchToProps(dispatch) {
  
   return {
      handleCard : (cardNumber) => dispatch(handleCard(cardNumber))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);