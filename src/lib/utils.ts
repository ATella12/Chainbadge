import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  APP_BUTTON_TEXT,
  APP_NAME,
  APP_PRIMARY_CATEGORY,
  APP_SPLASH_BACKGROUND_COLOR,
  APP_TAGS,
  APP_URL,
  APP_ACCOUNT_ASSOCIATION,
} from './constants';

export type MiniAppManifest = {
  accountAssociation: {
    header: string;
    payload: string;
    signature: string;
  };
  miniapp: {
    version: string;
    name: string;
    subtitle?: string;
    description?: string;
    homeUrl: string;
    iconUrl: string;
    imageUrl: string;
    heroImageUrl?: string;
    buttonTitle: string;
    splashImageUrl: string;
    splashBackgroundColor: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImageUrl?: string;
    screenshotUrls?: string[];
    primaryCategory?: string;
    tags?: string[];
    tagline?: string;
    castShareUrl?: string;
    webhookUrl?: string;
  };
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMiniAppEmbedMetadata(ogImageUrl?: string) {
  const embedImageUrl = ogImageUrl ?? `${APP_URL}/chainbadge.png`;
  return {
    version: '1',
    imageUrl: embedImageUrl,
    button: {
      title: APP_BUTTON_TEXT ?? 'Start Quiz',
      action: {
        type: 'launch_frame',
        name: APP_NAME,
        url: APP_URL,
        splashImageUrl: embedImageUrl,
        splashBackgroundColor: APP_SPLASH_BACKGROUND_COLOR,
      },
    },
  };
}

export async function getFarcasterDomainManifest(): Promise<MiniAppManifest> {
  const manifestImageUrl = `${APP_URL}/chainbadge.png`;
  return {
    accountAssociation: APP_ACCOUNT_ASSOCIATION!,
    miniapp: {
      version: '1',
      name: APP_NAME ?? 'ChainCheck Quiz',
      subtitle: 'True false blockchain quiz',
      description:
        'Answer 10 true or false questions across Bitcoin Ethereum BSC Base and Solana. Score 6 plus to mint a Base badge.',
      homeUrl: APP_URL,
      iconUrl: manifestImageUrl,
      imageUrl: manifestImageUrl,
      heroImageUrl: manifestImageUrl,
      buttonTitle: APP_BUTTON_TEXT ?? 'Launch Mini App',
      splashImageUrl: manifestImageUrl,
      splashBackgroundColor: APP_SPLASH_BACKGROUND_COLOR,
      ogTitle: 'ChainCheck Quiz',
      ogDescription: 'Play the quiz and mint a badge on Base.',
      ogImageUrl: manifestImageUrl,
      screenshotUrls: [manifestImageUrl],
      primaryCategory: APP_PRIMARY_CATEGORY,
      tags: APP_TAGS,
      tagline: 'Prove your chain knowledge',
      castShareUrl: APP_URL,
    },
  };
}
