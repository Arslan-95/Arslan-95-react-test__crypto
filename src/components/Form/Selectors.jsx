import React from 'react';
import PropTypes from 'prop-types';
import { WalletRate, WalletSelector, Swap } from './';

function Selectors({
  wallets = [],
  swapClick,
  setCurrentWallet,
  walletRate,
  apiStatus,
}) {
  return (
    <>
      <div className="wallet-change__Selectors">
        <WalletSelector data={wallets[0]} setCurrentWallet={setCurrentWallet} />
        <Swap onClick={swapClick} />
        <WalletSelector data={wallets[1]} setCurrentWallet={setCurrentWallet} />
      </div>
      <WalletRate apiStatus={apiStatus} number={walletRate} />
    </>
  );
}

Selectors.propTypes = {
  wallets: PropTypes.arrayOf(PropTypes.object),
  swapClick: PropTypes.func,
  setCurrentWallet: PropTypes.func,
  walletRate: PropTypes.number,
  apiStatus: PropTypes.string,
};

export default Selectors;
