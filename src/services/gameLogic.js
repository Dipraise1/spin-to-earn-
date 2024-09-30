const wheelOptions = [
    { label: '⁠Mystery Box', value: 'mystery' },
    { label: '⁠5x', value: 5 },
    { label: '⁠100 Keys', value: 100 },
    { label: '⁠1k Keys', value: 1000 },
    { label: '⁠500 Keys', value: 500 },
    { label: '?', value: 'random' },
    { label: '⁠75 Keys', value: 75 },
    { label: '⁠2x', value: 2 },
    { label: '⁠50 Keys', value: 50 },
    { label: '1x', value: 1 },
    { label: '⁠150 Keys', value: 150 },
    { label: '⁠10 Keys', value: 10 }
  ];
  
  export const spin = () => {
    const randomIndex = Math.floor(Math.random() * wheelOptions.length);
    return wheelOptions[randomIndex];
  };
  
  export const calculateReward = (spinResult) => {
    if (typeof spinResult.value === 'number') {
      return spinResult.value;
    }
    if (spinResult.value === 'mystery') {
      return Math.floor(Math.random() * 1000) + 1; // Random reward between 1 and 1000
    }
    if (spinResult.value === 'random') {
      return calculateReward(spin()); // Spin again
    }
    return 0; // Default case
  };
  
  export const isValidReferral = (referralCode) => {
    // In a real app, you'd check this against a database
    return Math.random() < 0.5; // 50% chance of being valid
  };
  
  export const getLeaderboard = async () => {
    // In a real app, you'd fetch this from a backend
    return [
      { username: 'player1', score: 10000 },
      { username: 'player2', score: 8000 },
      { username: 'player3', score: 6000 },
      { username: 'player4', score: 4000 },
      { username: 'player5', score: 2000 },
    ];
  };
  
  // Add more game logic functions as needed