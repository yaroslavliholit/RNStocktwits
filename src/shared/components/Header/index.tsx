import React, {memo, FC} from 'react';

import useTrackInputFocus from '../../hooks/useTrackInputFocus';
import SearchWithSuggestions from '../../containers/SearchWithSuggestions';

import * as S from './styles';

interface Props {
  renderLeftIcon?: JSX.Element;
  onButtonPress?: () => void;
}

const Header: FC<Props> = ({renderLeftIcon, onButtonPress}) => {
  // region ********** DATA **********

  const {isFocus, getTrackInputFocusProps} = useTrackInputFocus();

  // endregion

  // region ********** JSX **********
  return (
    <S.Container>
      {!isFocus && (
        <S.MenuButton onPress={onButtonPress}>{renderLeftIcon}</S.MenuButton>
      )}
      <S.SearchArea isSearchFocused={isFocus}>
        <SearchWithSuggestions {...getTrackInputFocusProps()} />
      </S.SearchArea>
    </S.Container>
  );
  // endregion
};

export default memo(Header);
