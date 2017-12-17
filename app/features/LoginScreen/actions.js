import { createAction } from 'redux-actions';

// const initRequest = createAction('AUTH_REQUEST');
const authRersponse = createAction('AUTH_RESPONSE');

function authRequest(username, password) {
  return (dispatch) => {
    // Temp mock
    const authData = {
      isAuthorised: true,
      username: 'NativeWriter',
      position: 'Junior Software Developer',
    };

    dispatch(authRersponse(authData));
  };
}

export { authRequest };
