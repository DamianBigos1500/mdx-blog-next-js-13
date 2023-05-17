import Image from 'next/image';
import styles from '@/styles/pages/home.module.scss';
import Link from 'next/link';
import Slider from '@/components/Slider/Slider';

export default async function Home() {
  return (
    <div className={styles.home}>
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
      <Link className={styles.header__button} href={'/posts'}>
        <span>Read</span>
      </Link>

      <section className={styles.slider}>
        <Slider />
      </section>
    </div>
  );
}
