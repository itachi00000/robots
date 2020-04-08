import React from 'react';
import ReactDOM from 'react-dom';
//
import { Provider } from 'react-redux';
import store from './redux/store';
//
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
//
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
