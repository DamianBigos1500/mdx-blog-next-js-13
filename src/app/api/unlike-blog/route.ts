import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/server/auth';
import prisma from '@/lib/server';

export async function POST(request: Request) {
  const body = await request.json();

  let session;
  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    throw new Error('Cannot get user session');
  }

  if (!session) {
    return NextResponse.json({ message: 'error' });
  }

  try {
    await prisma.likedBlogs.delete({
      where: {
        id: body.pinnedId,
      },
    });
  } catch (error) {
    return NextResponse.json({ message: 'error' });
  }

  return NextResponse.json({ message: 'success', user: session });
}
