export type ConfigType = {
  DBS_URL: string;
  DBS_ACCOUNT: string;
  INFURA_ID: string;
  WALLET_CONNECT_PROJECT_ID: string;
  magicApiKey: string;
  githubRepo: string;
};

const config: ConfigType = {
  DBS_URL: process.env.DBS_URL || 'https://dbs.oceanprotocol.com',
  DBS_ACCOUNT:
    process.env.DBS_ACCOUNT || '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d',
  INFURA_ID: process.env.INFURA_ID || '',
  WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID || '',
  magicApiKey: process.env.MAGIC_API_KEY || 'pk_live_3EA01B119E287F11',
  githubRepo: 'https://github.com/oceanprotocol/demo-dbs-ui',
};

export default config;
