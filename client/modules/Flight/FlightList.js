import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Flight from './Flight';

// Import Style
import styles from './Flight.css';

class FlightList extends Component {
  render() {
    const {flightList} = this.props;
    return (
            <div className="container-fluid">
                <div className={styles['listBackground']}>
                    <div className="row">
                        {
                        <div className="col-md-12">
                            {
                            flightList.map((flight,index) => {
                                return(
                                    <Flight
                                        key={index}
                                        flight={flight}
                                    />
                                );
                            })
                            }
                        </div>
                        }
                    </div>
                </div>      
            </div>    	
    );
  }
}

const mapStateToProps = (state) => {
   const flightList = state.flight.flightList;
    return {flightList};
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

FlightList.propTypes = {
};

export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(FlightList);