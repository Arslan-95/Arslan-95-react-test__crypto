import React from 'react';
import PropTypes from 'prop-types';

function WalletRate({ number, apiStatus }) {
  let result = getResult(apiStatus, number);

  return (
    <>
      <p>Курс обмена: {result}</p>
      <input type="hidden" name="walletRate" value={result} />
    </>
  );
}

WalletRate.propTypes = {
  number: PropTypes.number,
  apiStatus: PropTypes.string,
};

function getResult(apiStatus, number) {
  switch (apiStatus) {
    case 'loaded':
      return number;
    case 'loading':
      return 'Загружается...';
    case 'null':
      return 'Нельзя рассчитать данные валюты';
    default:
      return number;
  }
}

export default WalletRate;
