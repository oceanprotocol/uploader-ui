[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">Demo Ocean Uploader UI (NextJS)</h1>

**Table of Contents**

- [🏄 Get Started](#-get-started)
- [🚀 Usage](#-usage)
- [🛳 Production](#-production)
- [💖 Contributing](#-contributing)
- [🏛 License](#-license)

## 🏄 Get Started

The project uses NextJS + TypeScript + CSS modules and will connect to Ocean remote components by default.

This is an example Demo for [Uploader UI Library](https://github.com/oceanprotocol/uploader-ui-lib) which uses the Ocean Decentralized Backend storage.

Prerequisites:

- [Node.js](https://nodejs.org/en/) (required). Check the [.nvmrc](.nvmrc) file to make sure you are using the correct version of Node.js.
- [nvm](https://github.com/nvm-sh/nvm) (recommended). This is the recommend way to manage Node.js versions.
- [Git](https://git-scm.com/) is required to follow the instructions below.

To start local development:

```bash
git clone git@github.com:oceanprotocol/uploader-ui.git
cd uploader-ui

# when using nvm to manage Node.js versions
nvm use 20

npm install

npm run dev
# to build the project and run it in dev mode.
```

Run `npm run build` from the root folder to build the project.

# if you encounter this error: Error: error:0308010C:digital envelope routines::unsupported
Run `export NODE_OPTIONS=--openssl-legacy-provider` before building.

## 🚀 Usage

Import and use the Uploader UI components in your app:

```bash
import '@oceanprotocol/uploader-ui-lib/dist/index.es.css';
const Uploader = dynamic(() => import('@oceanprotocol/uploader-ui-lib').then((module) => module.Uploader), { ssr: false });

<Uploader
   uploader_url={process.env.UPLOADER_URL || 'https://api.uploader.oceanprotocol.com/'}
   uploader_account={process.env.UPLOADER_ACCOUNT || '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d'}
   infuraId={process.env.INFURA_ID || ''}
   walletConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID || ''}
/> 
```

To enable the functionality of the Uploader, the following setting variables need to be set:

| Variable                | Description                                           |
|-------------------------|-------------------------------------------------------|
| `uploader_url`               | URL for Uploader service communication                    |
| `uploader_account`           | Account info for Uploader authentication                  |
| `infuraId`              | Project ID for Ethereum access via Infura            |
| `walletConnectProjectId`| Project ID for WalletConnect integration             |

These variables are needed to interact with the Uploader, provide authentication credentials, access the Ethereum network through Infura, and enable integration with WalletConnect. 

## 🛳 Production

To create a production build, run from the root of the project:

```bash
npm run build
```

## 💖 Contributing

We welcome contributions in form of bug reports, feature requests, code changes, or documentation improvements. Have a look at our contribution documentation for instructions and workflows:

- [**Ways to Contribute →**](https://docs.oceanprotocol.com/contribute)
- [Code of Conduct →](https://docs.oceanprotocol.com/contribute/code-of-conduct)
- [Reporting Vulnerabilities →](https://docs.oceanprotocol.com/contribute#report-vulnerabilities)

## 🏛 License

```text
Copyright 2023 Ocean Protocol Foundation Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
