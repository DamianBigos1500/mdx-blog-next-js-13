'use client';

import { FC, FormEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/components/searchFilter/searchFilter.module.scss';
import Icons from '../icons/Icons';

interface SearchFilterProps {
  searchParams: any;
}

const SearchFilter: FC<SearchFilterProps> = ({ searchParams }) => {
  const inputRef = useRef<any>('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current.value.trim() === '') {
      return;
    }

    const newQuery = new URLSearchParams(searchParams);
    newQuery.delete('search');
    newQuery.append('search', inputRef.current.value);

    router.push('/blogs?' + newQuery.toString());
  };

  return (
    <div className={styles.search_bar}>
      <form onSubmit={handleSubmit} className={styles.search_bar__form}>
        <input type="text" ref={inputRef} />
        <button type="submit">
          <Icons.Search size={16} />
        </button>
      </form>
    </div>
  );
};

export default SearchFilter;
