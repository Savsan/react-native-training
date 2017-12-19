import { handleActions } from 'redux-actions';

const initialState = null;

const weatherReducer = handleActions({
  RECIEVE_WEATHER_DATA: (state, action) => ({ ...state, ...action.payload }),
}, initialState);

export default weatherReducer;
