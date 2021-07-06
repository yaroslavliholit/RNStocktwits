import React, {memo} from 'react';
import {useTheme} from 'styled-components';

import useDrawerNavigation from '../../hocs/useDrawerNavigation';
import useTrackInputFocus from '../../hooks/useTrackInputFocus';
import SearchWithSuggestions from '../../containers/SearchWithSuggestions';
import Icon from '../Icon';
import * as S from './styles';

const Header = () => {
  // region ********** DATA **********

  const {colors} = useTheme();
  const {isFocus, getTrackInputFocusProps} = useTrackInputFocus();
  const {openDrawer} = useDrawerNavigation();
  // endregion

  // region ********** JSX **********
  return (
    <S.Container>
      {!isFocus && (
        <S.MenuButton onPress={openDrawer}>
          <Icon
            type={'menu'}
            width={15}
            height={15}
            fill={colors.ui.secondary}
          />
        </S.MenuButton>
      )}
      <S.SearchArea isSearchFocused={isFocus}>
        <SearchWithSuggestions {...getTrackInputFocusProps()} />
      </S.SearchArea>
    </S.Container>
  );
  // endregion
};

export default memo(Header);
