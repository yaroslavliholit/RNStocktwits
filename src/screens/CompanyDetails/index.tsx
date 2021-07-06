import React, {memo, FC} from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import {useFetchTickerDetails} from '../../store/tickerDetails/hooks';
import {getRandomColor} from '../../shared/utils/color';
import {SearchNavigatorParams} from '../../app/navigation/SearchNavigator';
import Header from '../../shared/components/Header';
import Typography from '../../shared/components/Typography';
import Spacer from '../../shared/components/Spacer';
import Chip from '../../shared/components/Chip';
import Icon from '../../shared/components/Icon';
import LineChart from '../../shared/components/LineChart';
import * as S from './styles';
import ShowMoreText from '../../shared/components/ShowMoreText';

type CompanyDetailsNavigationProp = RouteProp<
  SearchNavigatorParams,
  'CompanyDetails'
>;

interface Props {
  route: CompanyDetailsNavigationProp;
}

const CompanyDetails: FC<Props> = ({route}) => {
  const {colors} = useTheme();
  const {ticker} = route.params;

  const {
    companyDetails,
    lastAvailablePrice,
    priceChangeDifference,
    triggerSearchTicker,
    priceChangeDifferencePercent,
    aggregatesChartData,
    companyParams,
    isPriceGoUp,
    isAnyLoading,
  } = useFetchTickerDetails(ticker);

  if (!companyDetails) {
    return null;
  }

  if (isAnyLoading) {
    return (
      <S.SpinnerWrapper>
        <ActivityIndicator size={'large'} />
      </S.SpinnerWrapper>
    );
  }

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
            {Boolean(priceChangeDifference) && (
              <Spacer positionType={'right'} sizeType={'small'}>
                <Typography variant={isPriceGoUp ? 'success' : 'danger'}>
                  {priceChangeDifference}
                </Typography>
              </Spacer>
            )}
            {Boolean(priceChangeDifferencePercent) && (
              <S.RowContainer>
                <Spacer positionType={'right'} sizeType={'small'}>
                  <Icon
                    type={isPriceGoUp ? 'arrow-up' : 'arrow-down'}
                    width={15}
                    height={15}
                    fill={isPriceGoUp ? colors.text.success : colors.text.error}
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

        {/* region ********** Chart ********** */}
        <Spacer positionType={'bottom'} sizeType={'medium'}>
          <LineChart
            width={350}
            height={150}
            data={aggregatesChartData || []}
            strokeColor={isPriceGoUp ? colors.text.success : colors.text.error}
          />
        </Spacer>
        {/* endregion */}

        {/* region ********** About ********** */}
        <Spacer positionType={'bottom'} sizeType={'medium'}>
          <Spacer positionType={'bottom'} sizeType={'medium'}>
            <Typography variant="subtitle">
              About {companyDetails.symbol}
            </Typography>
          </Spacer>

          <Spacer positionType={'bottom'} sizeType={'medium'}>
            {companyParams
              .filter(({value}) => Boolean(value))
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

        {companyDetails.description && (
          <Spacer positionType={'bottom'} sizeType={'medium'}>
            <Spacer positionType={'bottom'} sizeType={'medium'}>
              <Typography variant="subtitle">Description</Typography>
            </Spacer>

            <ShowMoreText text={companyDetails.description} />
          </Spacer>
        )}

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
