import React, {memo, FC} from 'react';
import {SafeAreaView} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {useFetchTickerDetails} from '../../store/tickerDetails/hooks';
import {getRandomColor} from '../../shared/utils/color';
import {isPositiveNumber} from '../../shared/utils/number';
import {SearchNavigatorParams} from '../../app/navigation/SearchNavigator';
import Header from '../../shared/components/Header';
import Typography from '../../shared/components/Typography';
import Spacer from '../../shared/components/Spacer';
import Chip from '../../shared/components/Chip';
import Icon from '../../shared/components/Icon';
import LineChart from '../../shared/components/LineChart';

import * as S from './styles';

type CompanyDetailsNavigationProp = RouteProp<
  SearchNavigatorParams,
  'CompanyDetails'
>;

interface Props {
  route: CompanyDetailsNavigationProp;
}

const CompanyDetails: FC<Props> = ({route}) => {
  const {ticker} = route.params;
  const {
    companyDetails,
    lastAvailablePrice,
    priceChangeDifference,
    triggerSearchTicker,
    priceChangeDifferencePercent,
    aggregatesBars,
  } = useFetchTickerDetails(ticker);

  const isPriceGoUp = isPositiveNumber(priceChangeDifference || 0);

  if (!companyDetails || !aggregatesBars) {
    return null;
  }

  const width = 350;
  const height = 200;

  const data = aggregatesBars.map((e, index) => ({
    y: Number(e.c.toFixed(1)),
    x: index,
  }));

  const companyParams = [
    {label: 'Selector:', value: companyDetails.sector},
    {label: 'Industry:', value: companyDetails.industry},
    {label: 'CEO:', value: companyDetails.ceo},
    {label: 'Employees:', value: companyDetails.employees},
    {label: 'Address:', value: companyDetails.hq_address},
    {label: 'Phone:', value: companyDetails.phone},
  ];

  return (
    <SafeAreaView>
      <Header />
      <S.Container>
        {/* region ********** Title ********** */}
        <S.RowContainer>
          <Spacer positionType={'right'} sizeType={'small'}>
            <Typography variant="heading">{companyDetails.symbol}</Typography>
          </Spacer>
          <Typography variant="label">{companyDetails.name}</Typography>
        </S.RowContainer>
        {/* endregion */}

        {/* region ********** Price ********** */}
        <Spacer positionType={['top', 'bottom']} sizeType={'medium'}>
          <Spacer positionType={'bottom'} sizeType={'small'}>
            <Typography variant={'heading'}>${lastAvailablePrice}</Typography>
          </Spacer>
          <S.RowContainer>
            {priceChangeDifference && (
              <Spacer positionType={'right'} sizeType={'small'}>
                <Typography variant={isPriceGoUp ? 'success' : 'danger'}>
                  {priceChangeDifference}
                </Typography>
              </Spacer>
            )}
            {priceChangeDifferencePercent && (
              <S.RowContainer>
                <Spacer positionType={'right'} sizeType={'small'}>
                  <Icon
                    type={isPriceGoUp ? 'arrow-up' : 'arrow-down'}
                    width={15}
                    height={15}
                    fill={isPriceGoUp ? '#58D38C' : '#E83E3E'}
                  />
                </Spacer>
                <Typography variant={isPriceGoUp ? 'success' : 'danger'}>
                  {priceChangeDifferencePercent}
                </Typography>
              </S.RowContainer>
            )}
          </S.RowContainer>
        </Spacer>
        {/* endregion */}

        {/* Chart */}
        <LineChart
          width={width}
          height={height}
          data={data}
          strokeColor={isPriceGoUp ? '#58D38C' : '#E83E3E'}
        />
        {/* Chart */}

        {/* region ********** About ********** */}
        <Spacer positionType={'bottom'} sizeType={'medium'}>
          <Spacer positionType={'bottom'} sizeType={'medium'}>
            <Typography variant="subtitle">
              About {companyDetails.symbol}
            </Typography>
          </Spacer>

          <Spacer positionType={'bottom'} sizeType={'medium'}>
            {companyParams
              .filter(e => Boolean(e.value))
              .map(({label, value}) => (
                <Spacer key={label} positionType={'bottom'} sizeType={'small'}>
                  <S.RowContainer>
                    <Spacer positionType={'right'} sizeType={'small'}>
                      <Typography variant={'label'}>{label}</Typography>
                    </Spacer>
                    <Typography variant={'important'}>{value}</Typography>
                  </S.RowContainer>
                </Spacer>
              ))}
          </Spacer>
        </Spacer>

        <Spacer positionType={'bottom'} sizeType={'medium'}>
          <Spacer positionType={'bottom'} sizeType={'medium'}>
            <Typography variant="subtitle">Description</Typography>
          </Spacer>

          <Typography variant="label">{companyDetails.description}</Typography>
        </Spacer>
        {/* endregion */}

        {/* region ********** Tags ********** */}
        {Boolean(companyDetails.tags?.length) && (
          <Spacer positionType={'bottom'} sizeType={'medium'}>
            <Spacer positionType={'bottom'} sizeType={'medium'}>
              <Typography variant="subtitle">Tags</Typography>
            </Spacer>

            <S.RowContainer>
              {companyDetails.tags?.map(tag => (
                <Spacer
                  key={tag}
                  positionType={['right', 'bottom']}
                  sizeType={'small'}>
                  <Chip label={tag} color={getRandomColor()} />
                </Spacer>
              ))}
            </S.RowContainer>
          </Spacer>
        )}
        {/* endregion */}

        {/* region ********** Related Stocks ********** */}
        {Boolean(companyDetails.similar?.length) && (
          <Spacer positionType={'bottom'} sizeType={'medium'}>
            <Spacer positionType={'bottom'} sizeType={'medium'}>
              <Typography variant="subtitle">Related Stocks</Typography>
            </Spacer>

            <S.RowContainer>
              {companyDetails.similar?.map(tickerItem => (
                <Spacer
                  key={tickerItem}
                  positionType={['right', 'bottom']}
                  sizeType={'small'}>
                  <Chip
                    label={tickerItem}
                    color={getRandomColor()}
                    onItemClick={triggerSearchTicker}
                  />
                </Spacer>
              ))}
            </S.RowContainer>
          </Spacer>
        )}
        {/* endregion */}
      </S.Container>
    </SafeAreaView>
  );
};

export default memo(CompanyDetails);
