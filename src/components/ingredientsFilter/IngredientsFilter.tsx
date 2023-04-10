'use client';

import { Ingredients } from '@/utils/types';
import { FC, useEffect, useState } from 'react';
import styles from '@/styles/components/ingredientsFilter/ingredientsFilter.module.scss';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { generateNewQuerryString } from '@/utils/generateNewQuerryString';

interface IngredientsFilterProps {
  ingredients: Ingredients[];
  searchParams: any;
}

const IngredientsFilter: FC<IngredientsFilterProps> = ({
  ingredients,
  searchParams,
}) => {
  const router = useRouter();
  const searchingParams = useSearchParams();
  const [ingredientsQuerryArray, setIngredientsQuerryArray] = useState<any>(
    searchingParams?.getAll('ing[]') ?? []
  );

  const handleInput = (e: any) => {
    const newQuery = new URLSearchParams(searchParams);

    let newIngredientsParams = searchingParams
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

  return (
    <div>
      <div className={styles.subtitle}>choose your ingredients</div>
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
