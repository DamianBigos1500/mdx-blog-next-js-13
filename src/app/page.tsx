import Image from 'next/image';
import styles from '@/styles/components/home/home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <header className={styles.home}>
      <div>
        <Image
          src={'/cake-1971552.jpg'}
          width={1920}
          height={1080}
          className={styles.header__image}
          alt={"Chocolate Lover's Delight Logo"}
        />
      </div>

      <h1 className={styles.header__title}>Chocolate Lover&apos;s Delight</h1>
      <Link className={styles.header__button} href={'/blogs'}>
        <span>Read</span>
      </Link>
    </header>
  );
}
