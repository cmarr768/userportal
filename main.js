import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './src/components/App';
import PortalApp from './src/reducers/portalApp';
import DataService from './src/services/dataService';

let store = createStore(PortalApp, {}, compose(applyMiddleware(DataService)));
console.log('store state after initialization:', store.getState());
store.dispatch({ type: 'GET_IMGUR_MOCK_DATA' });

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);