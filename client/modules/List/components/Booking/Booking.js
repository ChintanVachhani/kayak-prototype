import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './Booking.css';
import {getServiceDetail} from '../../ListActions';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Flight from '../Flight/Flight';
import Car from '../Car/Car';
import Hotel from '../Hotel/Hotel';
class Booking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
    render() {
        const {booking,serviceDetail} = this.props;
        return (
            <div className={styles['item']}>
                <div className="row">
                    <div className="col-md-10" id= {styles['itemDetailBlock']}>
                        <div className="col-md-4">
                            <a onClick={(e) => {e.preventDefault();this.setState({
                                                  modal: !this.state.modal
                                                });this.props.getServiceDetail(booking);}} id={styles['bookingLink']}>{booking._id}</a>
                        </div>
                        <div className="col-md-4">
                            {booking.serviceType }
                        </div>
                        <div className="col-md-4">
                            {booking.dateAdded }
                        </div>                     
                    </div>
                </div> 
               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader><strong>Booking information for {booking.serviceType}</strong></ModalHeader>
                  <ModalBody>
                  <div className="row">
                    {
                        booking.serviceType=='Car'?<Car car={serviceDetail} showOnly={true}/>:
                        booking.serviceType=='Hotel'?<Hotel hotel={serviceDetail} showOnly={true}/>:
                        <Flight flight={serviceDetail} showOnly={true}/>

                    }
                    </div>
                    <hr/>
                    <div className="row">
                        <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;  User information:{booking.userID} <br/><br/>                       
                    </div>                    
                    <div className="row">
                        <div className="col-md-4">
                            Date To: {booking.bookingDetail.dateFrom}
                        </div>
                        <div className="col-md-4">
                            Date From:{booking.bookingDetail.dateTo}
                        </div>
                        <div className="col-md-4">
                            Total Price:{booking.bookingDetail.price}
                        </div>                         
                    </div>
                  </ModalBody>
                </Modal>                               
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const serviceDetail = state.list.serviceClickedDetail;
  return {serviceDetail};  
};

 const mapDispatchToProps = (dispatch) => {
   return {
       getServiceDetail : (booking)  => dispatch(getServiceDetail(booking))
    };
 };

Booking.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);

