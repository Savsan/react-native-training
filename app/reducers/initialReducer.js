import { handleActions } from 'redux-actions';

const initialState = {
  isAuthorised: false,
};

const initialReducer = handleActions({
  AUTH_RESPONSE: (state, action) => Object.assign({}, state, action.payload),
}, initialState);

export default initialReducer;
