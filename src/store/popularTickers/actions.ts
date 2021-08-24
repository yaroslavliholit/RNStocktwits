import {createAsyncThunk} from '@reduxjs/toolkit';

import ENV from '../../shared/constants/env';
import httpAgent from '../../services/httpAgent';
import apiPaths from '../../shared/constants/apiPaths';

export const fetchPopularTickers = createAsyncThunk(
  'popularTickers/symbols',
  async (tickers: string[]) => {
    const result = await Promise.all(
      tickers.map(async ticker => {
        const {data} = await httpAgent.get(apiPaths.meta.symbols(ticker), {
          params: {
            apiKey: ENV.POLYGON_API_KEY,
          },
        });

        return data;
      }),
    );

    return (await result) as TickerDetails[];
  },
);
