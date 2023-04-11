export const generateNewQuerryString = (searchParams: any) => {
  let newQuerry = '';

  for (const [key, value] of Object.entries(searchParams)) {
    const symbol = newQuerry == '' ? '?' : '&';

    if (typeof value === 'string') newQuerry += symbol + key + '=' + value;
  }


  return newQuerry;
};
