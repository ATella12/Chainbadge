import type { Capabilities } from 'viem';
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
