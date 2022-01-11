import { ToggleFavoriteImage } from "../action";
import { FavoriteImagesType } from "./applicationState";

import { ThemeSwitch } from "./applicationState";


export interface ToggleTheme {
  type: ActionTypes.ToggleTheme;
  payload: ThemeSwitch;
}

export interface ToggleFavoriteImage {
  type: ActionTypes.ToggleFavoriteImage;
  payload: FavoriteImagesType;
}

export enum ActionTypes {
  ToggleTheme = 'TOGGLE_THEME',
  ToggleFavoriteImage = 'TOGGLE_FAVORITE_IMAGE'
}

export type Action = ToggleTheme | ToggleFavoriteImage;


