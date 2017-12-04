import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// Import Style
import styles from './Billing.css';

class Billing extends Component {

  state = {
    customers : {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNumber : '',
        program: '',
        flyerNumber : '',
        DOB : '',
        gender : ''
      },
      billingDetails: {
        add_Srt1 : '',
        add_Str2 : '',
        add_PostalCode : '',
        add_City: '',
        add_State : '',
        add_Country : ''
      },
     card : {
        name_On_Card : '',
        card_Number : '',
        card_Month : '',
        card_Year : '',
        card_Security_Code : ''
      },
      serviceType:'',
      bookingDetail: {
        serviceId: '',
        price: '',
        dateFrom: '',
        dateTo: '',
        toPlace: '',
        fromPlace: ''
      }
  };



  componentWillMount() {
    console.log(" Refreshing Home page");   
  }

  componentDidMount() {
    console.log(" Refreshing Home page");
    if(this.props.serviceType == 'car') {
      this.setState( {
                      serviceType : this.props.serviceType,
                      bookingDetail: {
                      serviceId: this.props.serviceId,
                      price: this.props.price,
                      dateFrom: this.props.home.carFormData.fromDate,
                      dateTo: this.props.home.carFormData.toDate,
                      toPlace: this.props.home.carFormData.place,
                      fromPlace: this.props.home.carFormData.place
                    }
                  }
        );
    }
    if(this.props.serviceType == 'flight') {
      this.setState (
            {
                serviceType : this.props.serviceType,
                bookingDetail: {
                serviceId: this.props.serviceId,
                price: this.props.price,
                dateFrom: this.props.home.flightFormData.departDate,
                dateTo: this.props.home.flightFormData.returnDate,
                toPlace: this.props.home.flightFormData.toPlace,
                fromPlace: this.props.home.flightFormData.fromPlace
              }
            }
        );
    } else {
        this.setState (
            {
                serviceType : this.props.serviceType,
                bookingDetail: {
                serviceId: this.props.serviceId,
                price: this.props.price,
                dateFrom: this.props.home.hotelFormData.checkin,
                dateTo: this.props.home.hotelFormData.checkout,
                toPlace: this.props.home.hotelFormData.place,
                fromPlace: this.props.home.hotelFormData.fromPlace
              }
            }
        );
    }
  }

    render() {
      console.log(this.state);
      let totalPrice = this.props.price;
      if(this.props.serviceType == 'hotel') {
        let dateFrom = new Date(this.props.home.hotelFormData.checkin);
        let dateTo = new Date(this.props.home.hotelFormData.checkout);
        let timeDifference = Math.abs(dateFrom.getTime() - dateTo.getTime());
        let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
        totalPrice = daysDifference * this.props.price;
      }
      if(this.props.serviceType == 'car') {
        let dateFrom = new Date(this.props.home.carFormData.fromDate);
        let dateTo = new Date(this.props.home.carFormData.toDate);
        let timeDifference = Math.abs(dateFrom.getTime() - dateTo.getTime());
        let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
        totalPrice = daysDifference * this.props.price;
      }
      if(this.props.serviceType == 'flight') {
        totalPrice = this.props.home.flightFormData.passengers * this.props.price;
      }
    return (
      <div>
        <div>
          <div style={{'background-color':'#f2f2f2', 'margin':'auto', 'height':'auto', 'height':'1800px'}}>
            <div className="row" style={{'background-color':'#000000'}}>
                <Header />
            </div>
            <br />
            <div className="row">
              <div className=" col-md-offset-1 col-md-7" >
                <div  align="left" style={{'background-color':'white', 'display':'block', 'padding':'2px'} }>
                  <div style={{'padding':'10px'}}>
                    { this.props.serviceType == 'hotel' ? 
                      <div>
                        <h4><b>Place : {this.state.bookingDetail.fromPlace}</b></h4>
                        <h5>From: {this.state.bookingDetail.dateFrom}</h5>
                        <h5>To: {this.state.bookingDetail.dateTo}</h5>
                        <h5>Price : {totalPrice}</h5>
                      </div>
                      :
                      <div>
                        <h4><b>{this.state.bookingDetail.fromPlace} to {this.state.bookingDetail.toPlace}</b></h4>
                        <h5>From: {this.state.bookingDetail.dateFrom}</h5>
                        <h5>To: {this.state.bookingDetail.dateTo}</h5>
                        <h5>Price : {totalPrice}</h5>
                      </div>
                    }
                  </div>
                </div>
                <br />
                <div style={{'background-color':'white', 'padding':'2px'}}>
                  <div  align="left" style={{'background-color':'white', 'padding':'2px'}} >
                    <div  style={{'padding':'10px'}}> 
                      <form>
                        <div>
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                <br />
                                  <h5><b>Enter Customer Details</b></h5>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  label="firstName"
                                  name = "firstname"
                                  placeholder="Enter FirstName"
                                  onChange={(event) => {
                                            let customer = this.state.customers
                                            customer.firstName = event.target.value
                                            this.setState({customers: customer});
                                   }} 
                                required />
                              </div>
                            </div>  
                            <div className = "col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  label="middleName"
                                  placeholder="Enter MiddleName"
                                  onChange={(event) => {
                                            let customer = this.state.customers
                                            customer.middleName = event.target.value
                                            this.setState({ customers: customer});
                                   }} 
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                  <input
                                  className="form-control"
                                    type="text"
                                    label="lastName"
                                    placeholder="Enter LastName"
                                    onChange={(event) => {
                                              let customer = this.state.customers
                                              customer.lastName = event.target.value
                                              this.setState({customers: customer});
                                     }} 
                                    required />
                              </div>
                            </div>
                          </div> 
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="email"
                                    label="email"
                                    placeholder="Enter Email"
                                    onChange={(event) => {
                                              let customer = this.state.customers
                                              customer.email = event.target.value
                                              this.setState({customers: customer});
                                     }} 
                                    required />
                              </div>
                            </div>
                            <div className = "col-md-4">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="number"
                                    label="phoneNumber"
                                    placeholder="Enter Phone Number"
                                    onChange={(event) => {
                                              let customer = this.state.customers
                                              customer.phoneNumber = event.target.value
                                                      this.setState({
                                                           customers: customer
                                                       });
                                     }} 
                                    required />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                <select className="form-control" onChange={(event) => {
                                            let customer = this.state.customers
                                            customer.program = event.target.value
                                                    this.setState({
                                                         customers: customer
                                                     });
                                                   }}
                                >
                                  <option value="" title=""></option>
                                  <option value="Frequent Flyer Program" title="Frequent Flyer Program" >Frequent Flyer Program</option>
                                  <option value="Alaska Airline-Mileage Plan" title="Alaska Airline-Mileage Plan" >Alaska Airline-Mileage Plan</option>
                                </select>
                              </div>
                            </div>
                            <div className = "col-md-6">
                              <div className="form-group">
                                <input
                                className="form-control"
                                  type="text"
                                  label="frequentFlyerNumber"
                                  placeholder="Frequent Flyer Number"
                                  onChange={(event) => {
                                            let customer = this.state.customers
                                            customer.flyerNumber = event.target.value
                                                    this.setState({
                                                         customers: customer
                                                     });
                                                   }}
                                  />
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-md-6">
                              <p>Secure information required by airline</p>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className = "col-md-5" style={{'padding':'1px'}}>
                                <div className="form-group" style={{'padding':'1px'}}>
                                    <input
                                    className="form-control"
                                    type="date"
                                    placeholder="DOB"
                                    label="dateOfBirth"
                                    onChange={(event) => {
                                              let customer = this.state.customers
                                              customer.DOB = event.target.value
                                                      this.setState({
                                                           customers: customer
                                                       });
                                                     }}
                                    />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <select className="form-control"
                                      onChange={(event) => {
                                              let customer = this.state.customers
                                              customer[index].gender = event.target.value
                                                      
                                                      this.setState({
                                                           customers: customer
                                                       });
                                                }}
                                  >
                                    <option value="" title="Gender">Gender</option>
                                    <option value="Male" title="Male" >Male</option>
                                    <option value="Female" title="Female" >Female</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <hr/>
                  <div  align="left" style={{'background-color':'white', 'padding':'10px'}} >
                    <div>
                      <form>
                        <div>
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                <br />
                                <h5><b>Enter Billing Information</b></h5>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                <p><b>Billing Address</b></p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    label="street1"
                                    placeholder="Street (line 1)"
                                    value= {this.state.billing_Add_Srt1}
                                    onChange={(event) => {
                                          this.setState({
                                               billingDetails: Object.assign(this.state.billingDetails, {add_Srt1: event.target.value})
                                           });
                                    }}
                                  required />
                              </div>
                            </div>
                            <div className = "col-md-6">
                              <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    label="street2"
                                    placeholder="Street (line2)"
                                    value= {this.state.billing_Add_Str2}
                                    onChange={(event) => {
                                          this.setState({
                                               billingDetails: Object.assign(this.state.billingDetails, {add_Str2: event.target.value})
                                           });
                                    }}
                                  />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="number"
                                    label="zipCode"
                                    placeholder="Postal Code"
                                    value= {this.state.billing_Add_PostalCode}
                                    onChange={(event) => {
                                          this.setState({
                                               billingDetails: Object.assign(this.state.billingDetails, {add_PostalCode: event.target.value})
                                           });
                                    }}
                                  required />
                              </div>
                            </div>
                            <div className = "col-md-6">
                              <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    label="city"
                                    placeholder="City"
                                    value= {this.state.billing_Add_City}
                                    onChange={(event) => {
                                          this.setState({
                                               billingDetails: Object.assign(this.state.billingDetails, {add_City: event.target.value})
                                           });
                                    }}
                                  required />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    label="state"
                                    placeholder="State"
                                    value= {this.state.billing_Add_State}
                                    onChange={(event) => {
                                          this.setState({
                                               billingDetails: Object.assign(this.state.billingDetails, {add_State: event.target.value})
                                           });
                                    }}
                                  required />
                              </div>
                            </div>
                            <div className = "col-md-6">
                              <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    label="country"
                                    placeholder="Country"
                                    value= {this.state.billing_Add_Country}
                                    onChange={(event) => {
                                          this.setState({
                                               billingDetails: Object.assign(this.state.billingDetails, {add_Country: event.target.value})
                                           });
                                    }}
                                  required />
                              </div>
                            </div>
                          </div>
                          <hr />
                        </div>
                        <div>
                          <div className="row">
                            <div className = "col-md-6">
                              <div className="form-group">
                                <h5><b>Card Details</b></h5>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className = "col-md-6">
                               <div className="form-group">
                                    <input
                                      className="form-control"
                                      type="text"
                                      label="nameOnCard"
                                      placeholder="Name On Card"
                                      value= {this.state.card_Name_On_Card}
                                      onChange={(event) => {
                                            this.setState({
                                                 card: Object.assign(this.state.card, {name_On_Card: event.target.value})
                                             });
                                      }}  
                                    required />
                                </div>
                            </div>
                            <div className = "col-md-6">
                              <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    label="cardNumber"
                                    placeholder="Card Number"
                                    value= {this.state.card_Number}
                                    onChange={(event) => {
                                          this.setState({
                                               card: Object.assign(this.state.card, {card_Number: event.target.value})
                                           });
                                    }}
                                    
                                  required />
                                </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className = "col-md-3">
                              <div className="form-group">
                                <select className="form-control" onChange={(event) => {
                                  this.setState({
                                             card: Object.assign(this.state.card, {card_Month: event.target.value})
                                         });
                                        
                                         console.log("this is printing state");
                                  console.log(this.state.card_Month);
                                  }} > 
                                  <option value="" title="">Month</option>
                                  <option value="1" title="Jan" >01-Jan</option>
                                  <option value="2" title="Feb" >02-Feb</option>
                                  <option value="3" title="Mar" >03-Mar</option>
                                  <option value="4" title="Apr" >04-Apr</option>
                                  <option value="5" title="May" >05-May</option>
                                  <option value="6" title="Jun" >06-Jun</option>
                                  <option value="7" title="Jul" >07-Jul</option>
                                  <option value="8" title="Aug" >08-Aug</option>
                                  <option value="9" title="Sep" >09-Sep</option>
                                  <option value="10" title="Oct" >10-Oct</option>
                                  <option value="11" title="Nov" >11-Nov</option>
                                  <option value="12" title="Dec" >12-Dec</option>
                                </select>
                               </div>
                            </div>
                            <div className = "col-md-2">
                              <div className="form-group">
                                  <select id="cardIssuedYear" className="form-control" onChange={(event) => {
                                    this.setState({
                                               card: Object.assign(this.state.card, {card_Year: event.target.value})
                                           });
                                          
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
                            <div className = "col-md-3">
                              <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="number"
                                    label="securityCode"
                                    placeholder="Security Code"
                                    value = {this.state.card_Security_Code}
                                    onChange={(event) => {
                                      this.setState({
                                               card: Object.assign(this.state.card, {card_Security_Code: event.target.value})
                                           });
                                    }} 
                                  required />
                              </div>
                            </div>
                          </div>
                          </div>
                          <div>
                            <button type="Button" className="btn btn-primary btn-block" style={{'background-color': '#DC143C'}}
                            onClick={() => this.props.handleBook(this.state)}
                            >Book</button>
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );

    }
}

function mapStateToProps(store) {
  const {home} = store;
  console.log("this is home mapstateto prop reducer " );
  return {home};
}

function mapDispatchToProps(dispatch) {
   return {
       handleBook : (bookData) => dispatch(handleBook(bookData))
    };
}



export default connect( mapStateToProps,  mapDispatchToProps)(Billing);
