import React from 'react';
import { connectWallet, disconnectWallet } from '../services/solanaWallet';
const Login = ({ onConnect }) => {
  return (
    <div className="login">
      <h2>  login TO AOXOLT </h2>
      <button onClick={onConnect}>Connect Wallet</button>
    </div>
  );
};

export default Login;