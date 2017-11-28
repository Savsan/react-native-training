const initialState = {
  isOpenedModal: false,
};

export default function mainScreenReducer(state = initialState, action) {
  switch (action.type) {
  case 'OPEN_MAINSCREEN_MODAL': {
    return Object.assign({}, state, {
      isOpenedModal: true,
    });
  }
  case 'CLOSE_MAINSCREEN_MODAL': {
    return Object.assign({}, state, {
      isOpenedModal: false,
    });
  }
  default: {
    return state;
  }
  }
}
