import {createAsyncThunk} from '@reduxjs/toolkit';
import {POLYGON_API_KEY} from 'react-native-dotenv';

import {getFormatDate} from '../../shared/utils/date';
import httpAgent from '../../services/httpAgent';
import apiPaths from '../../shared/constants/apiPaths';

interface DailyOpenCloseParams {
  ticker: string;
  date: string;
  closeDate: 'current' | 'previous';
}

export const fetchTickerDetails = createAsyncThunk(
  'tickerDetails/symbol',
  async (ticker: string) => {
    const {data} = await httpAgent.get(apiPaths.meta.symbols(ticker), {
      params: {
        apiKey: POLYGON_API_KEY,
      },
    });

    return (await data) as TickerDetails;
  },
);

export const fetchDailyOpenCloseData = createAsyncThunk(
  'tickerDetails/dailyOpenClose',
  async ({ticker, date}: DailyOpenCloseParams) => {
    const {data} = await httpAgent.get(
      apiPaths.dailyOpenClose({ticker, date}),
      {
        params: {
          apiKey: POLYGON_API_KEY,
          adjusted: true,
        },
      },
    );

    return (await data) as DailyOpenClose;
  },
);

export const fetchAggregatesBars = createAsyncThunk(
  'tickerDetails/aggregatesBars',
  async (stocksTicker: string) => {
    const to = getFormatDate({date: new Date()});
    const from = getFormatDate({date: new Date(), extraMonth: -1});

    const {data} = await httpAgent.get(
      apiPaths.stocks.aggregates({stocksTicker, from, to}),
      {
        params: {
          apiKey: POLYGON_API_KEY,
        },
      },
    );

    return (await data) as AggResponseFormatted;
  },
);
