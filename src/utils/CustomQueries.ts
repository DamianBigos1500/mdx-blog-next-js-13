class CustomQueries {
  searchParams: Map<string, Set<string>>;

  constructor(searchParams: any) {
    this.searchParams = new Map();

    for (const [key, value] of Object.entries<string[]>(searchParams)) {
      if (!Array.isArray(value)) {
        const queries = new Set<string>([value]);
        this.searchParams.set(key, queries);
        continue;
      }

      const queries = value.reduce((acc: Set<string>, val: string) => {
        return acc.add(val);
      }, new Set<string>([]));

      this.searchParams.set(key, queries);
    }
  }

  add(key: string, value: string) {

    if (!this.searchParams.get(key))
      this.searchParams.set(key, new Set<string>([value]));
    else this.searchParams.get(key)?.add(value);
  }

  remove(key: string, value: string) {
    if (!this.searchParams.get(key)) return;
    else if (this.searchParams.get(key)!.size === 1)
      this.searchParams.delete(key);
    else this.searchParams.get(key)?.delete(value);
  }

  get(key: string) {
    return this.searchParams.get(key);
  }

  getAll() {
    return Object.fromEntries(this.searchParams);
  }

  clear(key: string) {
    return this.searchParams.delete(key);
  }

  getStringUrl(): string {
    let url = '';

    this.searchParams.forEach((value, key) => {
      value.forEach((val) => {
        if (url === '') url += `?${key}=${val}`;
        else url += `&${key}=${val}`;
      });
    });

    return url;
  }
}

export default CustomQueries;
