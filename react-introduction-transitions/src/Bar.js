import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { MAX_HEIGHT } from './strings';

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        active: true,
      });
    }, 0);
  }
  render() {
    const { height, onClick, position } = this.props;
    const { active } = this.state;
    return (
      <div
        className={`bar${active ? ' bar--active' : ''}`}
        style={{ height, marginTop: MAX_HEIGHT - height}}
        onClick={() => onClick(position)}
      />
    );
  }
}
Bar.propTypes = {
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
}
export default Bar;
