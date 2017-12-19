import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const DEVTOOLS_COMPOSER = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
const composeWithDevTools = (typeof window === 'object' &&
                            typeof window[DEVTOOLS_COMPOSER] === 'function')
  ? window[DEVTOOLS_COMPOSER]
  : compose;

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
