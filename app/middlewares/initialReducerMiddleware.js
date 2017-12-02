export default function initReducerMiddleware({ dispatch }) {
  return next =>
    (action) => {
      if (action.type === 'AUTH_REQUEST') {
        const credentials = action.payload;
        // Temp mock
        const authData = {
          isAuthorised: true,
          username: 'NativeWriter',
          position: 'Junior Software Developer',
        };

        return dispatch({
          type: 'AUTH_RESPONSE',
          payload: authData,
        });
      }
      return next(action);
    };
}
