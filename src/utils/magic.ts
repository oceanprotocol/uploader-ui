import { Magic } from 'magic-sdk';
import config from '../../config';

const customNodeOptions = {
  rpcUrl: config.rpcUrl,
  chainId: config.chainId,
};

const magic = new Magic(config.magicApiKey, {
  network: customNodeOptions,
});

export default magic;
