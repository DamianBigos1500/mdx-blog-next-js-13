import Image from 'next/image';
import styles from '@/styles/components/posts/post.module.scss';

interface BlogPostHeaderProps {
  src: string;
  title: string;
}

const BlogPostHeader = ({ src, title }: BlogPostHeaderProps) => {
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
