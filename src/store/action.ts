import store from './store';
import { ActionTypes } from './types/actionTypes';

import { FavoriteImagesType, ThemeSwitch } from './types/applicationState';

export const ToggleTheme= (payload: ThemeSwitch) => {
  store.dispatch({ type: ActionTypes.ToggleTheme, payload: payload});
};

export const ToggleFavoriteImage = (payload: FavoriteImagesType) => {
  store.dispatch({ type: ActionTypes.ToggleFavoriteImage, payload: payload});
}
