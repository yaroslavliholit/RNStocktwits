import {createSlice} from '@reduxjs/toolkit';

import {fetchPopularTickers} from './actions';

const popularTickers = createSlice({
  name: 'popularTickers',
  initialState: {
    loading: true,
    data: null as Nullable<TickerDetails[]>,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPopularTickers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPopularTickers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPopularTickers.rejected, state => {
      state.loading = true;
    });
  },
});

export default popularTickers.reducer;
