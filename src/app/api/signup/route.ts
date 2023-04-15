import prisma from '@/lib/server';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { Validate } from 'src/class/Validate';
import { signUpRules } from '@/data/validationRules/validationRules';

export async function POST(request: Request) {
  const body = await request.json();
  const validated = new Validate(body, signUpRules);

  if (validated.hasError) {
    return new Response(
      JSON.stringify({
        errors: validated.errors,
      }),
      { status: 422 }
    );
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        image:
          body.image ??
          'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        email: body.email,
        password: bcrypt.hashSync(body.password, 12),
      },
    });
    return NextResponse.json({ message: 'success', user: newUser });
  } catch (error) {
    console.log(error);
  }
}
