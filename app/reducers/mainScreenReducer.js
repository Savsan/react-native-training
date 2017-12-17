import { handleActions } from 'redux-actions';

const initialState = {
  isOpenedModal: false,
};

const mainScreenReducer = handleActions({
  TOGGLE_MAINSCREEN_MODAL: (state, action) => ({ ...state, isOpenedModal: !state.isOpenedModal }),
}, initialState);

export default mainScreenReducer;
