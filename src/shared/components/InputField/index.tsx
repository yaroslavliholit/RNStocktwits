import React, {memo, FC, ReactNode} from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

export interface Props extends TextInputProps {
  withBorder?: boolean;
  renderLeftIcon?: ReactNode;
}

const InputField: FC<Props> = props => {
  const {renderLeftIcon} = props;

  return (
    <S.Container {...props}>
      {renderLeftIcon && <S.IconContainer>{renderLeftIcon}</S.IconContainer>}
      <S.InputField {...props} />
    </S.Container>
  );
};

export default memo(InputField);
