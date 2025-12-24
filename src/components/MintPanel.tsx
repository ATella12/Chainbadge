'use client';

import { useMemo } from 'react';
import { encodeFunctionData } from 'viem';
import {
  useAccount,
  useConnect,
  useCapabilities,
  useCallsStatus,
  useSendCalls,
  useSwitchChain,
  useWriteContract,
  useWaitForTransactionReceipt,
  useChainId,
} from 'wagmi';
import { base } from 'wagmi/chains';
import { chainCheckBadgeAbi } from '~/abi/chainCheckBadgeAbi';
import { badgeAddress } from '~/lib/badge';
import {
  getBuilderCode,
  withBuilderCodeCapabilities,
} from '~/lib/baseAttribution';
import { useIsMiniApp } from '~/lib/miniapp-context';

const basescanBase = 'https://basescan.org/tx/';

export default function MintPanel() {
  const builderCode = getBuilderCode();
  const isMiniApp = useIsMiniApp();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { connectors, connect, isPending: isConnecting, error: connectError } =
    useConnect();
  const { data: capabilities } = useCapabilities({ chainId: base.id });
  const { switchChainAsync, isPending: isSwitching } = useSwitchChain();
  const {
    writeContractAsync,
    data: txHash,
    isPending: isWriting,
    error: writeError,
  } = useWriteContract();
  const {
    sendCallsAsync,
    data: callsId,
    isPending: isSendingCalls,
    error: sendCallsError,
  } = useSendCalls();
  const callsStatusQuery = useCallsStatus({
    id: (callsId?.id as unknown) as `0x${string}`,
    query: { enabled: Boolean(callsId?.id), refetchInterval: 1500 },
  });
  const callsStatus = callsStatusQuery.data;
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const supportsSendCalls =
    capabilities?.atomic?.status === 'supported' ||
    capabilities?.atomic?.status === 'ready';

  const isWrongNetwork = isConnected && chainId !== base.id;
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

  const handleMint = async () => {
    if (!badgeAddress || !isConnected) {
      return;
    }
    if (chainId !== base.id) {
      await switchChainAsync({ chainId: base.id });
    }
    if (supportsSendCalls) {
      const data = encodeFunctionData({
        abi: chainCheckBadgeAbi,
        functionName: 'mint',
      });
      try {
        await sendCallsAsync({
          calls: [{ to: badgeAddress, data, value: 0n }],
          chainId: base.id,
          ...withBuilderCodeCapabilities(builderCode),
        });
        return;
      } catch {
        // Fallback to a direct write if sendCalls isn't supported end-to-end.
      }
    }
    await writeContractAsync({
      address: badgeAddress,
      abi: chainCheckBadgeAbi,
      functionName: 'mint',
      ...withBuilderCodeCapabilities(builderCode),
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

      {!isConnected && (
        <div className="mt-4 space-y-2">
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
            disabled={
              isWriting ||
              isConfirming ||
              isSendingCalls ||
              callsStatus?.status === 'pending' ||
              isWrongNetwork
            }
            className="w-full rounded-lg border border-emerald-500 bg-emerald-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-60"
          >
            {isWriting || isConfirming || isSendingCalls
              ? 'Minting...'
              : supportsSendCalls
                ? 'Mint (Attributed)'
                : 'Mint Badge'}
          </button>

          {(sendCallsError || writeError) && (
            <p className="text-xs text-rose-600">
              {(sendCallsError ?? writeError)?.message}
            </p>
          )}

          {callsStatus?.receipts?.[0]?.transactionHash && (
            <p className="text-xs text-slate-600">
              Tx:{' '}
              <a
                className="underline"
                href={`${basescanBase}${callsStatus.receipts[0].transactionHash}`}
                target="_blank"
                rel="noreferrer"
              >
                View on Basescan
              </a>
            </p>
          )}

          {txHash && !callsStatus?.receipts?.[0]?.transactionHash && (
            <p className="text-xs text-slate-600">
              Tx: <a className="underline" href={`${basescanBase}${txHash}`} target="_blank" rel="noreferrer">View on Basescan</a>
            </p>
          )}

          {(isSuccess || callsStatus?.status === 'success') && (
            <p className="text-xs font-semibold text-emerald-600">Minted!</p>
          )}
        </div>
      )}
    </div>
  );
}
