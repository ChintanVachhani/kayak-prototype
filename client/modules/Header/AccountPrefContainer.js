import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Header.css';
import Header from './Header';
import AccountDetails from './AccountDetails';


class AccountPrefContainer extends Component {
    state = {
        displaycomp: ''

    }


    render(){
        return(
            <div>
                <div className="row"  style={{'background-color':'#000000'}}>
                    <Header/>
                </div>
                <div>
                    <div className="col-md-2 sidenav hidden-xs sidebar" style={{'align':'center'}}>
                        
                        <br />
                        <ul className = "nav nav-list">
                            <li><a href="#" onClick={() => {this.setState({
                                        displaycomp: 'account'
                                    });}}><b>My Account</b></a></li>
                        </ul>
                        <ul className = "nav nav-list">
                            <li><a href="#" onClick={() => {this.setState({
                                        displaycomp: 'payment'
                                    });}}><b>Payment Details</b></a></li>
                        </ul>
                        
                    </div>
                    <div className=" col-md-8" style={{'width': '650px'}}>
                        {
                        this.state.displaycomp== 'payment'?
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{'width': '100px'}}><b>Credit Card</b></td>
                                        <td style={{'width': '25px'}}>:</td>
                                        <td style={{'width': '200px'}}>{profile.creditCard}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        :
                        <div>
                            <AccountDetails />
                        </div>
                            
                        }
                    </div>
                </div>
            </div>

            );
    }
}
export default AccountPrefContainer;