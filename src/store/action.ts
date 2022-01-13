import store from './store';
import { ActionTypes } from './types/actionTypes';

import { FavoriteImagesType, ThemeSwitch } from './types/applicationState';

export const ToggleTheme= (payload: void) => {
  store.dispatch({ type: ActionTypes.ToggleTheme, payload: payload});
};

export const ToggleFavoriteImage = (payload: FavoriteImagesType) => {
  store.dispatch({ type: ActionTypes.ToggleFavoriteImage, payload: payload});
}

export const SubmitSearchBar = (payload: string) => {
  store.dispatch({ type: ActionTypes.SubmitSearchBar, payload: payload});
}

export const ToggleImageModal = (payload: boolean) => {
  store.dispatch({ type: ActionTypes.ToggleImageModal, payload: payload})
}