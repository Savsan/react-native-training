const initialState = {
  initState: 'Store works!!!',
};

export default function initialReducer(state = initialState, action) {
  switch (action.type) {
  case 'RECIEVE_INIT_DATA': {
    return Object.assign({}, state, action.payload);
  }
  default: {
    return state;
  }
  }
}
