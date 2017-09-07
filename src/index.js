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
