import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteAccount, handleEditProfile, handleImageEdit, getUserDetails} from './HeaderActions';
import styles from './Header.css';


class AccountDetails extends Component {

   state= {
        edit : '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        email : '',
        phoneNumber: '',
        profileImage: '',
    }

    popUpdateImageWindow= (event) => {
      this.refs.uploadPhotoPop.style="display: inline-block";
    }

    updatePhoto = (event) => {
      console.log("in updatePhoto");
      let imagefile = this.refs.image.files[0];
      this.refs.uploadPhotoPop.style="display: none";
      this.refs.uploadPhotoForm.reset();
      const data = new FormData();
      data.append('file', imagefile);
      this.props.handleImageEdit(data);
    }

    closeUpdateImageWindow= (event) => {
      this.refs.uploadPhotoPop.style="display: none";
      this.refs.uploadPhotoForm.reset();
    }

    handleEditFlip()
    {
        this.setState({edit:'false'});
        this.props.handleEditProfile(this.state);
    }

    componentWillMount() {
      console.log("in componentWillMount of account details");
      this.props.getUserDetails();
    }

    componentDidMount() {
        if(this.props.user.firstName != null && this.props.user.firstName != 'undefined')
          this.setState({firstName: this.props.user.firstName});

        if(this.props.user.lastName != null && this.props.user.lastName != 'undefined')
          this.setState({lastName: this.props.user.lastName});

        if(this.props.user.address != null && this.props.user.address != 'undefined')
          this.setState({address: this.props.user.address});

        if(this.props.user.city != null && this.props.user.city != 'undefined')
          this.setState({city: this.props.user.city});

        if(this.props.user.state != null && this.props.user.state != 'undefined')
          this.setState({state: this.props.user.state});

        if(this.props.user.zipcode != null && this.props.user.zipcode != 'undefined')
          this.setState({zipcode: this.props.user.zipcode});

        if(this.props.user.email != null && this.props.user.email != 'undefined')
          this.setState({email: this.props.user.email});

        if(this.props.user.phoneNumber != null && this.props.user.phoneNumber != 'undefined')
          this.setState({phoneNumber: this.props.user.phoneNumber});     
    }

  
  render() {
    let img;
    if(this.props.user.profileImage != null && this.props.user.profileImage != 'undefined') {
      var imgSrc = new Buffer(this.props.user.profileImage, 'base64').toString();
      img = "data:"+this.props.user.profileImage.contentType+";base64," + imgSrc;
    }
    return (
      <div style={{'padding':'20px'}}>
        { this.state.edit == 'true'?
            <div>
              <div className="col-md-offset-1 col-md-9" style={{'width': '650px', 'padding':'20px'}}>
                <form>
                    <div style={{'padding' : '20px'}}>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>First Name</h5>
                            </div>
                            <div className="col-md-offset-1 col-md-8">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="firstName"
                                    name = "firstname"
                                    placeholder="Enter FirstName"
                                    value = {this.state.firstName}
                                    onChange={(event) => {             
                                                this.setState({firstName: event.target.value});
                                            }} 
                                required />
                            </div>
                        </div>
                    </div>
                    <div style={{'padding' : '20px'}}>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Last Name</h5>
                            </div>
                            <div className="col-md-offset-1 col-md-8">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="lastName"
                                    name = "lastName"
                                    placeholder="Enter LastName"
                                    value = {this.state.lastName}
                                    onChange={(event) => {                           
                                              this.setState({lastName: event.target.value});
                                              }} 
                                required />
                            </div>
                        </div>
                    </div>
                    <div style={{'padding' : '20px'}}>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Phone</h5>
                            </div>
                            <div className="col-md-offset-1 col-md-8">
                                <input
                                    className="form-control"
                                    type="number"
                                    label="phone"
                                    name = "phone"
                                    placeholder="Enter Phone Number"
                                    value = {this.state.phoneNumber}
                                            onChange={(event) => {                                 
                                            this.setState({phoneNumber: event.target.value});
                                            }} 
                                required />
                            </div>
                        </div>
                    </div>
                    <div style={{'padding' : '20px'}}>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Address</h5>
                            </div>
                            <div className="col-md-offset-1 col-md-8">
                                <input
                                    className="form-control"
                                    type="textarea"
                                    label="address"
                                    name = "address"
                                    placeholder="Enter Address"
                                    value = {this.state.address}
                                            onChange={(event) => {                                 
                                              this.setState({address: event.target.value});
                                            }} 
                                required />
                            </div>
                        </div>
                    </div>
                    <div style={{'padding' : '20px'}}>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>City</h5>
                            </div>
                            <div className="col-md-offset-1 col-md-8">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="city"
                                    name = "city"
                                    placeholder="Enter City"
                                    value = {this.state.city}
                                    onChange={(event) => {                                 
                                              this.setState({city: event.target.value});
                                            }} 
                                required />
                            </div>
                        </div>
                    </div>
                    <div style={{'padding' : '20px'}}>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>State</h5>
                            </div>
                            <div className="col-md-offset-1 col-md-8">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="state"
                                    name = "state"
                                    placeholder="Enter State"
                                    value = {this.state.state}
                                    onChange={(event) => {                                 
                                              this.setState({state: event.target.value});
                                            }} 
                                required />
                            </div>
                        </div>
                    </div>
                    <div style={{'padding' : '20px'}}>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Zipcode</h5>
                            </div>
                            <div className="col-md-offset-1 col-md-8">
                                <input
                                    className="form-control"
                                    type="number"
                                    label="zipcode"
                                    name = "zipcode"
                                    placeholder="Enter State"
                                    value = {this.state.zipcode}
                                    onChange={(event) => {                                 
                                              this.setState({zipcode: event.target.value});
                                            }} 
                                required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button type="Button" className="btn btn-primary btn-block" style={{'background-color': '#DC143C'}}
                                onClick={(event) => this.handleEditFlip()}
                        >Edit Profile</button>
                    </div>
                </form>
              </div>
            </div>
        :
            <div>
              <div className="col-md-3 ">
                  <div className="row">
                    <img src={img} id={styles['profile-img']}></img>
                  </div>
                  <div className="row">
                      <button type="Button" className="btn btn-primary btn-block" style={{'background-color': '#DC143C'}}
                              onClick={(event) => this.popUpdateImageWindow()}
                      >Edit Image</button>
                  </div>
              </div>
              <div className="col-md-offset-1 col-md-7" style={{'width': '650px'}}>
                  <table style={{'padding':'10px'}}>
                      <tbody style={{'border-spacing':'10px'}}>
                        <tr>
                          <td style={{'width': '100px', 'padding' : '10px'}}><b>FirstName</b></td>
                          <td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                          <td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.firstName}</td>
                        </tr>
                        <tr>
                          <td style={{'width': '100px', 'padding' : '10px'}}><b>LastName</b></td>
                          <td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                          <td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.lastName}</td>
                        </tr>
                        <tr>
                          <td style={{'width': '100px', 'padding' : '10px'}}><b>Email</b></td>
                          <td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                          <td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.email}</td>
                        </tr>
                        <tr>
                          <td style={{'width': '100px', 'padding' : '10px'}}><b>Address</b></td>
                          <td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                          <td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.address}</td>
                        </tr>
                        <tr>
                          <td style={{'width': '100px', 'padding' : '10px'}}><b>City</b></td>
                          <td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                          <td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.city}</td>
                        </tr>
                        <tr>
                          <td style={{'width': '100px', 'padding' : '10px'}}><b>State</b></td>
                          <td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                          <td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.state}</td>
                        </tr>
                        <tr>
                          <td style={{'width': '100px', 'padding' : '10px'}}><b>Zipcode</b></td>
                          <td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                          <td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.zipcode}</td>
                        </tr>
                        <tr>
                          <td style={{'width': '100px', 'padding' : '10px'}}><b>Phone</b></td>
                          <td style={{'width': '25px', 'padding' : '10px'}}>-</td>
                          <td style={{'width': '200px', 'padding' : '10px'}}>{this.props.user.phoneNumber}</td>
                        </tr>
                        <tr>
                          <td align="center" style={{'width': '150px','align': 'center', 'padding' : '10px'}}>
                            <a className="btn btn-primary btn-lg" role="button" style={{'background-color': '#DC143C'}} 
                                  onClick={() => {this.setState({ edit: 'true'});}}>Edit Profile</a>
                          </td>
                          <td style={{'float': 'right', 'padding' : '10px', 'width': '150px'}}>
                            <a className="btn btn-primary btn-lg" role="button" style={{'background-color': '#DC143C'}} onClick={()=>{this.props.deleteAccount();}}>Delete Account</a>
                          </td>
                        </tr>
                      </tbody>
                  </table>
              </div>
            </div>
         }
        <div className={styles['photopopup']} id="uploadPhoto" style={{'display': 'none'}} ref="uploadPhotoPop">
          <div className="row" >
            <button type="button" className="close" aria-label="Close" id={styles['xbutton']} onClick={this.closeUpdateImageWindow}>X</button>
          </div>
          <div className="col-md-offset-1 col-md-8">
            <form ref="uploadPhotoForm">
              <input className="form-control-file" type="file" ref="image"/>
              <div  className="form-group" >
                <input type="button" className="btn btn-primary btn-block"  value="Upload Image" style={{'width':'100%', 'font-size': '14px'}} onClick={this.updatePhoto}/>
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
    console.log("this is home mapstateto prop reducer " );
    let user = header.userdetails;
  return {user};
}
function mapDispatchToProps(dispatch) {
   return {
     deleteAccount : () => dispatch(deleteAccount()),
     handleEditProfile: (userDetails) => dispatch(handleEditProfile(userDetails)),
     getUserDetails : () => dispatch(getUserDetails()),
     handleImageEdit : (formData) => dispatch(handleImageEdit(formData))
    };
}
export default connect( mapStateToProps,  mapDispatchToProps)(AccountDetails);