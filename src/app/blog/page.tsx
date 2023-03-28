import { FC } from 'react';
import fs from 'fs';
import Link from 'next/link';

// const getPostMetadata = () => {
//   const folder = 'src/data/posts/';
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith('.mdx'));
//   const slugs = markdownPosts.map((file) => file.replace('.mdx', ''));
//   return slugs;
// };

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  // const postMetadata: string[] = getPostMetadata();
  // const postPreview = postMetadata.map((slug: string) => (
  //   <div>
  //     <Link href={`/blog/${slug}`}>{slug}</Link>
  //   </div>
  // ));

  return <div>asdasdasd</div>;
};

export default page;
