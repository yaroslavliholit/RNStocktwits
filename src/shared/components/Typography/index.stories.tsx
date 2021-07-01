import React from 'react';
import {storiesOf} from '@storybook/react-native';

import StorybookSpacer from '../StorybookSpacer';
import Typography from './';

storiesOf('Typography', module)
  .addDecorator(getStory => <StorybookSpacer>{getStory()}</StorybookSpacer>)
  .add('Label', () => <Typography variant={'label'}>Email</Typography>);
