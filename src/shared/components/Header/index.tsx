import React, {memo, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';

import useTrackInputFocus from '../../hooks/useTrackInputFocus';
import Icon from '../Icon';
import InputField from '../InputField';
import * as S from './styles';

const Header = () => {
  const {isFocus, getTrackInputFocusProps} = useTrackInputFocus();

  const handleMenuClick = useCallback(() => {
    // add code here ...
  }, []);

  return (
    <S.Container>
      {!isFocus && (
        <S.Menu>
          <TouchableOpacity onPress={handleMenuClick}>
            <Icon type={'menu'} width={15} height={15} fill={'#cccccc'} />
          </TouchableOpacity>
        </S.Menu>
      )}
      <S.Search>
        <InputField
          {...getTrackInputFocusProps()}
          placeholder={'Search symbols or companies'}
          renderLeftIcon={
            <Icon type={'search'} width={15} height={15} fill={'#cccccc'} />
          }
        />
      </S.Search>
    </S.Container>
  );
};

export default memo(Header);
