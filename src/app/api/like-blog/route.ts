import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/server/auth';

export async function POST(request: Request) {
  const body = await request.json();

  let session;
  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    throw new Error('Cannot get user session');
  }

  return NextResponse.json({ message: 'success', user: session });
}
