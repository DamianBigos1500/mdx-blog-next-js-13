import prisma from '@/lib/server';
import { authOptions } from '@/lib/server/auth';
import { getServerSession } from 'next-auth';

export async function GET() {
  const users = await prisma.user.findMany();

  return new Response(JSON.stringify({ data: users }));
}
