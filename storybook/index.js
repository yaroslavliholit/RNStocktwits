import {AppRegistry} from 'react-native';
import {
  getStorybookUI,
  configure,
  addDecorator,
  addParameters,
} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import {withTheme} from 'storybook-addon-ondevice-styled-theme';

import theme from '../src/app/theme';
import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator(withTheme);

addParameters({
  themes: [{name: 'Default theme', ...theme}],
});

// import stories
configure(() => {
  require('../src/shared/components/Button/index.stories');
  require('../src/shared/components/Chip/index.stories');
  require('../src/shared/components/Typography/index.stories');
  require('../src/shared/components/InputField/index.stories');
  require('../src/shared/components/Icon/index.stories');
  require('../src/shared/components/LineChart/index.stories');
  require('../src/shared/components/ShowMoreText/index.stories');
  require('../src/shared/components/SuggestionsList/index.stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
