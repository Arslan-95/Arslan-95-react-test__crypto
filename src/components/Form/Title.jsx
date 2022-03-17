import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  title: { margin: '0 auto 10px' },
};

function Title({ changeType }) {
  const formTitle = changeType === 'sell' ? 'Продажа' : 'Покупка';

  return <h4 style={styles.title}>{formTitle}</h4>;
}

Title.propTypes = {
  changeType: PropTypes.string,
};

export default Title;
