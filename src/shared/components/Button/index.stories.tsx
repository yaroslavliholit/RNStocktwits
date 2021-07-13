import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import storybookSpacerDecorator from '../../hocs/storybookSpacerDecorator';
import Button from './';
import Icon from '../Icon';

storiesOf('Button', module)
  .addDecorator(storybookSpacerDecorator)
  .add('Default', () => (
    <Button label={'Press me'} onPress={action('pressed')} />
  ))
  .add('With Icon', () => (
    <Button variant={'primary'} label={'Press me'}>
      <Icon type={'search'} fill={'#ffffff'} width={15} height={15} />
    </Button>
  ))
  .add('Primary', () => (
    <Button
      variant={'primary'}
      label={'Press me'}
      onPress={action('pressed')}
    />
  ));
