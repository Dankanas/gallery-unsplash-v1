import store from './store';
import { ActionTypes } from './types/actionTypes';

export const ToggleLightMode = (payload: null): void => {
  store.dispatch({ type: ActionTypes.ToggleLightMode, payload: payload});
};
