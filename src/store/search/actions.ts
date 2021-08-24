import {createAsyncThunk} from '@reduxjs/toolkit';

import ENV from '../../shared/constants/env';
import httpAgent from '../../services/httpAgent';
import apiPaths from '../../shared/constants/apiPaths';
import {suggestionsTickersAdapter} from './utils';

export const searchSymbolsCompanies = createAsyncThunk(
  'search/symbols-companies',
  async (searchQuery: string) => {
    const {data} = await httpAgent.get(apiPaths.reference.tickers, {
      params: {
        search: searchQuery,
        active: true,
        sort: 'ticker',
        order: 'asc',
        limit: 10,
        apiKey: ENV.POLYGON_API_KEY,
      },
    });

    return (await suggestionsTickersAdapter(data.results)) as Nullable<
      SearchSuggestion[]
    >;
  },
);
