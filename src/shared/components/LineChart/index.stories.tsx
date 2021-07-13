import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Dimensions} from 'react-native';

import LineChart from './';
import storybookSpacerDecorator from '../../hocs/storybookSpacerDecorator';

const POINTS = [
  {x: 0, y: 120},
  {x: 20, y: 60},
  {x: 40, y: 80},
  {x: 60, y: 20},
  {x: 80, y: 80},
  {x: 100, y: 80},
  {x: 120, y: 60},
  {x: 140, y: 100},
];

storiesOf('LineChart', module)
  .addDecorator(storybookSpacerDecorator)
  .add('Default', () => (
    <LineChart
      data={POINTS}
      strokeColor={'tomato'}
      width={Dimensions.get('window').width - 30}
      height={200}
    />
  ));
