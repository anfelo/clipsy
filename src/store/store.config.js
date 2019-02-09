import { createStore, compose } from 'redux';
import reducer from './reducer.combined';
import throttle from 'lodash/throttle';

// Local storage
import { loadState, saveState } from '../localStorage';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default function configureStore() {
  const persistedState = loadState();
  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers()
  );

  store.subscribe(throttle(() => {
    saveState({
      clipList: {
        data: store.getState().clipList.data
      }
    });
  }, 1000));

  return store;
}