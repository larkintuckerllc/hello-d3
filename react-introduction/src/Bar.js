import React from 'react';
import { PropTypes } from 'prop-types';
import { MAX_HEIGHT } from './strings';

const Bar = ({ height, onClick, position }) => (
  <div
    className="bar"
    style={{ height, marginTop: MAX_HEIGHT - height}}
    onClick={() => onClick(position)}
  />
);
Bar.propTypes = {
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
}
export default Bar;
