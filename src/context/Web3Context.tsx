import React, { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';
import { magic } from '../utils/magic';

// Define the structure of the Web3 context state
type Web3ContextType = {
  web3: Web3 | null;
  user: string | null;
  initializeWeb3: () => void;
};

// Create the context with default values
const Web3Context = createContext<Web3ContextType>({
  web3: null,
  user: null,
  initializeWeb3: () => {},
});

// Custom hook to use the Web3 context
export const useWeb3 = () => useContext(Web3Context);

// Provider component to wrap around components that need access to the context
export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  // State variable to hold an instance of Web3
  const [web3, setWeb3] = useState<Web3 | null>(null);
  // Initialize user state to hold user's account information.
  const [user, setUser] = useState<string | null>(null);

  // Initialize Web3
  const initializeWeb3 = async () => {
    // Get the provider from the Magic instance
    // @ts-ignore
    const provider = await magic.wallet.getProvider();

    // Create a new instance of Web3 with the provider
    const web3 = new Web3(provider);

    // Save the instance to state
    setWeb3(web3);
  };

  // Function to retrieve and set user's account.
  const fetchUserAccount = async () => {
    // Use Web3 to get user's accounts.
    const accounts = await web3?.eth.getAccounts();

    // Update the user state with the first account (if available), otherwise set to null.
    setUser(accounts ? accounts[0] : null);
  };

  // Effect to initialize Web3 when the component mounts
  useEffect(() => {
    initializeWeb3();
  }, []);

  // Run fetchUserAccount function whenever the web3 instance changes.
  useEffect(() => {
    fetchUserAccount();
  }, [web3]);

  return (
    <Web3Context.Provider
      value={{
        web3,
        user,
        initializeWeb3,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
