import { NextResponse } from 'next/server';
import { getFarcasterDomainManifest } from '~/lib/utils';

export async function GET() {
  const manifest = await getFarcasterDomainManifest();
  return NextResponse.json(manifest, {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
