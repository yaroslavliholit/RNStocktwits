import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect, useMemo, useState} from 'react';
import debounce from 'lodash.debounce';

import {clearSuggestions} from './';
import {searchSymbolsCompanies} from './actions';
import {RootState} from '../../app/redux';

const SEARCH_DELAY = 500;

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
    searchQuery,
    suggestions,
    loading,
    getSearchTickersProps,
    handleClearSuggestions,
    searchEmpty,
  };
};
