'use client';

import { FC, FormEvent, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './searchFilter.module.scss';
import Icons from '@/components/UI/Icons/Icons';
import CustomQueries from '@/utils/CustomQueries';
import PARAMS_ENUM from '@/data/PARAMS_ENUM';

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

    const query = new CustomQueries(searchParams);
    query.clear(PARAMS_ENUM.SEARCH);
    query.add(PARAMS_ENUM.SEARCH, inputRef.current.value);

    return router.push('/posts' + query.getStringUrl());
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
