import React from 'react';
import {storiesOf} from '@storybook/react-native';

import SuggestionsList from './';
import storybookSpacerDecorator from '../../hocs/storybookSpacerDecorator';

const ITEMS = [
  {
    ticker: 'TEST',
    name: 'Test',
    market: 'qwerty123',
    locale: 'qwerty123',
    currency: 'qwerty123',
    active: 'qwerty123',
    primaryExch: 'qwerty123',
    type: 'qwerty123',
    codes: {smth: 'test ..'},
    updated: 'qwerty123',
    url: 'qwerty123',
  },
  {
    ticker: 'HELLO',
    name: 'World',
    market: 'qwerty123',
    locale: 'qwerty123',
    currency: 'qwerty123',
    active: 'qwerty123',
    primaryExch: 'qwerty123',
    type: 'qwerty123',
    codes: {smth: 'test ..'},
    updated: 'qwerty123',
    url: 'qwerty123',
  },
];

storiesOf('SuggestionsList', module)
  .addDecorator(storybookSpacerDecorator)
  .add('Default', () => <SuggestionsList items={ITEMS} />);
