import {createSlice} from '@reduxjs/toolkit';
import {
  fetchTickerDetails,
  fetchDailyOpenCloseData,
  fetchAggregatesBars,
} from './actions';

const tickerDetails = createSlice({
  name: 'tickerDetails',
  initialState: {
    companyInfo: {
      data: null as Nullable<TickerDetails>,
      loading: false,
    },
    dailyOpenClose: {
      loading: false,
      endOfDayClosePrice: null as Nullable<number>,
      prevDayClosePrice: null as Nullable<number>,
    },
    aggregates: {
      loading: false,
      data: null as Nullable<AggV2Formatted[]>,
    },
  },
  reducers: {
    clearCompanyInfoData(state) {
      state.companyInfo.data = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTickerDetails.pending, state => {
        state.companyInfo.loading = true;
      })
      .addCase(fetchTickerDetails.fulfilled, (state, action) => {
        state.companyInfo.data = action.payload;
        state.companyInfo.loading = false;
      })
      .addCase(fetchTickerDetails.rejected, state => {
        state.companyInfo.loading = false;
      })
      .addCase(fetchDailyOpenCloseData.pending, state => {
        state.dailyOpenClose.loading = true;
      })
      .addCase(fetchDailyOpenCloseData.fulfilled, (state, action) => {
        if (action.meta.arg.closeDate === 'current' && action.payload.close) {
          state.dailyOpenClose.endOfDayClosePrice = action.payload.close;
          state.dailyOpenClose.loading = false;
        }

        if (action.meta.arg.closeDate === 'previous' && action.payload.close) {
          state.dailyOpenClose.prevDayClosePrice = action.payload.close;
          state.dailyOpenClose.loading = false;
        }
      })
      .addCase(fetchDailyOpenCloseData.rejected, state => {
        state.dailyOpenClose.loading = false;
      })
      .addCase(fetchAggregatesBars.pending, state => {
        state.aggregates.loading = true;
      })
      .addCase(fetchAggregatesBars.fulfilled, (state, action) => {
        state.aggregates.data = action.payload.results;
        state.aggregates.loading = false;
      })
      .addCase(fetchAggregatesBars.rejected, state => {
        state.aggregates.loading = false;
      });
  },
});

export const {clearCompanyInfoData} = tickerDetails.actions;

export default tickerDetails.reducer;
