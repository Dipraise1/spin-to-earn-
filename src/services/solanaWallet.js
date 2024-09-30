import { Connection, PublicKey, Transaction } from '@solana/web3.js';


let wallet = null;

export const connectWallet = async () => {
  if ('solana' in window) {
    const provider = window.solana;
    if (provider.isPhantom) {
      try {
        const resp = await provider.connect();
        wallet = resp.publicKey.toString();
        console.log('Connected with Public Key:', wallet);
        return true;
      } catch (err) {
        console.error("Error connecting to Phantom wallet", err);
      }
    }
  } else {
    window.open('https://phantom.app/', '_blank');
  }
  return false;
};

export const disconnectWallet = async () => {
  if (wallet && window.solana) {
    await window.solana.disconnect();
    wallet = null;
    console.log('Disconnected from wallet');
    return true;
  }
  return false;
};

export const getWalletAddress = () => {
  return wallet;
};

// Add more Solana wallet interactions as needed