import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import StorybookSpacer from '../StorybookSpacer';
import Button from './';

storiesOf('Button', module)
  .addDecorator(getStory => <StorybookSpacer>{getStory()}</StorybookSpacer>)
  .add('Default', () => (
    <Button label={'Press me'} onPress={action('pressed')} />
  ))
  .add('Primary', () => (
    <Button
      variant={'primary'}
      label={'Press me'}
      onPress={action('pressed')}
    />
  ));
