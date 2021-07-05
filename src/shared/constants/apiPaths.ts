const apiPaths = {
  reference: {
    tickers: '/v3/reference/tickers',
  },
  meta: {
    symbols: (ticker: string) => `/v1/meta/symbols/${ticker}/company`,
  },
  dailyOpenClose: ({ticker, date}: {ticker: string; date: string}) =>
    `/v1/open-close/${ticker}/${date}`,
  stocks: {
    aggregates: ({
      stocksTicker,
      from,
      to,
      multiplier = 1,
      timespan = 'day',
    }: {
      stocksTicker: string;
      from: string;
      to: string;
      multiplier?: number;
      timespan?: string;
    }) =>
      `/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}`,
  },
};

export default apiPaths;
