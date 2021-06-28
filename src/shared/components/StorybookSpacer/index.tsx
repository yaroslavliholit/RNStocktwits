import React, {PropsWithChildren, memo} from 'react';
import {Container} from './styles';

const StorybookSpacer = ({children, ...rest}: PropsWithChildren<{}>) => (
  <Container {...rest}>{children}</Container>
);

export default memo(StorybookSpacer);
