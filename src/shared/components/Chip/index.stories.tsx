import React from 'react';
import {storiesOf} from '@storybook/react-native';

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
  ));
