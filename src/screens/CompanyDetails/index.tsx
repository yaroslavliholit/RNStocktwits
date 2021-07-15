import React, {memo, FC, useCallback} from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
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
import ShowMoreText from '../../shared/components/ShowMoreText';
import TickerMap from '../../shared/containers/TickerMap';
import * as S from './styles';

type CompanyDetailsNavigationProp = RouteProp<
  SearchNavigatorParams,
  'CompanyDetails'
>;

interface Props {
  route: CompanyDetailsNavigationProp;
}

const CompanyDetails: FC<Props> = ({route}) => {
  // region ********** DATA **********
  const {colors} = useTheme();
  const {navigate} = useNavigation();
  const {ticker: tickerName} = route.params;

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
  } = useFetchTickerDetails(tickerName);
  // endregion

  // region ********** CALLBACKS **********
  const handleHistoryBack = useCallback(() => {
    navigate('Home');
  }, [navigate]);
  // endregion

  if (!companyDetails) {
    return null;
  }

  // region ********** JSX **********
  if (isAnyLoading) {
    return (
      <S.SpinnerWrapper>
        <ActivityIndicator size={'large'} color={colors.brand.primary} />
      </S.SpinnerWrapper>
    );
  }

  return (
    <SafeAreaView>
      <Header
        onButtonPress={handleHistoryBack}
        renderLeftIcon={
          <Icon
            type={'arrow-left'}
            width={15}
            height={15}
            fill={colors.ui.secondary}
          />
        }
      />
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
        {priceChangeDifference && priceChangeDifferencePercent && (
          <Spacer positionType={['top', 'bottom']} sizeType={'medium'}>
            <Spacer positionType={'bottom'} sizeType={'small'}>
              <Typography variant={'heading'}>${lastAvailablePrice}</Typography>
            </Spacer>
            <S.RowContainer>
              <Spacer positionType={'right'} sizeType={'small'}>
                <Typography variant={isPriceGoUp ? 'success' : 'danger'}>
                  {priceChangeDifference}
                </Typography>
              </Spacer>
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
            </S.RowContainer>
          </Spacer>
        )}
        {/* endregion */}

        {/* region ********** Chart ********** */}
        {aggregatesChartData && (
          <Spacer positionType={'bottom'} sizeType={'medium'}>
            <LineChart
              width={350}
              height={150}
              data={aggregatesChartData}
              strokeColor={
                isPriceGoUp ? colors.text.success : colors.text.error
              }
            />
          </Spacer>
        )}
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

        {/* region ********** Map ********** */}
        <Spacer positionType={'bottom'} sizeType={'medium'}>
          <TickerMap ticker={companyDetails} />
        </Spacer>
        {/* endregion */}

        {/* region ********** Tags ********** */}
        {companyDetails.tags?.length && (
          <Spacer positionType={'bottom'} sizeType={'medium'}>
            <Spacer positionType={'bottom'} sizeType={'medium'}>
              <Typography variant="subtitle">Tags</Typography>
            </Spacer>

            <S.RowContainer>
              {companyDetails.tags.map(tag => (
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
        {companyDetails.similar?.length && (
          <Spacer positionType={'bottom'} sizeType={'medium'}>
            <Spacer positionType={'bottom'} sizeType={'medium'}>
              <Typography variant="subtitle">Related Stocks</Typography>
            </Spacer>

            <S.RowContainer>
              {companyDetails.similar.map(tickerItem => (
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
  // endregion
};

export default memo(CompanyDetails);
