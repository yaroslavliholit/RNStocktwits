import React from 'react';
import {storiesOf} from '@storybook/react-native';

import storybookSpacerDecorator from '../../hocs/storybookSpacerDecorator';
import Typography from './';

storiesOf('Typography', module)
  .addDecorator(storybookSpacerDecorator)
  .add('Label', () => <Typography variant={'label'}>Email</Typography>)
  .add('Heading', () => <Typography variant={'heading'}>Title</Typography>)
  .add('Subtitle', () => (
    <Typography variant={'subtitle'}>Sub title</Typography>
  ))
  .add('Danger', () => <Typography variant={'danger'}>- 0.5 %</Typography>)
  .add('Success', () => <Typography variant={'success'}>0.5 %</Typography>)
  .add('Link', () => <Typography variant={'link'}>example.com</Typography>);
