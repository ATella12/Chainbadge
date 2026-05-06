import type { Hex } from 'viem';
import {
  getBuilderCapabilities,
  withBuilderCode as appendBuilderSuffix,
} from './builderAttribution';

export {
  BUILDER_CODE,
  BUILDER_DATA_SUFFIX,
  getBuilderCode,
  withBuilderCode,
} from './builderAttribution';

export function withBuilderCodeCapabilities(_builderCode?: string) {
  return getBuilderCapabilities();
}

export function buildDataSuffix(_builderCode?: string): Hex {
  return getBuilderCapabilities().capabilities.dataSuffix.value as Hex;
}

export function appendBuilderCodeToCalldata(calldata: Hex, _builderCode?: string): Hex {
  return appendBuilderSuffix(calldata);
}
