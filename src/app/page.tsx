import postsService from '../services/posts.service';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Page() {
  const mdx = postsService.getPostBySlug('aws-quickstart');
  console.log(mdx.content);

  return (
    <div>
      New
      {/* @ts-expect-error Async Server Component Workaround */}
      <MDXRemote source={mdx.content} />;
    </div>
  );
}
