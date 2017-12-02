import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import CarContainer from './CarContainer';
import FlightForm from './FlightForm';
import HotelForm from './HotelForm';
import {changeForm} from './HomeActions';

// Import Style
import styles from './Home.css';

class Home extends Component {

changeTravelType = (name) => {
      console.log("this is in change travel state "+ name);
      this.props.changeForm(name);
    }

  componentDidMount() {
    console.log(" Refreshing Home page");
    console.log("this is props "+ this.props.formType);
  }

  render() {
    return (
      <div className="container-fluid p-0 m-0">
          <div className="row m-0 justify-content-md-center" style={ { 'backgroundImage':"url('https://a1.r9cdn.net/dimg/phoenix-images/v1/phoenix-flights-bg.jpg')" } }>
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 p-0">
                <div>
                    <Header />
                  </div>
                  <div className="row m-0 row align-items-center" id={styles['services']}>
                      <div>
                          <div className=" col-md-offset-3 col-md-5" >
                              <nav id="servicelist">
                                  <div className="container-fluid">
                                      <ul className="nav " role="tablist" id={styles['nav-pills']}>
                                          
                                          <li role="tab" role="button" style={{'padding': '2px', 'background-color':'white'}}>
                                          
                                              <a role="button" style={{ 'justify-content': 'center'}}   onClick={() => {this.changeTravelType('hotels');}}  >
                                                  <span className="icon" >
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" fill="currentColor" viewBox="0 0 25 17">
                                                          <path d="M2 14.77h21v2H2z"></path>
                                                          <path d="M6 7.07V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.07h1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.07h2V0H4v7.07h2zM21 8.67H4a4.06 4.06 0 0 0-4 4.07v2.43h25v-2.43a4.06 4.06 0 0 0-4-4.07z"></path>
                                                      </svg>
                                                  </span>
                                                  <span><b>HOTELS</b></span>
                                              </a>

                                          </li>
                                          
                                          <li role="tab" style={{'padding': '2px', 'background-color':'white'}}>
                                              <a role="button" style={{ 'justify-content': 'center'}} onClick={() => {this.changeTravelType('flights');}}>
                                                  <span className="icon" >
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" fill="currentColor" viewBox="0 0 25 17">
                                                          <path d="M2 14.77h21v2H2z"></path>
                                                          <path d="M6 7.07V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.07h1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.07h2V0H4v7.07h2zM21 8.67H4a4.06 4.06 0 0 0-4 4.07v2.43h25v-2.43a4.06 4.06 0 0 0-4-4.07z"></path>
                                                          <path d="M16.79 7.83l-3.93 3.93 4.51 7.05.76-.76-1.34-10.22M12.24 3.15L1.62 1.76l-.75.76 7.32 4.69 4.05-4.06"></path>
                                                          <path d="M10.73 11.94l1.3-1.3 4.28-4.28 2.8-2.8s1.54-2.12.46-3.17-3.17.47-3.17.47l-2.62 2.62-4.4 4.4L8 9.24a20 20 0 0 0-2.23 3.2l-4.67-.89L0 12.62l3.79 2.65.92.92L7.41 20l1.07-1.1-.91-4.76a20.06 20.06 0 0 0 3.16-2.2z"></path>
                                                      </svg>
                                                  </span>
                                                  <span><b>FLIGHTS</b></span>
                                              </a>
                                          </li>
                                          <li role="tab" style={{'padding': '2px', 'background-color':'white'}}>
                                              <a role="button" style={{ 'justify-content': 'center'}} onClick={() => {this.changeTravelType('cars');}}>
                                                  <span className="icon" >
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" fill="currentColor" viewBox="0 0 32 17">
                                                          <path d="M10.6 2.77L.61 1.2V0h9.99v2.77"></path>
                                                          <path fill="none" d="M12 1.84v3.33l8.14.11C18.29 3.56 16 1.87 14.72 1.84c-.96-.03-2.72 0-2.72 0z"></path>
                                                          <path d="M31 7.77c-.87-1.6-8.41-2.52-8.41-2.52S17.3.46 14.53 0H6.37h1.5A7.73 7.73 0 0 0 3 1.59a18.47 18.47 0 0 0-3 4.23v3.83c0 3.86 1.55 4.49 2.53 4.52v-.13A3.76 3.76 0 1 1 10 14v.07l9-.01a3.76 3.76 0 0 1 7.52 0h.79a7 7 0 0 0 3.9-.93A28.38 28.38 0 0 0 31 7.77zm-19-2.6V1.84h2.72c1.3 0 3.56 1.72 5.42 3.45z"></path>
                                                          <circle cx="22.71" cy="14.04" r="2.36"></circle>
                                                          <circle cx="6.28" cy="14.04" r="2.36"></circle>
                                                      </svg>
                                                  </span>
                                                  <span><b>CARS</b></span>
                                              </a>
                                          </li>     
                                      </ul>
                                  </div>
                              </nav>
                          </div>
                        {
                          this.props.formType == "cars" ? 
                          <div  className=" col-md-offset-1 col-md-8" style={{'background-color':'#f2f2f2', 'padding':'10px', 'display':'block', 'height': '175px'}}>
                              <CarContainer />
                          </div>
                        :this.props.formType == "flights" ?
                          <div className=" col-md-offset-1 col-md-9" style={{'background-color':'#f2f2f2', 'padding':'10px', 'display':'block', 'height': '175px'}}>
                              <FlightForm />
                          </div>
                        :
                        <div  className=" col-md-offset-1 col-md-8" style={{'background-color':'#f2f2f2', 'padding':'10px', 'display':'block', 'height': '175px'}}>
                            <HotelForm />
                        </div>
                      }
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
    let formType = home.formType
  return {formType};
}

function mapDispatchToProps(dispatch) {
   return {
       changeForm : (name) => dispatch(changeForm(name))
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);