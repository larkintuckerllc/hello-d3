const DATASET = [32, 57, 293];
var domReady = function(callback) {
  document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
};
domReady(function() {
  var selection = d3.select('#chart')
    .selectAll('.circle')
    .data(DATASET);
  selection.enter()
    .append('circle')
    .attr('class', 'circle')
    .attr('cy', 60)
    .attr('cx', function(d, i) { return i * 100 + 30; })
    .attr('r', function(d) { return Math.sqrt(d); })
    .transition()
    .attr('r', function(d) { return (2 * Math.sqrt(d)); })
    .duration(2000);
});
