export default function initReducerMiddleware({ dispatch }) {
  return next =>
    (action) => {
      if (action.type === 'INITIAL_REQUEST') {
        return dispatch({
          type: 'RECIEVE_INIT_DATA',
          payload: { data: 'newData' },
        });
      }
      return next(action);
    };
}
