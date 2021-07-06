import React, {memo} from 'react';

import Typography from '../Typography';
import * as S from './styles';

const ErrorIndicator = () => (
  <S.Container>
    <Typography variant={'label'}>
      Something went wrong. Please try again later.
    </Typography>
  </S.Container>
);

export default memo(ErrorIndicator);
