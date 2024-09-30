import React, { useState, useEffect } from 'react';

const ReferralSystem = ({ onReferral }) => {
  const [referralLink, setReferralLink] = useState('');

  useEffect(() => {
    const uniqueId = Math.random().toString(36).substring(7);
    setReferralLink(`https://yourgame.com/ref/${uniqueId}`);
  }, []);

  const checkReferrals = () => {
    // In a real app, you'd check with your backend here
    const referred = Math.random() > 0.5;
    if (referred) {
      onReferral();
      alert('New referral detected! You earned an extra spin.');
    } else {
      alert('No new referrals yet. Keep sharing!');
    }
  };

  return (
    <div className="referral-system">
      <h3>Refer friends for extra spins!</h3>
      <p>Your referral link: {referralLink}</p>
      <button onClick={() => navigator.clipboard.writeText(referralLink)}>
        Copy Link
      </button>
      <button onClick={checkReferrals}>Check Referrals</button>
    </div>
  );
};

export default ReferralSystem;