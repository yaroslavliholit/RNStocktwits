export const suggestionsTickersAdapter = (
  data: Ticker[],
): SearchSuggestion[] => {
  return data.map(e => ({
    title: e.ticker,
    subtitle: e.name,
    sourceType: 'search',
  }));
};
