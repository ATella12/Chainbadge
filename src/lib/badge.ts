export const badgeAbi = [
  {
    type: 'function',
    name: 'mint',
    stateMutability: 'nonpayable',
    inputs: [],
    outputs: [{ name: 'tokenId', type: 'uint256' }],
  },
] as const;

export const badgeAddress = process.env
  .NEXT_PUBLIC_BADGE_CONTRACT_ADDRESS as `0x${string}` | undefined;
