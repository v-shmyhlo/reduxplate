import { createStore } from 'redux';
import appReducer from '../reducers/app';

export default function configureStore(initialState) {
  const store = createStore(appReducer, initialState);

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store;
}
