'use client';

import { Ingredients } from '@/utils/types';
import { FC, useEffect, useState } from 'react';
import styles from '@/styles/components/ingredientsFilter/ingredientsFilter.module.scss';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface IngredientsFilterProps {
  ingredients: Ingredients[];
  searchParams: any;
}

const IngredientsFilter: FC<IngredientsFilterProps> = ({
  ingredients,
  searchParams,
}) => {
  const router = useRouter();
  const searchParamsHook = useSearchParams();
  const pathname = usePathname();
  const [ingredientsQuerryArray, setIngredientsQuerryArray] = useState<any>(
    searchParamsHook?.getAll('ing[]') ?? []
  );

  const handleInput = (e: any) => {
    const newQuery = new URLSearchParams(searchParams);

    let newIngredientsParams = searchParamsHook
      ?.getAll('ing[]')
      .filter((prev: string) => prev !== e.target.value);

    newQuery.delete('ing[]');

    newIngredientsParams?.map((value) => {
      newQuery.append('ing[]', value);
    });

    if (e.target.checked) {
      setIngredientsQuerryArray((prev: any) => {
        return [...prev, e.target.value];
      });
      newQuery.append('ing[]', e.target.value);
    } else {
      setIngredientsQuerryArray((prev: any) => {
        return prev?.filter((prev: string) => prev !== e.target.value);
      });
    }

    router.push('/blogs?' + newQuery.toString());
  };

  const resetFilter = () => {
    router.push('/blogs');
    setIngredientsQuerryArray([]);
  };

  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.subtitle}>choose your ingredients</div>
        <div className={styles.reset_filter} onClick={resetFilter}>
          Reset filters
        </div>
      </div>
      <ul className={styles.categories_list}>
        {ingredients.map((ingredient: Ingredients) => {
          return (
            <li key={ingredient.id} className={styles.category_item}>
              <input
                type="checkbox"
                name="data"
                id={`checkbox-${ingredient.name}`}
                value={ingredient.name}
                checked={ingredientsQuerryArray.includes(ingredient.name)}
                onChange={handleInput}
              />
              <label htmlFor={`checkbox-${ingredient.name}`}>
                {ingredient.name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientsFilter;
