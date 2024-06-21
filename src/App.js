import React, { useState } from 'react';
import { connectWallet, getArweaveInstance } from './arconnect';

const App = () => {
  const [address, setAddress] = useState(null);

  const handleConnectWallet = async () => {
    const userAddress = await connectWallet();
    setAddress(userAddress);
  };

  const handleAOProcess = async () => {
    const arweave = getArweaveInstance();
    // Implement your AO process logic here
  };

  return (
    <div>
      <h1>Arconnect Wallet Integration</h1>
      <button onClick={handleConnectWallet}>Connect Wallet</button>
      {address && <p>Connected Address: {address}</p>}
      <button onClick={handleAOProcess}>Connect to AO Process</button>
    </div>
  );
};

export default App;
