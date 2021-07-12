import React, {memo, PropsWithChildren} from 'react';
import {TextProps} from 'react-native';

import * as S from './styles';

export interface Props extends TextProps {
  variant:
    | 'heading'
    | 'subtitle'
    | 'label'
    | 'button'
    | 'important'
    | 'danger'
    | 'success'
    | 'link';
}

const Typography = (props: PropsWithChildren<Props>) => (
  <S.Typography {...props}>{props.children}</S.Typography>
);

export default memo(Typography);
