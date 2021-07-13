import React from 'react';
import {storiesOf} from '@storybook/react-native';

import storybookSpacerDecorator from '../../hocs/storybookSpacerDecorator';
import Chip from './';

storiesOf('Chip', module)
  .addDecorator(storybookSpacerDecorator)
  .add('Default', () => <Chip label={'TSLA'} color={'lightgreen'} />)
  .add('Large text', () => (
    <Chip label={'Consumer discretionary'} color={'skyblue'} />
  ))
  .add('With round corners', () => (
    <Chip label={'TTM'} withRoundCorners color={'tomato'} />
  ));
