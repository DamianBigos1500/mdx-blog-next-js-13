'use client';

import { FC, useState } from 'react';
import styles from './ingredientsFilter.module.scss';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import CustomQueries from '@/utils/CustomQueries';
import PARAMS_ENUM from '@/data/PARAMS_ENUM';

interface IngredientsFilterProps {
  ingredients: string[];
  searchParams: any;
}

const IngredientsFilter: FC<IngredientsFilterProps> = ({
  ingredients,
  searchParams,
}) => {
  const router = useRouter();
  const searchParamsHook = useSearchParams();
  const [ingredientsQuerryArray, setIngredientsQuerryArray] = useState<any>(
    searchParamsHook?.getAll('ing[]') ?? []
  );

  const handleSelect = (e: any) => {
    const query = new CustomQueries(searchParams);

    if (e.target.checked) query.add(PARAMS_ENUM.ING, e.target.value);
    else query.remove(PARAMS_ENUM.ING, e.target.value);

    setIngredientsQuerryArray(Array.from(query.get(PARAMS_ENUM.ING) ?? []));
    return router.push('/posts' + query.getStringUrl());
  };

  const resetFilter = () => {
    router.push('/posts');
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
        {ingredients?.map((ingredient) => {
          return (
            <li key={ingredient} className={styles.category_item}>
              <input
                type="checkbox"
                name="data"
                id={`checkbox-${ingredient}`}
                value={ingredient}
                checked={ingredientsQuerryArray.includes(ingredient)}
                onChange={handleSelect}
              />
              <label htmlFor={`checkbox-${ingredient}`}>{ingredient}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientsFilter;
