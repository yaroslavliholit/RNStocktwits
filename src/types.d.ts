type Nullable<T> = T | null;

interface Ticker {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  currency: string;
  active: string;
  primaryExch: string;
  type: string;
  codes: {[key: string]: string};
  updated: string;
  url: string;
}
