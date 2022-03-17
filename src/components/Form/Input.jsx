import React from 'react';
import PropTypes from 'prop-types';

function Input({ currentWallet }) {
  return (
    <label className="Wallets-number">
      Кол-во {currentWallet}:
      <input name="walletsCount" type="number" required />
    </label>
  );
}

Input.propTypes = {
  currentWallet: PropTypes.string,
};

export default Input;
