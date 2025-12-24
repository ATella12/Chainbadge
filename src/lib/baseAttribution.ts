import { concatHex, type Capabilities, type Hex } from 'viem';
import { Attribution } from 'ox/erc8021';

const FALLBACK_BUILDER_CODE = 'bc_0ecex30k';
const BUILDER_CODE =
  process.env.NEXT_PUBLIC_BUILDER_CODE ?? FALLBACK_BUILDER_CODE;

export function getBuilderCode(): string {
  return BUILDER_CODE;
}

export function withBuilderCodeCapabilities(
  builderCode: string
): { capabilities: Capabilities } {
  return {
    capabilities: {
      dataSuffix: Attribution.toDataSuffix({ codes: [builderCode] }),
    },
  };
}

export function buildDataSuffix(code: string): Hex {
  return Attribution.toDataSuffix({ codes: [code] }) as Hex;
}

export function appendBuilderCodeToCalldata(calldata: Hex, code: string): Hex {
  const suffix = buildDataSuffix(code);
  return concatHex([calldata, suffix]);
}
