import React, {ComponentType, PropsWithChildren} from 'react';

import StorybookUI from '../../../storybook';
import {LOAD_STORYBOOK} from 'react-native-dotenv';

const IS_STORYBOOK_DISABLED = LOAD_STORYBOOK === 'false';

function withStorybook<T extends {}>(WrapperComponent: ComponentType<T>) {
  return (props: PropsWithChildren<T>) => {
    const Component = IS_STORYBOOK_DISABLED ? WrapperComponent : StorybookUI;
    return <Component {...props} />;
  };
}

export default withStorybook;
