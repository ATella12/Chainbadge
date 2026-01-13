'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  useAccount,
  useChainId,
  useConnect,
  useSwitchChain,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';
import { base } from 'wagmi/chains';
import { useIsMiniApp } from '~/lib/miniapp-context';
import { MENU_TX_VALUE, menuContracts, type MenuAction } from '~/lib/menuContracts';

const ACTION_LABELS: Record<MenuAction, string> = {
  think: 'Think',
  answer: 'Answer',
  stop: 'Stop',
};

const ACTION_ORDER: MenuAction[] = ['think', 'answer', 'stop'];

export default function MenuActions() {
  const isMiniApp = useIsMiniApp();
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const {
    connectors,
    connect,
    isPending: isConnecting,
    error: connectError,
  } = useConnect();
  const { switchChainAsync, isPending: isSwitching } = useSwitchChain();
  const { writeContractAsync, isPending: isWriting } = useWriteContract();

  const [activeAction, setActiveAction] = useState<MenuAction | null>(null);
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
  const [status, setStatus] = useState<'idle' | 'confirm' | 'submitted' | 'confirmed'>('idle');
  const [error, setError] = useState<string | null>(null);

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    chainId: base.id,
    hash: txHash ?? undefined,
    query: { enabled: Boolean(txHash) },
  });

  useEffect(() => {
    if (isSuccess && txHash) {
      setStatus('confirmed');
    }
  }, [isSuccess, txHash]);

  const farcasterConnector = useMemo(() => {
    return connectors.find((connector) =>
      connector.id.toLowerCase().includes('farcaster')
    );
  }, [connectors]);

  const displayConnectors = useMemo(() => {
    return connectors.filter(
      (connector) => !connector.id.toLowerCase().includes('farcaster')
    );
  }, [connectors]);

  const isWrongNetwork = isConnected && chainId !== base.id;
  const isBusy = isWriting || isConfirming || isSwitching;

  const handleAction = async (action: MenuAction) => {
    if (!isConnected || isBusy) {
      return;
    }

    setError(null);
    setActiveAction(action);
    setStatus('confirm');

    try {
      if (chainId !== base.id) {
        await switchChainAsync({ chainId: base.id });
      }
      const contract = menuContracts[action];
      const hash = await writeContractAsync({
        chainId: base.id,
        address: contract.address,
        abi: contract.abi,
        functionName: contract.functionName,
        value: MENU_TX_VALUE,
      });
      setTxHash(hash);
      setStatus('submitted');
    } catch (err) {
      setStatus('idle');
      setTxHash(null);
      setError(err instanceof Error ? err.message : 'Failed to send transaction.');
    }
  };

  const statusLabel = activeAction ? ACTION_LABELS[activeAction] : 'Transaction';
  const statusText =
    status === 'confirm'
      ? `Confirm ${statusLabel} in your wallet.`
      : status === 'submitted'
        ? `${statusLabel} submitted.`
        : status === 'confirmed'
          ? `${statusLabel} confirmed.`
          : null;

  return (
    <div className="mt-4 grid gap-3">
      {ACTION_ORDER.map((action) => (
        <button
          key={action}
          type="button"
          onClick={() => handleAction(action)}
          disabled={!isConnected || isBusy}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:opacity-60"
        >
          {ACTION_LABELS[action]}
        </button>
      ))}

      {!isConnected && (
        <div className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-xs text-slate-600">
          <p className="font-semibold text-slate-700">Connect a wallet to continue.</p>
          <div className="mt-3 space-y-2">
            {isMiniApp ? (
              <button
                type="button"
                onClick={() => {
                  if (farcasterConnector) {
                    connect({ connector: farcasterConnector });
                  }
                }}
                disabled={isConnecting || !farcasterConnector}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 disabled:opacity-60"
              >
                Connect wallet
              </button>
            ) : (
              displayConnectors.map((connector) => (
                <button
                  key={connector.id}
                  type="button"
                  onClick={() => connect({ connector })}
                  disabled={isConnecting}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 disabled:opacity-60"
                >
                  Connect with {connector.name}
                </button>
              ))
            )}
            {isMiniApp && !farcasterConnector && (
              <p className="text-xs text-rose-600">
                Farcaster wallet connector is unavailable.
              </p>
            )}
            {connectError && (
              <p className="text-xs text-rose-600">{connectError.message}</p>
            )}
          </div>
        </div>
      )}

      {isConnected && isWrongNetwork && (
        <button
          type="button"
          onClick={() => switchChainAsync({ chainId: base.id })}
          disabled={isSwitching}
          className="w-full rounded-xl border border-slate-900 bg-slate-900 px-4 py-3 text-xs font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
        >
          Switch to Base Mainnet
        </button>
      )}

      {(statusText || error || txHash) && (
        <div className="text-xs text-slate-600">
          {statusText && <p>{statusText}</p>}
          {txHash && (
            <p className="mt-1">
              Tx:{' '}
              <a
                className="underline"
                href={`https://basescan.org/tx/${txHash}`}
                target="_blank"
                rel="noreferrer"
              >
                View on Basescan
              </a>
            </p>
          )}
          {error && <p className="mt-1 text-rose-600">{error}</p>}
        </div>
      )}
    </div>
  );
}
