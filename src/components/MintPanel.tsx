'use client';

import { useMemo } from 'react';
import {
  useAccount,
  useConnect,
  useSwitchChain,
  useWriteContract,
  useWaitForTransactionReceipt,
  useChainId,
} from 'wagmi';
import { base } from 'wagmi/chains';
import { chainCheckBadgeAbi } from '~/abi/chainCheckBadgeAbi';
import { badgeAddress } from '~/lib/badge';

const basescanBase = 'https://basescan.org/tx/';

type MintPanelProps = {
  isMiniApp: boolean;
};

export default function MintPanel({ isMiniApp }: MintPanelProps) {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { connectors, connect, isPending: isConnecting, error: connectError } =
    useConnect();
  const { switchChainAsync, isPending: isSwitching } = useSwitchChain();
  const {
    writeContractAsync,
    data: txHash,
    isPending: isWriting,
    error: writeError,
  } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const isWrongNetwork = isConnected && chainId !== base.id;
  const displayConnectors = useMemo(() => {
    return connectors.filter((connector) => {
      if (!isMiniApp && connector.id.toLowerCase().includes('farcaster')) {
        return false;
      }
      return true;
    });
  }, [connectors, isMiniApp]);

  const handleMint = async () => {
    if (!badgeAddress || !isConnected) {
      return;
    }
    if (chainId !== base.id) {
      await switchChainAsync({ chainId: base.id });
    }
    await writeContractAsync({
      address: badgeAddress,
      abi: chainCheckBadgeAbi,
      functionName: 'mint',
    });
  };

  if (!badgeAddress) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800">
        Set NEXT_PUBLIC_BADGE_CONTRACT_ADDRESS to enable minting.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white/90 p-4">
      <p className="text-sm font-semibold text-slate-900">Mint your Base badge</p>
      <p className="mt-1 text-xs text-slate-500">
        Free mint. You will still pay Base gas fees.
      </p>

      {!isConnected && (
        <div className="mt-4 space-y-2">
          {displayConnectors.map((connector) => (
            <button
              key={connector.id}
              type="button"
              onClick={() => connect({ connector })}
              disabled={isConnecting}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 disabled:opacity-60"
            >
              Connect with {connector.name}
            </button>
          ))}
          {connectError && (
            <p className="text-xs text-rose-600">{connectError.message}</p>
          )}
        </div>
      )}

      {isConnected && (
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            Connected: {address}
          </div>

          {isWrongNetwork && (
            <button
              type="button"
              onClick={() => switchChainAsync({ chainId: base.id })}
              disabled={isSwitching}
              className="w-full rounded-lg border border-slate-900 bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
            >
              Switch to Base Mainnet
            </button>
          )}

          <button
            type="button"
            onClick={handleMint}
            disabled={isWriting || isConfirming || isWrongNetwork}
            className="w-full rounded-lg border border-emerald-500 bg-emerald-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-60"
          >
            {isWriting || isConfirming ? 'Minting...' : 'Mint Badge'}
          </button>

          {writeError && (
            <p className="text-xs text-rose-600">{writeError.message}</p>
          )}

          {txHash && (
            <p className="text-xs text-slate-600">
              Tx: <a className="underline" href={`${basescanBase}${txHash}`} target="_blank" rel="noreferrer">View on Basescan</a>
            </p>
          )}

          {isSuccess && (
            <p className="text-xs font-semibold text-emerald-600">Minted!</p>
          )}
        </div>
      )}
    </div>
  );
}
