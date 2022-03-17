export const swapChangeType = () => ({ type: 'SWAP_CHANGE_TYPE' });
export const setCurrentWallet = (wallet, current) => ({
  type: 'SET_CURRENT_WALLET',
  data: { wallet, current },
});

export const setWalletRate = (value) => ({ type: 'SET_WALLET_RATE', value });
export const setApiStatus = (value) => ({ type: 'SET_API_STATUS', value });
