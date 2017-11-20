import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import initialReducer from './reducers/initialReducer';
import initialReducerMiddleware from './middlewares/initialReducerMiddleware';

const composeEnhancers = composeWithDevTools({ realtime: true });

const store = createStore(
  combineReducers({
    init: initialReducer,
  }),
  composeEnhancers(applyMiddleware(initialReducerMiddleware)),
);

export default store;
