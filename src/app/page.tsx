import { Metadata } from 'next';
import QuizApp from '~/components/QuizApp';
import { APP_NAME, APP_URL } from '~/lib/constants';
import { getMiniAppEmbedMetadata } from '~/lib/utils';

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const embedMetadata = getMiniAppEmbedMetadata();
  const shareImageUrl = `${APP_URL}/chainbadge.png`;
  return {
    title: APP_NAME,
    openGraph: {
      title: APP_NAME,
      description: 'Play the quiz and mint a badge on Base.',
      images: [shareImageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: APP_NAME,
      description: 'Play the quiz and mint a badge on Base.',
      images: [shareImageUrl],
    },
    other: {
      'fc:miniapp': JSON.stringify(embedMetadata),
      'fc:frame': JSON.stringify(embedMetadata),
    },
  };
}

export default function Home() {
  return <QuizApp />;
}
