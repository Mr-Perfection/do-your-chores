import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import history from './history';
import reducers from './reducers';

export default (initialState = {}) => {
  let middleware = applyMiddleware(thunk, routerMiddleware(history));

  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  const store = createStore(reducers, initialState, middleware);
  console.log('store is', store);
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // hot reloading for Redux
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
};
