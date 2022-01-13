import { ToggleFavoriteImage } from "../action";
import { FavoriteImagesType } from "./applicationState";

export interface ToggleTheme {
  type: ActionTypes.ToggleTheme;
  payload: void;
}

export interface ToggleFavoriteImage {
  type: ActionTypes.ToggleFavoriteImage;
  payload: FavoriteImagesType;
}

export interface SubmitSearchBar {
  type: ActionTypes.SubmitSearchBar;
  payload: string;
}

export interface ToggleImageModal {
  type: ActionTypes.ToggleImageModal;
  payload: boolean;
}

export enum ActionTypes {
  ToggleTheme = 'TOGGLE_THEME',
  ToggleFavoriteImage = 'TOGGLE_FAVORITE_IMAGE',
  SubmitSearchBar = 'SUBMIT_SEARCH_BAR',
  ToggleImageModal = 'TOGGLE_IMAGE_MODAL'
}

export type Action = ToggleTheme | ToggleFavoriteImage | SubmitSearchBar | ToggleImageModal;


