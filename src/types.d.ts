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

interface TickerDetails {
  logo?: string;
  exchange: string;
  name: string;
  symbol: string;
  listdate?: string;
  cik?: string;
  bloomberg?: string;
  figi?: string;
  legalEntityIdentifier?: string;
  standardIndustryClassification?: number;
  country?: string;
  industry?: string;
  sector?: string;
  marketcap?: number;
  employees?: number;
  phone?: string;
  ceo?: string;
  url?: string;
  description?: string;
  similar?: string[];
  tags?: string[];
  updated?: string;
  hqAddress: string;
}

interface DailyOpenClose {
  symbol: string;
  open?: number;
  close?: number;
  afterHours?: unknown;
}

interface AggV2Formatted {
  T?: string;
  tickerSymbol?: string;
  v: number;
  volume: number;
  o: number;
  open: number;
  c: number;
  close: number;
  h: number;
  high: number;
  l: number;
  low: number;
  t?: number;
  timestamp?: number;
  n?: number;
  numberOfItems?: number;
}

interface AggResponseFormatted {
  ticker: string;
  status: string;
  adjusted: boolean;
  queryCount?: number;
  resultsCount?: number;
  results: AggV2Formatted[];
}

interface SearchSuggestion {
  title: string;
  subtitle: string;
  sourceType: 'search';
}
