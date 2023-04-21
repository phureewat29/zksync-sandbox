# Sandbox

My personal sandbox to explore zkSync ecosystem

## Setup

Install dependencies
```
yarn install
```

Compile the smart contract!
```
yarn hardhat compile
```

1. Deploy basic contract (Greeter)
```
yarn hardhat deploy-zksync
```

2️. Deploy ERC721 contract (Corgi)

Testnet
```
yarn hardhat deploy-zksync --script deploy/deploy-erc721.ts --network zkSyncTestnet
```

Mainnet
```
yarn hardhat deploy-zksync --script deploy/deploy-erc721.ts --network zkSyncMainnet
```

3. Verify contract
4.
```
yarn hardhat verify "<CONTRACT ADDRESS>" 'Hi there!' --network zkSyncMainnet
```