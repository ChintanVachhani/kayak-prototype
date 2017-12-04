import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
var BarChart = require('react-d3-basic').BarChart;

class GenericBarGraph extends Component {
  render() {

          var chartData = this.props.data;
          
  var width = 600,
    height = 350,
    title = this.props.title,
    chartSeries = [
      {
        field: this.props.field,
        name: this.props.fieldName,
        color: '#96bbf7'
      }
    ],
    x = function(d) {
      return d._id;
    },
    xScale = 'ordinal',
    xLabel = this.props.xLabel,
    yLabel = this.props.yLabel;

    return (


   <BarChart
      title= {title}
      data= {chartData}
      width= {width}
      height= {height}
      chartSeries = {chartSeries}
      x= {x}
      xLabel= {xLabel}
      xScale= {xScale}
      yLabel = {yLabel}
/>
  
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

GenericBarGraph.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericBarGraph);
