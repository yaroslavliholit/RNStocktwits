import React, {memo, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useSearchTickers} from '../../../store/search/hooks';
import useDrawerNavigation from '../../hocs/useDrawerNavigation';
import useTrackInputFocus from '../../hooks/useTrackInputFocus';
import * as S from './styles';
import Icon from '../Icon';
import InputField from '../InputField';
import SuggestionsList from '../SuggestionsList';

const Header = () => {
  // region ********** DATA **********
  const navigation = useNavigation();
  const {isFocus, getTrackInputFocusProps} = useTrackInputFocus();
  const {openDrawer} = useDrawerNavigation();
  const {suggestions, getSearchTickersProps} = useSearchTickers();
  // endregion

  // region ********** CALLBACKS **********
  const handleNavigateToDetails = useCallback(
    ({name}: Ticker) => {
      navigation.navigate('CompanyDetails', {
        companyName: name,
      });
    },
    [navigation],
  );
  // endregion

  // region ********** JSX **********
  return (
    <S.Header>
      <S.Container>
        {!isFocus && (
          <S.Menu>
            <TouchableOpacity onPress={openDrawer}>
              <Icon type={'menu'} width={15} height={15} fill={'#000000'} />
            </TouchableOpacity>
          </S.Menu>
        )}
        <S.Search>
          <InputField
            {...getTrackInputFocusProps()}
            {...getSearchTickersProps()}
            placeholder={'Search symbols or companies'}
            renderLeftIcon={
              <Icon type={'search'} width={15} height={15} fill={'#000000'} />
            }
          />
        </S.Search>
      </S.Container>
      {suggestions && (
        <SuggestionsList
          items={suggestions}
          onItemSelect={handleNavigateToDetails}
        />
      )}
    </S.Header>
  );
  // endregion
};

export default memo(Header);
