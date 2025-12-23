# ChainCheck Quiz

A Farcaster Mini App and open web quiz that tests true/false knowledge across Bitcoin, Ethereum, BSC, Base, and Solana. Score 6 or higher to mint a Base mainnet badge.

## Stack
- Next.js + TypeScript + Tailwind
- Farcaster Mini App SDK
- Wagmi + viem for wallet connectivity
- Base mainnet minting

## Getting Started

```bash
npm install
npm run dev
```

Copy the env file and update values:

```bash
cp .env.example .env.local
```

Required env vars:
- `NEXT_PUBLIC_URL` - your deployed domain (or `http://localhost:3000` for dev)
- `NEXT_PUBLIC_BADGE_CONTRACT_ADDRESS` - deployed badge contract
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` - WalletConnect project id

Optional:
- `NEXT_PUBLIC_BASE_RPC_URL` - Base RPC endpoint
- `NEXT_PUBLIC_WEBHOOK_URL` - webhook URL for Farcaster manifest
- `NEXT_PUBLIC_RETURN_URL` - optional back button URL

## Quiz Flow
- Choose a blockchain and difficulty.
- Answer 10 true/false questions.
- See instant feedback after each answer.
- Score 6 or higher to unlock minting.

## Wallet + Minting
- In Farcaster clients, the app prefers the Farcaster wallet connector.
- On the open web, you can use injected, WalletConnect, or Coinbase Wallet.
- Minting happens on Base mainnet (chain id 8453).

## Contract Deployment
See `contracts/README.md` for deployment steps. After deploying, set:

```
NEXT_PUBLIC_BADGE_CONTRACT_ADDRESS=0x...
```

## Farcaster Manifest
The manifest is served at `/.well-known/farcaster.json`.

1) Enable Developer Mode in Warpcast.
2) Generate the `accountAssociation` payload.
3) Replace placeholders in `src/lib/constants.ts`:

```
APP_ACCOUNT_ASSOCIATION = {
  header: '...'
  payload: '...'
  signature: '...'
}
```

4) Deploy your app and verify the manifest:

```
https://your-domain/.well-known/farcaster.json
```

## Deployment (Vercel)
- Set Node.js version to 22.11.0 or newer.
- Add the required env vars in the Vercel project settings.
- Build command: `npm run build`
- Start command: `npm run start`

## Tests

```bash
npm run test
```

## Notes
- The app calls `sdk.actions.ready()` when the Farcaster SDK is available.
- Open web users can still complete the quiz and mint with standard wallets.
