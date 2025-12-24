'use client';

import { useEffect, useMemo, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { createMiniAppWagmiConfig, createWebWagmiConfig } from '~/lib/wagmi';

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  const [isMiniApp, setIsMiniApp] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkMiniApp = async () => {
      try {
        const inMiniApp = await sdk.isInMiniApp({ timeoutMs: 100 });
        if (!mounted) return;
        setIsMiniApp(inMiniApp);
        if (inMiniApp) {
          sdk.actions.ready();
        }
      } catch {
        if (!mounted) return;
        setIsMiniApp(false);
      }
    };

    checkMiniApp();

    return () => {
      mounted = false;
    };
  }, []);

  const config = useMemo(
    () => (isMiniApp ? createMiniAppWagmiConfig() : createWebWagmiConfig()),
    [isMiniApp]
  );
  return (
    <WagmiProvider key={isMiniApp ? 'mini' : 'web'} config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
