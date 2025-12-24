import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { farcasterMiniApp } from '@farcaster/miniapp-wagmi-connector';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';
import { APP_NAME, APP_URL } from '~/lib/constants';

const baseRpcUrl =
  process.env.NEXT_PUBLIC_BASE_RPC_URL || 'https://mainnet.base.org';

export function createMiniAppWagmiConfig() {
  return createConfig({
    chains: [base],
    transports: {
      [base.id]: http(baseRpcUrl),
    },
    ssr: true,
    connectors: [farcasterMiniApp()],
  });
}

export function createWebWagmiConfig() {
  const wcProjectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? '';

  const connectors = [
    injected(),
    ...(wcProjectId
      ? [
          walletConnect({
            projectId: String(wcProjectId),
            metadata: {
              name: APP_NAME,
              description: APP_NAME,
              url: APP_URL,
            },
            showQrModal: true,
          }),
        ]
      : []),
    coinbaseWallet({ appName: APP_NAME }),
  ];

  return createConfig({
    chains: [base],
    transports: {
      [base.id]: http(baseRpcUrl),
    },
    ssr: true,
    connectors,
  });
}
