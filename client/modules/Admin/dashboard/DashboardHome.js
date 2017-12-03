import React, {Component} from 'react';
import {populateCities} from '../AdminActions';
import {connect} from 'react-redux';
class DashboardHome extends Component {
    componentWillMount(){
        this.props.populateCities();
    } 
	render() {
    

		return( 
             
        <div className="col-sm-9 col-md-10 pt-5">
          <h1>Dashboard</h1>

          <section className="row text-center placeholders">
            Ssss
          </section>
        </div>
			)
	}

}
const mapDispatchToProps = (dispatch) => {
   return {
        populateCities : () => dispatch(populateCities())
    };
};
export default connect(
  null,
  mapDispatchToProps
)(DashboardHome);