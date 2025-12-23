# ChainCheck Badge Contract

A simple ERC-721 badge contract with a one-per-address guard and an optional max supply.

## Setup

```bash
cd contracts
npm install
cp .env.example .env
```

Update `.env` with a Base RPC URL and a funded deployer key.

## Deploy

Base mainnet:

```bash
npm run deploy:base
```

Base Sepolia (optional for testing):

```bash
npm run deploy:base-sepolia
```

The deploy script prints the contract address. Copy it into the app env as:

```
NEXT_PUBLIC_BADGE_CONTRACT_ADDRESS=0x...
```

## Notes
- `MAX_SUPPLY` controls total badge supply (default 1000).
- Each address can mint once using `mint()`.
- Mint is free but users pay gas.
