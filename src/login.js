import React from 'react';

const Login = ({ onConnect }) => {
  return (
    <div className="login">
      <h2>Connect your Solana Wallet</h2>
      <button onClick={onConnect}>Connect Wallet</button>
    </div>
  );
};

export default Login;