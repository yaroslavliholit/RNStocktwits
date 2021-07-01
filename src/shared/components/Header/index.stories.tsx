import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Spacer from '../Spacer';
import Header from './';

storiesOf('Header', module)
  .addDecorator(getStory => (
    <Spacer positionType={'top'} sizeType={'medium'}>
      {getStory()}
    </Spacer>
  ))
  .add('Default', () => <Header />);
