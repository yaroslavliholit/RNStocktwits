import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import StorybookSpacer from '../StorybookSpacer';
import Chip from './';

storiesOf('Chip', module)
  .addDecorator(getStory => <StorybookSpacer>{getStory()}</StorybookSpacer>)
  .add('Default', () => <Chip label={'TSLA'} color={'lightgreen'} />)
  .add('Large text', () => (
    <Chip label={'Consumer discretionary'} color={'skyblue'} />
  ))
  .add('With round corners', () => (
    <Chip label={'TTM'} withRoundCorners color={'blue'} />
  ))
  .add('Deletable', () => (
    <Chip
      label={'TSLA'}
      color={'tomato'}
      deletable
      onDelete={action('Deleted')}
    />
  ));
