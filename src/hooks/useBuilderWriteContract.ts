import { useCallback } from 'react';
import { useWriteContract } from 'wagmi';
import { withBuilderCodeWriteContract } from '~/lib/builderAttribution';

type WriteContractAsync = ReturnType<typeof useWriteContract>['writeContractAsync'];

export function useBuilderWriteContract() {
  const writeContract = useWriteContract();
  const { writeContractAsync } = writeContract;

  const writeBuilderContractAsync = useCallback<WriteContractAsync>(
    (variables, options) => {
      // viem appends dataSuffix to encoded contract calldata before sending,
      // keeping Builder Code attribution out of individual call sites.
      return writeContractAsync(
        withBuilderCodeWriteContract(variables) as never,
        options as never,
      );
    },
    [writeContractAsync],
  );

  return {
    ...writeContract,
    writeContractAsync: writeBuilderContractAsync,
  };
}
