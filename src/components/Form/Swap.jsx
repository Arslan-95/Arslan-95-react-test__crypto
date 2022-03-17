import React from 'react';
import PropTypes from 'prop-types';
import icon from './img/left-and-right-arrows.png';

const styles = {
  img: {
    width: '100%',
  },
  btn: {
    margin: '0 5px',
    padding: 0,
    width: 30,
    border: 'none',
    background: 'none',
  },
};

function Swap({ onClick }) {
  return (
    <button style={styles.btn} onClick={onClick} className="btn" type="button">
      <img src={icon} alt="swap" style={styles.img} />
    </button>
  );
}

Swap.propTypes = {
  onClick: PropTypes.func,
};

export default Swap;
