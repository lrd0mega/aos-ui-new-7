import Arweave from 'arweave';
import ArConnect from 'arconnect';  // Corrected package name

export const connectWallet = async () => {
  await ArConnect.connect(["ACCESS_ADDRESS", "SIGN_TRANSACTION"]);
  const address = await ArConnect.getActiveAddress();
  return address;
};

export const getArweaveInstance = () => {
  return Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
  });
};
