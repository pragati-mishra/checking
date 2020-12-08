/* eslint-disable prettier/prettier */
/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import configurestore from './src/store';

const store = configurestore();

const pinngg = () =>
<Provider store ={store}>
    <App />
</Provider>;

AppRegistry.registerComponent(appName, () => pinngg);
