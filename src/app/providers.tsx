'use client';

import { useEffect, useMemo, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { createMiniAppWagmiConfig, createWebWagmiConfig } from '~/lib/wagmi';

async function isInMiniAppWithTimeout(ms: number) {
  return await Promise.race([
    sdk.isInMiniApp(),
    new Promise<boolean>((resolve) => setTimeout(() => resolve(false), ms)),
  ]);
}

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  const [isMiniApp, setIsMiniApp] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;

    const checkMiniApp = async () => {
      try {
        const inMiniApp = await isInMiniAppWithTimeout(100);
        if (!mounted) return;
        setIsMiniApp(inMiniApp);
        if (inMiniApp) {
          await sdk.actions.ready();
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

  const config = useMemo(() => {
    if (isMiniApp === null) {
      return null;
    }
    return isMiniApp ? createMiniAppWagmiConfig() : createWebWagmiConfig();
  }, [isMiniApp]);

  if (!config) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  }

  return (
    <WagmiProvider key={isMiniApp ? 'mini' : 'web'} config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
