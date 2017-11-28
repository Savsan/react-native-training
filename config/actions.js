export default function mapActionsToProps(dispatch) {
  return {
    initRequest: () => dispatch({
      type: 'AUTH_REQUEST',
    }),
    openMainScreenModal: () => dispatch({
      type: 'OPEN_MAINSCREEN_MODAL',
    }),
    closeMainScreenModal: () => dispatch({
      type: 'CLOSE_MAINSCREEN_MODAL',
    }),
    dispatch,
  };
}
