export type ConfigType = {
  DBS_URL: string;
  DBS_ACCOUNT: string;
  INFURA_ID: string;
  WALLET_CONNECT_PROJECT_ID: string;
  magicApiKey: string;
  githubRepo: string;
  chainId: number;
  rpcUrl: string;
};

const config: ConfigType = {
  DBS_URL: process.env.NEXT_PUBLIC_DBS_URL || 'https://dbs.oceanprotocol.com',
  DBS_ACCOUNT:
    process.env.NEXT_PUBLIC_DBS_ACCOUNT ||
    '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d',
  INFURA_ID: process.env.NEXT_PUBLIC_INFURA_ID || '',
  WALLET_CONNECT_PROJECT_ID:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
  magicApiKey:
    process.env.NEXT_PUBLIC_MAGIC_API_KEY || 'pk_live_3EA01B119E287F11',
  githubRepo: 'https://github.com/oceanprotocol/demo-dbs-ui',
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '', 10) || 80001,
  rpcUrl:
    process.env.NEXT_PUBLIC_RPC_URL || 'https://rpc-mumbai.maticvigil.com/',
};

export default config;
