import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useMemo} from 'react';

import {RootState} from '../../app/redux';
import {fetchPopularTickers} from './actions';

const POPULAR_TICKERS = ['TSLA', 'IBM', 'FB', 'GOOGL', 'AAPL'];

const usePopularTickers = () => {
  // region ********** DATA **********
  const dispatch = useDispatch();

  const isPopularTickersLoading = useSelector(
    (state: RootState) => state.popularTickers.loading,
  );
  const popularTickers = useSelector(
    (state: RootState) => state.popularTickers.data,
  );
  // endregion

  // region ********** EFFECTS **********
  useEffect(() => {
    dispatch(fetchPopularTickers(POPULAR_TICKERS));
  }, [dispatch]);
  // endregion

  return useMemo(
    () => ({
      isPopularTickersLoading,
      popularTickers,
    }),
    [isPopularTickersLoading, popularTickers],
  );
};

export default usePopularTickers;
