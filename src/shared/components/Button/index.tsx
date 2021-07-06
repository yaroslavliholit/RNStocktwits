import React, {memo, PropsWithChildren} from 'react';
import {TouchableOpacityProps} from 'react-native';

import * as S from './styles';

export type ButtonVariant = 'default' | 'primary';

export interface Props extends TouchableOpacityProps {
  label?: string;
  variant?: ButtonVariant;
}

const Button = (props: PropsWithChildren<Props>) => {
  const {variant = 'default', label, children} = props;

  return (
    <S.Button {...props}>
      {children ?? <S.Label variant={variant}>{label}</S.Label>}
    </S.Button>
  );
};

export default memo(Button);
