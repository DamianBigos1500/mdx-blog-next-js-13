import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/server/auth';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/server';
import { Validate } from 'src/class/Validate';
import { updateProfileRules } from '@/data/validationRules/validationRules';

export async function POST(request: Request) {
  const body = await request.json();
  const validated = new Validate(body, updateProfileRules);

  if (validated.hasError) {
    return new Response(
      JSON.stringify({
        errors: validated.errors,
      }),
      {
        status: 422,
      }
    );
  }

  let session;
  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    throw new Error('Cannot get user session');
  }

  if (!session?.user || session.user.email !== body.email) {
    throw new Error('This email does not belong to you');
  }

  const updatedUser = await prisma.user.update({
    where: {
      email: session.user.email!,
    },
    data: {
      name: body.name,
      surname: body.surname,
    },
  });
  console.log(updatedUser);

  return NextResponse.json({ message: 'success', user: updatedUser });
}
