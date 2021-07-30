import React, {useCallback, memo, FC} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import InputField from '../../components/InputField';
import Icon from '../../components/Icon';
import SuggestionsList from '../../components/SuggestionsList';
import Typography from '../../components/Typography';
import Spacer from '../../components/Spacer';
import {useSearchTickers} from '../../../store/search/hooks';
import * as S from './styles';

interface Props {
  isFocus: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

const SearchWithSuggestions: FC<Props> = ({isFocus, onFocus, onBlur}) => {
  // region ********** DATA **********
  const {navigate} = useNavigation();
  const {colors} = useTheme();
  const {
    loading,
    searchQuery,
    suggestions,
    searchEmpty,
    getSearchTickersProps,
    handleClearSuggestions,
    handleClearSearchQuery,
  } = useSearchTickers();
  // endregion

  // region ********** CALLBACKS **********
  const handleSelectSearchItem = useCallback(
    ({ticker}: Ticker) => {
      navigate('CompanyDetails', {
        ticker,
      });

      handleClearSuggestions();
    },
    [navigate, handleClearSuggestions],
  );
  // endregion

  // region ********** JSX **********
  return (
    <>
      <InputField
        {...getSearchTickersProps()}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={'Search symbols or companies'}
        placeholderTextColor={colors.ui.secondary}
        renderLeftNode={
          <Icon
            type={'search'}
            width={15}
            height={15}
            fill={colors.ui.secondary}
          />
        }
        renderRightNode={
          <>
            {Boolean(!loading && isFocus && searchQuery) && (
              <TouchableOpacity onPress={handleClearSearchQuery}>
                <Icon
                  type={'cancel'}
                  width={12}
                  height={12}
                  fill={colors.ui.secondary}
                />
              </TouchableOpacity>
            )}
            {loading && <ActivityIndicator size={'small'} />}
          </>
        }
      />
      {Boolean(isFocus && searchEmpty) && (
        <S.SuggestionsWrapper>
          <Spacer
            positionType={['top', 'left', 'right', 'bottom']}
            sizeType={'medium'}>
            <Typography variant={'label'}>No Result Found</Typography>
          </Spacer>
        </S.SuggestionsWrapper>
      )}
      {suggestions && isFocus && (
        <S.SuggestionsWrapper>
          <SuggestionsList
            items={suggestions}
            onItemSelect={handleSelectSearchItem}
          />
        </S.SuggestionsWrapper>
      )}
    </>
  );
  // endregion
};

export default memo(SearchWithSuggestions);
