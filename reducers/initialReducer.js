const initialState = {
  isAuthorised: false,
};

export default function initialReducer(state = initialState, action) {
  switch (action.type) {
  case 'AUTH_RESPONSE': {
    return Object.assign({}, state, action.payload);
  }
  default: {
    return state;
  }
  }
}
