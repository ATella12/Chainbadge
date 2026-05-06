import { useCallback } from 'react';
import { useSendTransaction } from 'wagmi';
import { withBuilderCodeTransaction } from '~/lib/builderAttribution';

type SendTransactionAsync = ReturnType<typeof useSendTransaction>['sendTransactionAsync'];

export function useBuilderSendTransaction() {
  const sendTransaction = useSendTransaction();
  const { sendTransactionAsync } = sendTransaction;

  const sendBuilderTransactionAsync = useCallback<SendTransactionAsync>(
    (variables, options) => {
      // sendTransaction has no wallet dataSuffix capability negotiation, so
      // append ERC-8021 calldata before submission for fallback compatibility.
      return sendTransactionAsync(
        withBuilderCodeTransaction(variables) as never,
        options as never,
      );
    },
    [sendTransactionAsync],
  );

  return {
    ...sendTransaction,
    sendTransactionAsync: sendBuilderTransactionAsync,
  };
}
