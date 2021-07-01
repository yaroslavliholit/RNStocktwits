import React from 'react';
import {storiesOf} from '@storybook/react-native';

import StorybookSpacer from '../StorybookSpacer';
import InputField from './index';
import Icon from '../Icon';

storiesOf('InputField', module)
  .addDecorator(getStory => <StorybookSpacer>{getStory()}</StorybookSpacer>)
  .add('Default', () => <InputField placeholder={'Search'} withBorder />)
  .add('With Icon', () => (
    <InputField
      placeholder={'Search'}
      withBorder
      renderLeftIcon={
        <Icon type={'search'} width={15} height={15} fill={'#cccccc'} />
      }
    />
  ));
