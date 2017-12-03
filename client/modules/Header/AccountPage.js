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
        cardNumber : '',
        secureCode : '',
        cardName : '',
        exp_year: '',
        email: ''
    }

    componentDidMount(){
       this.setState({

                cardNumber : this.props.card.cardNumber,
                secureCode : this.props.card.secureCode,
                cardName: this.props.card.cardName,
                exp_year: this.props.card.exp_year,
                email : this.props.email
            });     
    }

    showCreditForm= (event) => {
      console.log("in showing credit form");
      this.refs.creditForm.style="display: inline-block";
    }
    closeCreditForm= (event) => {
      console.log("in closing credit form");
      this.refs.creditForm.style="display: none";
      this.props.handleEditCard(this.state);
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
                                              <div className="col-md-8">
                                                <div className="form-group" style={{'width': '450px', 'padding' : '10px'}}>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            label="creditCardNumber"
                                                            placeholder="Credit Card Number"
                                                            onChange={(event) => {
                                                            this.setState({cardNumber: event.target.value}); }}

                                                        required />
                                                </div>
                                             </div>
                                             
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6"> 
                                                <div className="form-group" style={{ 'padding' : '10px'}}>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            label="nameOnCard"
                                                            placeholder="Name On Card"
                                                            onChange={(event) => {
                                                            this.setState({cardName: event.target.value}); }}

                                                        required />
                                                </div>
                                              </div>
                                              <div className="col-md-3" >
                                                <div className="form-group" style={{'padding' : '10px'}}>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            label="securityCode"
                                                            placeholder="Secure Code"
                                                            onChange={(event) => {
                                                            this.setState({secureCode: event.target.value}); }}

                                                        required />
                                                </div>
                                              </div>
                                          </div>
                                          <div className= "row">
                                            <div className="col-md-4">
                                            <div className="form-group">
                                              
                                              <select id="cardIssuedYear" className="form-control" onChange={(event) => {
                                                this.setState({ exp_year: event.target.value  });
                                                }}>
                                                  <option value="" title="Year">Year</option>
                                                  <option value="2017" title="1" >2017</option>
                                                  <option value="2016" title="2" >2016</option>
                                                  <option value="2015" title="3" >2015</option>
                                                  <option value="2014" title="4" >2014</option>
                                                  <option value="2013" title="5" >2013</option>
                                                  <option value="2012" title="6" >2012</option>
                                                  <option value="2011" title="7" >2011</option>
                                                  <option value="2010" title="8" >2010</option>
                                                  <option value="2009" title="9" >2009</option>
                                                  <option value="2008" title="10" >2008</option>
                                                  <option value="2007" title="11" >2007</option>
                                                  <option value="2006" title="12" >2006</option>
                                                  <option value="2005" title="13" >2005</option>
                                                  <option value="2004" title="14" >2004</option>
                                                  <option value="2003" title="15" >2003</option>
                                                  <option value="2002" title="16" >2002</option>
                                                  <option value="2001" title="17" >2001</option>
                                                  <option value="2000" title="18" >2000</option>
                                                  <option value="1999" title="16" >1999</option>
                                                  <option value="1998" title="17" >1998</option>
                                                  <option value="1997" title="18" >1997</option>
                                                  <option value="1996" title="16" >1996</option>
                                                  <option value="1995" title="17" >1995</option>
                                                  <option value="1994" title="18" >1994</option>
                                                  <option value="1993" title="16" >1993</option>
                                                  <option value="1992" title="17" >1992</option>
                                                  <option value="1991" title="18" >1991</option>
                                              </select>
                                              </div>
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
    console.log("this is home mapstateto prop reducer ", store );
    const {header} = store;
    let card = header.card;
    let email = header.userdetails.email;
  return {card, email};
}
function mapDispatchToProps(dispatch) {
  
   return {
      handleEditCard : (cardDetails) => dispatch(handleEditCard(cardDetails))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);