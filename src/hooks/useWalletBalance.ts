import { useCallback, useEffect, useMemo, useState } from 'react';
import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';

import { formatNumber } from '../utils/format';
import erc20Abi from '../abi/erc20-abi.json';
import config from '../../config';

type useWalletBalanceProps = {
  provider: ethers.providers.Web3Provider | undefined;
};

export default function useWalletBallace({ provider }: useWalletBalanceProps) {
  const {
    oceanNetwork: { contract: oceanContractAddress, networkDecimals },
  } = config;

  const [networkTokenBalance, setNetworkTokenBalance] = useState(
    new BigNumber(0)
  );
  const [oceanTokenBalance, setOceanTokenBalance] = useState(new BigNumber(0));

  const networkTokenBalanceFormatted = useMemo(
    () => formatNumber(networkTokenBalance, 4),
    [networkTokenBalance]
  );
  const oceanTokenBalanceFormatted = useMemo(
    () => formatNumber(oceanTokenBalance, 4),
    [oceanTokenBalance]
  );

  const ethTokenFactor = useMemo(
    () => new BigNumber(10).pow(networkDecimals),
    [networkDecimals]
  );
  const oceanTokenFactor = useMemo(
    () => new BigNumber(10).pow(networkDecimals),
    [networkDecimals]
  );

  const getOceanContract = useCallback(() => {
    return new ethers.Contract(oceanContractAddress, erc20Abi, provider);
  }, [oceanContractAddress, provider]);

  const getNetworkBalance = useCallback(async () => {
    const defaultValue = new BigNumber(0);
    if (!provider) {
      return defaultValue;
    }

    try {
      const address = await provider.getSigner().getAddress();
      const balance: ethers.BigNumber = await provider.getBalance(address);
      const networkTokenBalance = new BigNumber(balance.toString());
      return networkTokenBalance.div(ethTokenFactor);
    } catch (ex) {
      return defaultValue;
    }
  }, [ethTokenFactor, provider]);

  const getOceanBalance = useCallback(async () => {
    const defaultValue = new BigNumber(0);
    if (!provider) {
      return defaultValue;
    }

    try {
      const contract = getOceanContract();
      const address = await (provider as ethers.providers.Web3Provider)
        .getSigner()
        .getAddress();
      const balance: ethers.BigNumber = await contract.balanceOf(address);
      const oceanBalanceBn = new BigNumber(balance.toString());
      return oceanBalanceBn.div(oceanTokenFactor);
    } catch (ex) {
      return defaultValue;
    }
  }, [getOceanContract, oceanTokenFactor, provider]);

  const loadNetworkTokenBalance = useCallback(async () => {
    if (provider) {
      setNetworkTokenBalance(await getNetworkBalance());
    }
  }, [getNetworkBalance, provider]);

  const loadOceanTokenBalance = useCallback(async () => {
    if (provider) {
      setOceanTokenBalance(await getOceanBalance());
    }
  }, [getOceanBalance, provider]);

  useEffect(() => {
    loadNetworkTokenBalance().then();
    loadOceanTokenBalance().then();
  }, [loadNetworkTokenBalance, loadOceanTokenBalance]);

  return {
    networkTokenBalance,
    oceanTokenBalance,

    networkTokenBalanceFormatted,
    oceanTokenBalanceFormatted,

    loadNetworkTokenBalance,
    loadOceanTokenBalance,
  };
}
