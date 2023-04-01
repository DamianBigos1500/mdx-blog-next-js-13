import Image from 'next/image';
import styles from '@/styles/components/home/homePage.module.scss';
import Link from 'next/link';
import getImageBlur from '@/utils/getImageBlur';

export default async function Home() {
  const base64 = await getImageBlur();

  return (
    <header className={styles.home}>
      <div>
        <Image
          src={'/cake-1971552.jpg'}
          width={1920}
          height={1080}
          placeholder="blur"
          blurDataURL={base64}
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
