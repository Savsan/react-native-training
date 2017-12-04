import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import initialReducer from '../reducers/initialReducer';
import initialReducerMiddleware from '../middlewares/initialReducerMiddleware';

import mainScreenReducer from '../reducers/mainScreenReducer';

import navReducer from '../reducers/navReducer';

const DEVTOOLS_COMPOSER = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
const composeWithDevTools = (typeof window === 'object' &&
                            typeof window[DEVTOOLS_COMPOSER] === 'function')
  ? window[DEVTOOLS_COMPOSER]
  : compose;

const store = createStore(
  combineReducers({
    auth: initialReducer,
    nav: navReducer,
    mainScreen: mainScreenReducer,
  }),
  composeWithDevTools(applyMiddleware(initialReducerMiddleware)),
);

export default store;
