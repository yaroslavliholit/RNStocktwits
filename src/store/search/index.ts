import {createSlice} from '@reduxjs/toolkit';

import {searchSymbolsCompanies} from './actions';

const search = createSlice({
  name: 'search',
  initialState: {
    suggestions: null as Nullable<Ticker[]>,
    loading: false,
  },
  reducers: {
    clearSuggestions(state) {
      state.suggestions = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchSymbolsCompanies.pending, state => {
        state.loading = true;
      })
      .addCase(searchSymbolsCompanies.fulfilled, (state, action) => {
        state.suggestions = action.payload.results;
        state.loading = false;
      })
      .addCase(searchSymbolsCompanies.rejected, state => {
        state.loading = false;
      });
  },
});

export const {clearSuggestions} = search.actions;

export default search.reducer;
