/**
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './src/components/App';
import { name as appName } from './app.json';
import configureStore from './src/store/configureStore'

const store = configureStore()

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp);
