import { Attribution } from 'ox/erc8021';
import {
  createWalletClient,
  type Capabilities,
  type Chain,
  type Hex,
  type Transport,
  type WalletClient,
  type WalletClientConfig,
} from 'viem';

const DEFAULT_BUILDER_CODE = 'bc_0ecex30k';

type AttributableTx = {
  data?: Hex;
};

type AttributableCall = AttributableTx & {
  dataSuffix?: Hex;
};

function getConfiguredBuilderCode() {
  const code = process.env.NEXT_PUBLIC_BUILDER_CODE;
  if (typeof code === 'string' && code.trim().length > 0) {
    return code.trim();
  }
  return DEFAULT_BUILDER_CODE;
}

export const BUILDER_CODE = getConfiguredBuilderCode();
export const BUILDER_DATA_SUFFIX = Attribution.toDataSuffix({
  codes: [BUILDER_CODE],
}) as Hex;

export function getBuilderCode(): string {
  return BUILDER_CODE;
}

export function getBuilderCapabilities(): { capabilities: Capabilities } {
  return {
    capabilities: {
      dataSuffix: { value: BUILDER_DATA_SUFFIX },
    },
  };
}

export function appendDataSuffix(data: Hex = '0x', suffix: Hex = BUILDER_DATA_SUFFIX): Hex {
  return `${data}${suffix.replace(/^0x/, '')}` as Hex;
}

function hasBuilderCode(data: Hex) {
  const attribution = Attribution.fromData(data);
  return Boolean(attribution?.codes.includes(BUILDER_CODE));
}

export function withBuilderCode(txData: Hex = '0x'): Hex {
  // Base Builder Codes are ERC-8021 transaction-layer calldata suffixes.
  // If a transaction is mined without this suffix, attribution is permanently lost.
  if (hasBuilderCode(txData)) return txData;
  return appendDataSuffix(txData, BUILDER_DATA_SUFFIX);
}

export function withBuilderCodeTransaction<T extends AttributableTx>(
  tx: T,
): T & { data: Hex } {
  return {
    ...tx,
    data: withBuilderCode(tx.data),
  };
}

export function withBuilderCodeCall<T extends AttributableCall>(
  call: T,
  walletHandlesDataSuffix: boolean,
): T {
  if (walletHandlesDataSuffix) {
    return {
      ...call,
      dataSuffix: call.dataSuffix ?? BUILDER_DATA_SUFFIX,
    };
  }

  return withBuilderCodeTransaction(call);
}

export function withBuilderCodeCalls<T extends readonly unknown[]>(
  calls: T,
  walletHandlesDataSuffix: boolean,
) {
  return calls.map((call) =>
    withBuilderCodeCall(call as AttributableCall, walletHandlesDataSuffix),
  ) as unknown as T;
}

export function withBuilderCodeCapabilities<T extends { capabilities?: Record<string, unknown> }>(
  tx: T,
  walletHandlesDataSuffix: boolean,
): T {
  if (!walletHandlesDataSuffix) return tx;

  return {
    ...tx,
    capabilities: {
      ...tx.capabilities,
      dataSuffix: { value: BUILDER_DATA_SUFFIX },
    },
  };
}

export function withBuilderCodeWriteContract<T extends { dataSuffix?: Hex }>(tx: T): T {
  return {
    dataSuffix: BUILDER_DATA_SUFFIX,
    ...tx,
  };
}

export function createBuilderWalletClient<
  transport extends Transport,
  chain extends Chain | undefined = undefined,
>(
  parameters: WalletClientConfig<transport, chain> & { dataSuffix?: Hex },
): WalletClient<transport, chain> {
  const client = createWalletClient({
    ...parameters,
    // Keep attribution in wallet-client construction so future sends do not
    // depend on developers remembering a per-transaction Builder Code field.
    dataSuffix: parameters.dataSuffix ?? BUILDER_DATA_SUFFIX,
  } as WalletClientConfig<transport, chain> & { dataSuffix: Hex });
  const sendTransaction = client.sendTransaction.bind(client);
  const writeContract = client.writeContract.bind(client);

  return Object.assign(client, {
    sendTransaction: (tx: Parameters<typeof client.sendTransaction>[0]) =>
      sendTransaction(withBuilderCodeTransaction(tx)),
    writeContract: (tx: Parameters<typeof client.writeContract>[0]) =>
      writeContract(withBuilderCodeWriteContract(tx)),
  });
}
