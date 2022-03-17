import React from 'react';
import PropTypes from 'prop-types';

function WalletSelector({ data = {}, setCurrentWallet }) {
  const onChange = (event) => {
    setCurrentWallet(data.name, event.currentTarget.value);
  };

  return (
    <select className="Wallet-Selector" name={data.name} value={data.current} onChange={onChange}>
      {data.items.map((name, index) => (
        <option value={name} key={index}>
          {name}
        </option>
      ))}
    </select>
  );
}

WalletSelector.propTypes = {
  data: PropTypes.object,
};

export default WalletSelector;
