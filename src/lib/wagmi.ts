import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { farcasterFrame } from '@farcaster/miniapp-wagmi-connector';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';
import { APP_NAME, APP_URL } from '~/lib/constants';

const baseRpcUrl =
  process.env.NEXT_PUBLIC_BASE_RPC_URL || 'https://mainnet.base.org';

export function createWagmiConfig() {
  const walletConnectProjectId =
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

  const connectors = [
    farcasterFrame(),
    injected({
      shimDisconnect: true,
    }),
  ];

  if (walletConnectProjectId) {
    connectors.push(
      walletConnect({
        projectId: walletConnectProjectId,
        metadata: {
          name: APP_NAME,
          description: 'True/False blockchain quiz with badge minting',
          url: APP_URL,
          icons: [`${APP_URL}/icon.png`],
        },
        showQrModal: true,
      })
    );
  }

  connectors.push(
    coinbaseWallet({
      appName: APP_NAME,
      appLogoUrl: `${APP_URL}/icon.png`,
    })
  );

  return createConfig({
    chains: [base],
    transports: {
      [base.id]: http(baseRpcUrl),
    },
    ssr: true,
    connectors,
  });
}
