import React, {memo, FC, ReactNode} from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

export interface Props extends TextInputProps {
  withBorder?: boolean;
  renderLeftNode?: ReactNode;
  renderRightNode?: ReactNode;
}

const InputField: FC<Props> = props => {
  const {renderLeftNode, renderRightNode} = props;

  return (
    <S.Container>
      {renderLeftNode && <S.IconContainer>{renderLeftNode}</S.IconContainer>}
      <S.InputField {...props} />
      {renderRightNode && <S.IconContainer>{renderRightNode}</S.IconContainer>}
    </S.Container>
  );
};

export default memo(InputField);
