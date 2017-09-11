import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import history from './history';
import './index.css';
import App from './components/app';
import configureStore from './store';
import registerServiceWorker from './util/register-service-worker';

const store = configureStore();
const rootElement = document.getElementById('root');

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <div style={{ zIndex: '-3',
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%),no-repeat'}} />
          <Component />
        </div>
      </ConnectedRouter>
    </Provider>,
    rootElement,
  );
}

if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(require('./components/app').default);
  });
}

registerServiceWorker();

render(App);
