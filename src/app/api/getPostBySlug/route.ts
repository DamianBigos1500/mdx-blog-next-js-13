import { NextResponse } from 'next/server';
import postsService from '@/services/posts.service';

export async function GET(request: Request) {
  const req = await request.json();
  const post = postsService.getPostBySlug('');
  
  return NextResponse.json({ message: 'success', post });
}
