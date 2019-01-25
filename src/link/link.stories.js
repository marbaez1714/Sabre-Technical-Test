import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../link';

storiesOf('Link', module)
  .add('Default', () => (
    <Link url="http://www.google.com">Google</Link>
  )
);
