import React, {memo, FC, ReactNode} from 'react';

import Typography from '../Typography';
import * as S from './styles';

export interface Props {
  label: string;
  leftNode?: ReactNode;
  rightNode?: ReactNode;
}

const ListItem: FC<Props> = props => {
  const {label, leftNode, rightNode} = props;

  return (
    <S.Container {...props}>
      {leftNode && <S.IconContainer>{leftNode}</S.IconContainer>}
      <Typography variant={'subtitle'}>{label}</Typography>
      {rightNode && <S.IconContainer>{rightNode}</S.IconContainer>}
    </S.Container>
  );
};

export default memo(ListItem);
