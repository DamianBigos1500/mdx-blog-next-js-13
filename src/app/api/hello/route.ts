import { authOptions } from '@/lib/server/auth';
import { getServerSession } from 'next-auth';

export async function GET() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return new Response(JSON.stringify({ ...session }));
}
