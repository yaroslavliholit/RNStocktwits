import {createAsyncThunk} from '@reduxjs/toolkit';

import Keys from '../../services/storage/keys';
import Storage from '../../services/storage';
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

export const saveSearchHistoryToStorage = createAsyncThunk(
  'search/save-search-history',
  async (history: SearchSuggestion[]) => {
    return await Storage.setData(Keys.SEARCH_HISTORY, history);
  },
);

export const getSearchHistoryFromStorage = createAsyncThunk(
  'search/get-search-history',
  async () => {
    return await Storage.getData(Keys.SEARCH_HISTORY);
  },
);
