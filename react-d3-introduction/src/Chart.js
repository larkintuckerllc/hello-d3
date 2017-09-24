import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { select } from "d3-selection";
import 'd3-transition';
import { MAX_HEIGHT } from './strings';

class Chart extends Component {
  componentDidMount() {
    const { dataset } = this.props;
    this.update(dataset);
  }
  componentWillReceiveProps({ dataset }) {
    this.update(dataset);
  }
  shouldComponentUpdate() {
    return false;
  }
  update(dataset) {
    window.console.log('UPDATE');
    window.console.log(dataset);
    const selection = select("#chart")
      .selectAll(".bar").data(dataset)
      .style("height", function(d){
        // HAvE TO USE PX WITH NPM VERSION
        return `${d.toString()}px`;
      })
      .style("margin-top", function(d){
        return `${(MAX_HEIGHT - d).toString()}px`;
      });
    selection.enter()
      .append("div").attr("class", "bar")
      .style("height", function(d){
        return `${d.toString()}px`;
      })
      .style("margin-top", function(d){
        return `${(MAX_HEIGHT - d).toString()}px`;
      })
      .on("click", function(e, i){
        window.console.log(i);
      })
      .transition()
      .style('background-color', 'red')
      .duration(2000);
    selection.exit().remove();
  }
  render() {
    window.console.log('RENDER');
    return (
      <div id="chart">
      </div>
    );
  }
}
Chart.propTypes = {
  dataset: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}
export default Chart;
