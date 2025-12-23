export const APP_URL: string =
  process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

export const APP_NAME: string = 'ChainCheck Quiz';
export const APP_DESCRIPTION: string =
  'A true/false quiz across Bitcoin, Ethereum, BSC, Base, and Solana.';
export const APP_PRIMARY_CATEGORY: string = 'games';
export const APP_TAGS: string[] = ['quiz', 'blockchain', 'farcaster'];

export const APP_ICON_URL: string = `${APP_URL}/icon.png`;
export const APP_OG_IMAGE_URL: string = `${APP_URL}/og.svg`;
export const APP_SPLASH_URL: string = `${APP_URL}/splash.png`;
export const APP_SPLASH_BACKGROUND_COLOR: string = '#f6efe7';

export const APP_ACCOUNT_ASSOCIATION = {
  header: 'REPLACE_ME',
  payload: 'REPLACE_ME',
  signature: 'REPLACE_ME',
};

export const APP_BUTTON_TEXT: string = 'Start Quiz';

export const APP_WEBHOOK_URL: string | undefined =
  process.env.NEXT_PUBLIC_WEBHOOK_URL;

export const APP_REQUIRED_CHAINS: string[] = ['eip155:8453'];

export const RETURN_URL: string | undefined =
  process.env.NEXT_PUBLIC_RETURN_URL;
