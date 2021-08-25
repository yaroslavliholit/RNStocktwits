import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect, useMemo, useState} from 'react';
import debounce from 'lodash.debounce';

import {
  clearSuggestions,
  pushToRecentSearches,
  removeFirstElementFromRecentSearches,
} from './';
import {
  searchSymbolsCompanies,
  saveSearchHistoryToStorage,
  getSearchHistoryFromStorage,
} from './actions';
import {RootState} from '../../app/redux';

const SEARCH_DELAY = 500;

const MAX_SEARCH_HISTORY_LENGTH = 5;

export const useSearchTickers = () => {
  // region ********** DATA **********
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const {suggestions, loading, searchEmpty} = useSelector(
    (state: RootState) => state.search,
  );
  // endregion

  // region ********** CALLBACKS **********
  const handleFetchTickers = useCallback(() => {
    dispatch(searchSymbolsCompanies(searchQuery));
  }, [dispatch, searchQuery]);

  const handleTriggerSearch = useMemo(() => {
    return debounce(handleFetchTickers, SEARCH_DELAY);
  }, [handleFetchTickers]);

  const getSearchTickersProps = useCallback(
    () => ({
      value: searchQuery,
      onChangeText: setSearchQuery,
    }),
    [setSearchQuery, searchQuery],
  );

  const handleClearSuggestions = useCallback(() => {
    dispatch(clearSuggestions());
  }, [dispatch]);

  const handleClearSearchQuery = useCallback(() => {
    setSearchQuery('');
    handleClearSuggestions();
  }, [handleClearSuggestions]);
  // endregion

  // region ********** EFFECTS **********
  useEffect(() => {
    if (searchQuery) {
      handleTriggerSearch();

      return handleTriggerSearch.cancel;
    }
  }, [searchQuery, handleTriggerSearch]);

  useEffect(() => {
    if (!searchQuery) {
      handleClearSuggestions();
    }
  }, [searchQuery, dispatch, handleClearSuggestions]);
  // endregion

  return {
    searchEmpty,
    searchQuery,
    suggestions,
    loading,
    getSearchTickersProps,
    handleClearSuggestions,
    handleClearSearchQuery,
  };
};

export const useRecentSearches = () => {
  const dispatch = useDispatch();

  const searchHistory = useSelector(
    (state: RootState) => state.search.recentSearches,
  );

  const handleSaveTickerToHistory = useCallback(
    (ticker: TickerDetails) => {
      const symbolInStore = searchHistory?.find(
        ({title}) => title === ticker?.symbol,
      );

      if (!symbolInStore) {
        dispatch(
          pushToRecentSearches({
            title: ticker.symbol,
            subtitle: ticker.name,
            sourceType: 'history',
          }),
        );
      }

      if (searchHistory?.length > MAX_SEARCH_HISTORY_LENGTH) {
        dispatch(removeFirstElementFromRecentSearches());
      }

      if (searchHistory) {
        dispatch(saveSearchHistoryToStorage(searchHistory));
      }
    },
    [dispatch, searchHistory],
  );

  return {
    searchHistory,
    handleSaveTickerToHistory,
  };
};

export const useGetRecentSearches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchHistoryFromStorage());
  }, [dispatch]);
};
