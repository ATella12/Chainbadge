import { useCallback } from 'react';
import { useSendCalls } from 'wagmi';
import {
  sendCallsWithBuilderCode,
  withBuilderCodeCapabilities,
} from '~/lib/builderAttribution';

type SendCallsAsync = ReturnType<typeof useSendCalls>['sendCallsAsync'];

export function useBuilderSendCalls(walletHandlesDataSuffix: boolean) {
  const sendCalls = useSendCalls();
  const { sendCallsAsync } = sendCalls;

  const sendBuilderCallsAsync = useCallback<SendCallsAsync>(
    (variables, options) => {
      // ERC-8021 attribution must be applied before wallet submission.
      // Missing the transaction suffix means permanent attribution loss.
      const attributedVariables = withBuilderCodeCapabilities(
        {
          ...variables,
          calls: sendCallsWithBuilderCode(variables.calls, walletHandlesDataSuffix),
        },
        walletHandlesDataSuffix,
      ) as typeof variables;

      return sendCallsAsync(attributedVariables as never, options as never);
    },
    [sendCallsAsync, walletHandlesDataSuffix],
  );

  return {
    ...sendCalls,
    sendCallsAsync: sendBuilderCallsAsync,
  };
}
