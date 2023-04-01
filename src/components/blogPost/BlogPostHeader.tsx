import Image from 'next/image';
import { FC } from 'react';
import styles from '@/styles/components/posts/post.module.scss';
import { getPlaiceholder } from 'plaiceholder';
import getImageBlur from '@/utils/getImageBlur';

interface BlogPostHeaderProps {
  src: string;
  title: string;
  blurhash: string;
}

const BlogPostHeader = async ({
  src,
  title,
  blurhash,
}: BlogPostHeaderProps) => {
  const base64 = await getImageBlur();

  return (
    <div className={styles.blog_post__header}>
      <Image
        src={src}
        alt=""
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL={base64}
        className={styles.image}
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default BlogPostHeader;
