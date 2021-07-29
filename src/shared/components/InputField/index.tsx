import React, {memo, FC, ReactNode} from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

export interface Props extends TextInputProps {
  withBorder?: boolean;
  renderLeftIcon?: ReactNode;
  renderRightIcon?: ReactNode;
}

const InputField: FC<Props> = props => {
  const {renderLeftIcon, renderRightIcon} = props;

  return (
    <S.Container>
      {renderLeftIcon && <S.IconContainer>{renderLeftIcon}</S.IconContainer>}
      <S.InputField {...props} />
      {renderRightIcon && <S.IconContainer>{renderRightIcon}</S.IconContainer>}
    </S.Container>
  );
};

export default memo(InputField);
