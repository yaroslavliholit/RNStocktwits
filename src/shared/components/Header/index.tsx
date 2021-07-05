import React, {memo, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useSearchTickers} from '../../../store/search/hooks';
import useDrawerNavigation from '../../hocs/useDrawerNavigation';
import useTrackInputFocus from '../../hooks/useTrackInputFocus';
import Icon from '../Icon';
import InputField from '../InputField';
import SuggestionsList from '../SuggestionsList';
import * as S from './styles';

// TODO: add separate Search component

const Header = () => {
  // region ********** DATA **********
  const {navigate} = useNavigation();
  const {isFocus, getTrackInputFocusProps} = useTrackInputFocus();
  const {openDrawer} = useDrawerNavigation();
  const {suggestions, getSearchTickersProps, handleClearSuggestions} =
    useSearchTickers();
  const isSuggestionsExist = Boolean(suggestions && suggestions.length);
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
    <S.Header withSearchResults={isSuggestionsExist}>
      <S.Container>
        {!isFocus && (
          <S.MenuButton onPress={openDrawer}>
            <Icon type={'menu'} width={15} height={15} fill={'#000000'} />
          </S.MenuButton>
        )}
        <S.SearchArea>
          <InputField
            {...getTrackInputFocusProps()}
            {...getSearchTickersProps()}
            placeholder={'Search symbols or companies'}
            renderLeftIcon={
              <Icon type={'search'} width={15} height={15} fill={'#000000'} />
            }
          />
        </S.SearchArea>
      </S.Container>
      {suggestions && (
        <SuggestionsList
          items={suggestions}
          onItemSelect={handleSelectSearchItem}
        />
      )}
    </S.Header>
  );
  // endregion
};

export default memo(Header);
