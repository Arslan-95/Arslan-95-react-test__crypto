const initialState = {
  wallets: {
    note: {
      name: 'note',
      items: ['RUB', 'USD', 'EUR'],
      current: 'RUB',
    },
    crypto: {
      name: 'crypto',
      items: ['BTC', 'BNB', 'ETH'],
      current: 'BTC',
    },
  },
  changeType: 'buy',
  walletRate: 0,
  apiStatus: 'loaded',
  resultWallets: function () {
    const note = { ...this.wallets.note };
    const crypto = { ...this.wallets.crypto };
    const buy = [note, crypto];
    const sell = [crypto, note];
    const result = this.changeType === 'sell' ? sell : buy;

    return result;
  },
};

const wallets = (state = initialState, action) => {
  switch (action.type) {
    case 'SWAP_CHANGE_TYPE': {
      return {
        ...state,
        changeType: state.changeType === 'sell' ? 'buy' : 'sell',
      };
    }
    case 'SET_CURRENT_WALLET': {
      const { data } = action;
      return {
        ...state,
        wallets: {
          ...state.wallets,
          [data.wallet]: {
            ...state.wallets[data.wallet],
            current: data.current,
          },
        },
      };
    }
    case 'SET_WALLET_RATE': {
      return {
        ...state,
        walletRate: action.value,
      };
    }
    case 'SET_API_STATUS': {
      return {
        ...state,
        apiStatus: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export default wallets;
