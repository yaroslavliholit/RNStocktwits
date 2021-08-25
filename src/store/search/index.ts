import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {searchSymbolsCompanies, getSearchHistoryFromStorage} from './actions';

const search = createSlice({
  name: 'search',
  initialState: {
    searchEmpty: false,
    suggestions: null as Nullable<SearchSuggestion[]>,
    loading: false,
    recentSearches: [] as SearchSuggestion[],
  },
  reducers: {
    clearSuggestions(state) {
      state.suggestions = null;
    },
    pushToRecentSearches(state, action: PayloadAction<SearchSuggestion>) {
      state.recentSearches.push(action.payload);
    },
    removeFirstElementFromRecentSearches(state) {
      state.recentSearches.shift();
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
      })
      .addCase(getSearchHistoryFromStorage.fulfilled, (state, action) => {
        if (action.payload) {
          state.recentSearches = action.payload;
        }
      });
  },
});

export const {
  clearSuggestions,
  pushToRecentSearches,
  removeFirstElementFromRecentSearches,
} = search.actions;

export default search.reducer;
