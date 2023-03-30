import Image from 'next/image';
import { FC } from 'react';
import styles from '@/styles/components/posts/post.module.scss';

interface BlogPostHeaderProps {
  src: string;
  title: string;
  readingTime: number;
}

const BlogPostHeader: FC<BlogPostHeaderProps> = ({ src, title, readingTime }) => {
  return (
    <div className={styles.blog_post__header}>
      <Image
        src={src}
        alt=""
        width={1920}
        height={1080}
        className={styles.image}
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default BlogPostHeader;
