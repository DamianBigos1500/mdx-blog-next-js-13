import { NextResponse } from 'next/server';
import prisma from '@/lib/server';

export async function GET() {
  const users = await prisma.likedBlogs.findMany({});

  return NextResponse.json({ data: users });
}


