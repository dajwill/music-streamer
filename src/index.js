import React from 'react';
import ReactDOM from 'react-dom';
import { store$ } from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const dom = document.getElementById('root')
store$.subscribe((state) =>
    ReactDOM.render(<App {...state} />, dom));
registerServiceWorker();
