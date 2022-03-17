import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Selectors, Submit, Title, Input } from './';
import {
  swapChangeType,
  setCurrentWallet,
  setWalletRate,
  setApiStatus,
} from '../../redux/actions/wallets';

function WalletChangeForm({
  wallets,
  changeType,
  setCurrentWallet,
  swapChangeType,
  walletRate,
  setWalletRate,
  setApiStatus,
  apiStatus,
}) {
  const crypto = wallets.filter((item) => item.name === 'crypto');
  const note = wallets.filter((item) => item.name === 'note');
  const url = `https://api.coinbase.com/v2/prices/${crypto[0].current}-${note[0].current}/${changeType}`;

  React.useEffect(() => {
    setApiStatus('loading');
    axios
      .get(url)
      .then((res) => {
        const result = Number(res.data.data.amount);
        setWalletRate(result);
        setApiStatus('loaded');
      })
      .catch((err) => {
        setWalletRate(10);
        setApiStatus('null');
        console.log(err);
      });
  }, [url, setApiStatus, setWalletRate]);

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('date', new Date());
    axios.post('http://localhost:3005/orders', formData);
  };

  return (
    <form className="Wallet-change" onSubmit={onSubmit}>
      <Title changeType={changeType} />
      <Selectors
        wallets={wallets}
        setCurrentWallet={setCurrentWallet}
        swapClick={swapChangeType}
        walletRate={walletRate}
        apiStatus={apiStatus}
      />
      <Input currentWallet={wallets[0].current} />
      <input type="hidden" name="changeType" value={changeType} />
      <Submit />
    </form>
  );
}

WalletChangeForm.propTypes = {
  wallets: PropTypes.arrayOf(PropTypes.object),
  changeType: PropTypes.string,
  setCurrentWallet: PropTypes.func,
  swapChangeType: PropTypes.func,
  walletRate: PropTypes.number,
  setWalletRate: PropTypes.func,
  setApiStatus: PropTypes.func,
  apiStatus: PropTypes.string,
};

function mapStateToProps(state) {
  const { wallets } = state;
  return {
    wallets: wallets.resultWallets(),
    changeType: wallets.changeType,
    walletRate: wallets.walletRate,
    apiStatus: wallets.apiStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    swapChangeType: () => {
      dispatch(swapChangeType());
    },
    setCurrentWallet: (wallet, current) => {
      dispatch(setCurrentWallet(wallet, current));
    },
    setWalletRate: (value) => {
      dispatch(setWalletRate(value));
    },
    setApiStatus: (value) => {
      dispatch(setApiStatus(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletChangeForm);
