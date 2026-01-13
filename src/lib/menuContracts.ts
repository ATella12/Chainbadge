import { parseAbi, type Address } from 'viem';

export const MENU_TX_VALUE = 500_000_000_000n;

export const menuContracts = {
  think: {
    address: '0x5c043FC313FaEb1e0d25B96CE07974274bF6d364' as Address,
    abi: parseAbi(['function think() payable']),
    functionName: 'think' as const,
  },
  answer: {
    address: '0x59da986caE793B09504A28535e37a63F2b9937CC' as Address,
    abi: parseAbi(['function answer() payable']),
    functionName: 'answer' as const,
  },
  stop: {
    address: '0x1CA91a913feFD2FbA03E609AEF28178857994dB5' as Address,
    abi: parseAbi(['function stop() payable']),
    functionName: 'stop' as const,
  },
} as const;

export type MenuAction = keyof typeof menuContracts;
