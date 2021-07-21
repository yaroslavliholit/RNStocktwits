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
import {isPositiveNumber} from '../../shared/utils/number';

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

  const isCompanyDetailsLoading = useSelector(
    ({tickerDetails}: RootState) => tickerDetails.companyInfo.loading,
  );

  const isDailyOpenCloseLoading = useSelector(
    ({tickerDetails}: RootState) => tickerDetails.dailyOpenClose.loading,
  );

  const isAggregatesLoading = useSelector(
    ({tickerDetails}: RootState) => tickerDetails.aggregates.loading,
  );

  const isAnyLoading =
    isCompanyDetailsLoading || isDailyOpenCloseLoading || isAggregatesLoading;

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

  const aggregatesChartData = useMemo(() => {
    return aggregatesBars?.map((e, index) => ({
      y: Number(e.c.toFixed(1)),
      x: index,
    }));
  }, [aggregatesBars]);

  const isPriceGoUp = isPositiveNumber(priceChangeDifference || 0);

  const companyParams = [
    {label: 'Selector:', value: companyDetails?.sector},
    {label: 'Industry:', value: companyDetails?.industry},
    {label: 'CEO:', value: companyDetails?.ceo},
    {label: 'Employees:', value: companyDetails?.employees},
    {label: 'Address:', value: companyDetails?.hqAddress},
    {label: 'Phone:', value: companyDetails?.phone},
  ];
  // endregion

  // region ********** CALLBACKS **********
  const fetchTickerDataForCompanyDetailsScreen = useCallback(
    (value: string) => {
      dispatch(fetchTickerDetails(value));

      dispatch(fetchAggregatesBars(value));

      dispatch(
        fetchDailyOpenCloseData({
          ticker: value,
          date: getFormatDate({extraDay: -1}),
          closeDate: 'current',
        }),
      );

      dispatch(
        fetchDailyOpenCloseData({
          ticker: value,
          date: getFormatDate({extraDay: -2}),
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
    aggregatesChartData,
    companyParams,
    isPriceGoUp,
    isAnyLoading,
  };
};
