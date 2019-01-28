import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoButton from './infoButton';

storiesOf('Test Files', module)
    .add('infoButton', () => (
        <InfoButton />
    )
    );
