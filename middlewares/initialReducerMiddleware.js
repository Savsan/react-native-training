export default function initReducerMiddleware({ dispatch }) {
  return next =>
    (action) => {
      if (action.type === 'AUTH_REQUEST') {
        return dispatch({
          type: 'AUTH_RESPONSE',
          payload: { isAuthorised: true },
        });
      }
      return next(action);
    };
}
