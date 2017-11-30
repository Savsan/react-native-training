import { createAction } from 'redux-actions';

const initRequest = createAction('AUTH_REQUEST');
const openMainScreenModal = createAction('OPEN_MAINSCREEN_MODAL');

export { initRequest, openMainScreenModal };
