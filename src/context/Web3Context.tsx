import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
import { WalletInfo } from 'magic-sdk';

import magic from '../utils/magic';
import useWalletBalance from '../hooks/useWalletBalance';

// Define the structure of the Web3 context state
type Web3ContextType = {
  isUserConnected: boolean;
  magicLinkProvider: ethers.providers.Web3Provider | undefined;
  onConnect: () => Promise<void>;
  onDisconnect: () => Promise<void>;
  manageWallet: () => Promise<void>;
  walletAddress: string;
  walletConnectionType: WalletInfo | undefined;
  networkTokenBalance: BigNumber;
  oceanTokenBalance: BigNumber;
  networkTokenBalanceFormatted: string;
  oceanTokenBalanceFormatted: string;
  loadNetworkTokenBalance: () => Promise<void>;
  loadOceanTokenBalance: () => Promise<void>;
};

// Create the context with default values
const Web3Context = createContext<Web3ContextType>({} as Web3ContextType);

// Custom hook to use the Web3 context
export const useWeb3 = () => useContext(Web3Context);

// Provider component to wrap around components that need access to the context
export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [magicLinkProvider, setMagicLinkProvider] = useState();
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [walletConnectionType, setWalletConnectionType] =
    useState<WalletInfo>();

  const web3Provider = useMemo(() => {
    if (!isUserConnected) {
      return;
    }

    let provider;
    provider = magicLinkProvider;

    return provider ? new ethers.providers.Web3Provider(provider) : undefined;
  }, [isUserConnected, magicLinkProvider]);

  const {
    networkTokenBalance,
    oceanTokenBalance,

    networkTokenBalanceFormatted,
    oceanTokenBalanceFormatted,

    loadNetworkTokenBalance,
    loadOceanTokenBalance,
  } = useWalletBalance({ provider: web3Provider });

  const onConnect = useCallback(async () => {
    try {
      await magic.wallet.connectWithUI();
      const provider = await magic.wallet.getProvider();
      setMagicLinkProvider(provider);
      const walletInfo = await magic.wallet.getInfo();
      setWalletConnectionType(walletInfo);
      setIsUserConnected(true);
    } catch (error) {
      setIsUserConnected(false);
      setMagicLinkProvider(undefined);
      setWalletConnectionType(undefined);
      console.log(error);
    }
  }, []);

  const onDisconnect = useCallback(async () => {
    try {
      await magic.user.logout();
      setMagicLinkProvider(undefined);
      setIsUserConnected(false);
      setWalletConnectionType(undefined);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const manageWallet = useCallback(async () => {
    try {
      await magic.wallet.showUI();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAccountAddress = useCallback(async () => {
    const defaultValue = '';
    if (!web3Provider) {
      return defaultValue;
    }

    try {
      return (await web3Provider.getSigner()).getAddress();
    } catch (ex) {
      return defaultValue;
    }
  }, [web3Provider]);

  const init = useCallback(async () => {
    const [isLoggedIn, providerResult, connectionType] = await Promise.all([
      magic.user.isLoggedIn(),
      magic.wallet.getProvider(),
      magic.wallet.getInfo(),
    ]);
    setIsUserConnected(isLoggedIn);
    setMagicLinkProvider(providerResult);
    setWalletConnectionType(connectionType);

    getAccountAddress().then((address: string) => {
      setWalletAddress(address);
    });
  }, [getAccountAddress]);

  useEffect(() => {
    init();
  }, [init]);

  const value: Web3ContextType = useMemo(
    () => ({
      isUserConnected,
      magicLinkProvider,
      onConnect,
      onDisconnect,
      manageWallet,
      walletAddress,
      walletConnectionType,
      networkTokenBalance,
      oceanTokenBalance,
      networkTokenBalanceFormatted,
      oceanTokenBalanceFormatted,
      loadNetworkTokenBalance,
      loadOceanTokenBalance,
    }),
    [
      isUserConnected,
      magicLinkProvider,
      onConnect,
      onDisconnect,
      manageWallet,
      walletAddress,
      walletConnectionType,
      networkTokenBalance,
      oceanTokenBalance,
      networkTokenBalanceFormatted,
      oceanTokenBalanceFormatted,
      loadNetworkTokenBalance,
      loadOceanTokenBalance,
    ]
  );

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};
