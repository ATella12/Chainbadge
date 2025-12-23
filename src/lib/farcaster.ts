import { sdk } from '@farcaster/miniapp-sdk';

export async function initMiniAppSdk(): Promise<boolean> {
  if (typeof window === 'undefined') {
    return false;
  }

  if (!sdk || typeof sdk.actions?.ready !== 'function') {
    return false;
  }

  try {
    await sdk.actions.ready();
    return true;
  } catch {
    return false;
  }
}
