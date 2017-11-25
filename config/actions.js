export default function mapActionsToProps(dispatch) {
  return {
    initRequest: () => dispatch({
      type: 'INITIAL_REQUEST',
    }),
  };
}
