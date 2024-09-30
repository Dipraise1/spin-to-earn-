import React, { useState, useEffect } from "react";
import Login from "./Login";
import SpinWheel from "./SpinWheel";
import TwitterConnect from "./TwitterConnect";
import ReferralSystem from "./ReferralSystem";
import "../styles/main.css";

const App = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [twitterConnected, setTwitterConnected] = useState(false);
  const [spinsRemaining, setSpinsRemaining] = useState(4);
  const [points, setPoints] = useState(0);

  const handleWalletConnection = () => {
    setWalletConnected(!walletConnected);
  };

  const handleTwitterConnection = (connected) => {
    setTwitterConnected(connected);
    if (connected) {
      setSpinsRemaining((prev) => prev + 1);
    }
  };

  const handleSpin = (reward) => {
    if (spinsRemaining > 0) {
      setSpinsRemaining((prev) => prev - 1);
      setPoints((prev) => prev + (typeof reward === "number" ? reward : 100));
    }
  };

  const handleReferral = () => {
    setSpinsRemaining((prev) => prev + 1);
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
          {!twitterConnected && (
            <TwitterConnect onConnect={handleTwitterConnection} />
          )}
          <ReferralSystem onReferral={handleReferral} />
        </>
      )}
    </div>
  );
};

export default App;
