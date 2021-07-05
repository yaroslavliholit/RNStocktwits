import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useMemo} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {
  fetchTickerDetails,
  fetchDailyOpenCloseData,
  fetchAggregatesBars,
} from './actions';
import {RootState} from '../../app/redux';
import {getFormatDate} from '../../shared/utils/date';

export const useFetchTickerDetails = (ticker: string) => {
  // region ********** DATA **********
  const dispatch = useDispatch();

  const companyDetails = useSelector(
    ({tickerDetails}: RootState) => tickerDetails.companyInfo.data,
  );

  const endOfDayClosePrice = useSelector(
    ({tickerDetails}: RootState) =>
      tickerDetails.dailyOpenClose.endOfDayClosePrice,
  );

  const prevDayClosePrice = useSelector(
    ({tickerDetails}: RootState) =>
      tickerDetails.dailyOpenClose.prevDayClosePrice,
  );

  const priceChangeDifference = useMemo(() => {
    return endOfDayClosePrice && prevDayClosePrice
      ? Number((endOfDayClosePrice - prevDayClosePrice).toFixed(1))
      : null;
  }, [endOfDayClosePrice, prevDayClosePrice]);

  const priceChangeDifferencePercent = useMemo(() => {
    return endOfDayClosePrice && priceChangeDifference
      ? Number(((priceChangeDifference * 100) / endOfDayClosePrice).toFixed(1))
      : null;
  }, [endOfDayClosePrice, priceChangeDifference]);

  const aggregatesBars = useSelector(
    ({tickerDetails}: RootState) => tickerDetails.aggregates.data,
  );
  // endregion

  // region ********** CALLBACKS **********
  const fetchTickerDataForCompanyDetailsScreen = useCallback(
    (value: string) => {
      dispatch(fetchTickerDetails(value));

      dispatch(fetchAggregatesBars(value));

      dispatch(
        fetchDailyOpenCloseData({
          ticker: value,
          date: getFormatDate({extraDay: -3}),
          closeDate: 'current',
        }),
      );

      dispatch(
        fetchDailyOpenCloseData({
          ticker: value,
          date: getFormatDate({extraDay: -4}),
          closeDate: 'previous',
        }),
      );
    },
    [dispatch],
  );
  // endregion

  // region ********** EFFECTS **********
  useFocusEffect(
    useCallback(() => {
      fetchTickerDataForCompanyDetailsScreen(ticker);
    }, [fetchTickerDataForCompanyDetailsScreen, ticker]),
  );
  // endregion

  return {
    companyDetails,
    triggerSearchTicker: fetchTickerDataForCompanyDetailsScreen,
    lastAvailablePrice: endOfDayClosePrice,
    priceChangeDifference,
    priceChangeDifferencePercent,
    aggregatesBars,
  };
};
