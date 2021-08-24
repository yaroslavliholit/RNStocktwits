import {createSlice} from '@reduxjs/toolkit';

import {searchSymbolsCompanies} from './actions';

const search = createSlice({
  name: 'search',
  initialState: {
    searchEmpty: false,
    suggestions: null as Nullable<SearchSuggestion[]>,
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
        state.suggestions = action.payload;
        state.searchEmpty = Boolean(!action.payload);
        state.loading = false;
      })
      .addCase(searchSymbolsCompanies.rejected, state => {
        state.loading = false;
      });
  },
});

export const {clearSuggestions} = search.actions;

export default search.reducer;
