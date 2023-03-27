import { createPost } from '@/src/lib/server/posts';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log(request)
  try {
    const newPost = {
      name: 'name post 1',
    };

    const { post } = await createPost(newPost);

    return NextResponse.json({ post: post });
  } catch (error) {}

  return NextResponse.json({ data: 'asdasd' });
}
