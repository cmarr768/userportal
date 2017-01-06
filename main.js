import React from 'react';
import { render } from 'react-dom';
import App from './src/components/App';

console.log('rendering app');

render(
    <div>
        <App />
    </div>,
    document.getElementById('app')
);