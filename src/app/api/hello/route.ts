import { NextResponse } from 'next/server';
import prisma from '@/lib/server';
import { authOptions } from '@/lib/server/auth';
import { getServerSession } from 'next-auth';

export async function GET() {
  const users = await prisma.user.findMany({
    include: { likedBlogs: true },
  });

  return NextResponse.json({ data: users });
}
