import React, { useState } from 'react';
import '../styles/spinwheel.css';

const SpinWheel = ({ onSpin, disabled }) => {
  const [spinning, setSpinning] = useState(false);
  const segments = [
    'Mystery Box', '5x', '100 Keys', '1k Keys', '500 Keys', '?',
    '75 Keys', '2x', '50 Keys', '1x', '150 Keys', '10 Keys'
  ];

  const handleSpin = () => {
    if (disabled || spinning) return;
    
    setSpinning(true);
    const randomSegment = segments[Math.floor(Math.random() * segments.length)];
    
    setTimeout(() => {
      setSpinning(false);
      onSpin(randomSegment);
    }, 3000);
  };

  return (
    <div className="spin-wheel">
      <div className={`wheel ${spinning ? 'spinning' : ''}`}>
        {segments.map((segment, index) => (
          <div 
            key={index} 
            className="wheel-option" 
            style={{ 
              transform: `rotate(${index * 30}deg) skew(60deg)`,
            }}
          >
            <span style={{ transform: 'skew(-60deg) rotate(15deg)' }}>{segment}</span>
          </div>
        ))}
      </div>
      <button onClick={handleSpin} disabled={disabled || spinning}>
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
};

export default SpinWheel;