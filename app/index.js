import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import { AlertProvider } from './components/Alert';
import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57866',
    $primaryPurple: '#9E768F',
    $primaryGreen: '#00BD9D',

    $white: '#FFF',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434'
});

export default () => (
    <Provider store={store}>
        <AlertProvider>
            <Navigator/>
        </AlertProvider>
    </Provider>
);