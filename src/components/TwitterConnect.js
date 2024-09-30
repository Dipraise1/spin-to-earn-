import React from 'react';
import { connectTwitter, shareOnTwitter } from '../services/twitterApi';
const TwitterConnect = ({ onConnect }) => {
  const connectTwitter = () => {
    // In a real app, you'd implement Twitter OAuth here
    onConnect(true);
  };

  return (
    <div className="twitter-connect">
      <button onClick={connectTwitter}>Connect Twitter for Extra Spins</button>
    </div>
  );
};

export default TwitterConnect;