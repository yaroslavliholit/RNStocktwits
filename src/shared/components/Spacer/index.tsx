import React, {memo, PropsWithChildren} from 'react';

import * as S from './styles';

export type SpacerPosition = 'top' | 'right' | 'bottom' | 'left';
export type SpacerSize = 'small' | 'medium' | 'large';

export interface Props {
  positionType: SpacerPosition;
  sizeType: SpacerSize;
}

const Spacer = (props: PropsWithChildren<Props>) => <S.Spacer {...props} />;

export default memo(Spacer);
