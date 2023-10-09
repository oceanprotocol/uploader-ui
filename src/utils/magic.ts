import { Magic } from 'magic-sdk';
import config from '../../config';

const customNodeOptions = {
  rpcUrl: config.rpcUrl,
  chainId: config.chainId,
};

const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY || '', {
  network: customNodeOptions,
});

export default magic;
