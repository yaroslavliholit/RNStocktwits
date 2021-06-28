import React, {FC, memo} from 'react';
import {TouchableOpacityProps} from 'react-native';

import * as S from './styles';

export type ButtonVariant = 'default' | 'primary';

export interface Props extends TouchableOpacityProps {
  label: string;
  variant?: ButtonVariant;
}

const Button: FC<Props> = props => {
  const {variant = 'default', label} = props;

  return (
    <S.Button {...props}>
      <S.Label variant={variant}>{label}</S.Label>
    </S.Button>
  );
};

export default memo(Button);
