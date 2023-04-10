export const generateNewQuerryString = (searchParams: any) => {
  console.log(searchParams);

  let newQuerry = '';

  for (const [key, value] of Object.entries(searchParams)) {
    console.log(key);
    const symbol = newQuerry == '' ? '?' : '&';

    if (typeof value === 'string') newQuerry += symbol + key + '=' + value;
  }

  console.log(newQuerry);

  return newQuerry;
};
