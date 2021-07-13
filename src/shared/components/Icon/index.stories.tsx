import React from 'react';
import {storiesOf} from '@storybook/react-native';

import storybookSpacerDecorator from '../../hocs/storybookSpacerDecorator';
import Icon, {IconType} from './';
import Spacer from '../Spacer';

const DEFAULT_PARAMS = {
  width: 15,
  height: 15,
  fill: '#000000',
};

const ICONS_TYPES = [
  'trash',
  'menu',
  'search',
  'arrow-right',
  'arrow-up',
  'arrow-down',
  'arrow-left',
] as IconType[];

storiesOf('Icon', module)
  .addDecorator(storybookSpacerDecorator)
  .add('All icons', () => (
    <>
      {ICONS_TYPES.map(e => (
        <Spacer positionType={'bottom'} sizeType={'medium'}>
          <Icon key={e} type={e} {...DEFAULT_PARAMS} />
        </Spacer>
      ))}
    </>
  ));
