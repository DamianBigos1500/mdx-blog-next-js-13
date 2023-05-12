import Image from 'next/image';
import styles from './postHeader.module.scss';

interface PostHeaderProps {
  src: string;
  title: string;
}

const PostHeader = ({ src, title }: PostHeaderProps) => {
  return (
    <div className={styles.post__header}>
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

export default PostHeader;