import React, { useState, useEffect } from 'react';
import Login from './Login';
import SpinWheel from './SpinWheel';
import TwitterConnect from './TwitterConnect';
import ReferralSystem from './ReferralSystem';
import { connectWallet, disconnectWallet, getWalletAddress } from '../services/solanaWallet';
import { connectTwitter, isTwitterConnected } from '../services/twitterApi';
import { calculateReward } from '../services/gameLogic';
import '../styles/main.css';

const App = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [twitterConnected, setTwitterConnected] = useState(false);
  const [spinsRemaining, setSpinsRemaining] = useState(4);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const checkConnections = async () => {
      const walletAddress = getWalletAddress();
      setWalletConnected(!!walletAddress);
      setTwitterConnected(isTwitterConnected());
    };
    checkConnections();
  }, []);

  const handleWalletConnection = async () => {
    if (walletConnected) {
      await disconnectWallet();
      setWalletConnected(false);
    } else {
      const connected = await connectWallet();
      setWalletConnected(connected);
    }
  };

  const handleTwitterConnection = async () => {
    const connected = await connectTwitter();
    setTwitterConnected(connected);
    if (connected) {
      setSpinsRemaining(prev => prev + 1);
    }
  };

  const handleSpin = (spinResult) => {
    if (spinsRemaining > 0) {
      setSpinsRemaining(prev => prev - 1);
      const reward = calculateReward(spinResult);
      setPoints(prev => prev + reward);
    }
  };

  const handleReferral = () => {
    setSpinsRemaining(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>Spin to Earn with </h1>
      {!walletConnected ? (
        <Login onConnect={handleWalletConnection} />
      ) : (
        <>
          <button onClick={handleWalletConnection}>Disconnect Wallet</button>
          <SpinWheel onSpin={handleSpin} spinsRemaining={spinsRemaining} />
          <div>Points: {points}</div>
          <div>Spins Remaining: {spinsRemaining}</div>
          {!twitterConnected && <TwitterConnect onConnect={handleTwitterConnection} />}
          <ReferralSystem onReferral={handleReferral} />
        </>
      )}
    </div>
  );
};

export default App;