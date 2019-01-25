import { configure } from '@storybook/react';
const stories = require.context('../src', true, /\.stories\.js$/);

configure(() => stories.keys().forEach((filename) => stories(filename)), module);
