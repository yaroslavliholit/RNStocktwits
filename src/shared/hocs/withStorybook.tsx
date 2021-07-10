import React, {ComponentType, PropsWithChildren} from 'react';

import ENV from '../constants/env';
import StorybookUI from '../../../storybook';

const IS_STORYBOOK_ENABLED = ENV.LOAD_STORYBOOK === 'true';

function withStorybook<T extends {}>(WrapperComponent: ComponentType<T>) {
  return (props: PropsWithChildren<T>) => {
    const Component = IS_STORYBOOK_ENABLED ? StorybookUI : WrapperComponent;
    return <Component {...props} />;
  };
}

export default withStorybook;
