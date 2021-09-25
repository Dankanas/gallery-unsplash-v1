export interface ToggleLightMode {
  type: ActionTypes.ToggleLightMode;
  payload: null;
}

export enum ActionTypes {
  ToggleLightMode = 'TOGGLE_LIGHT_MODE'
}

export type Action = ToggleLightMode;


