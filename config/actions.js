export default function mapActionsToProps(dispatch) {
  return {
    initRequest: () => dispatch({
      type: 'AUTH_REQUEST',
    }),
  };
}
