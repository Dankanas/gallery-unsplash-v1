import { ApplicationState } from './types';
import { Action, ActionTypes } from './types/actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action: Action): ApplicationState => {
  switch (action.type) {
    case ActionTypes.ToggleLightMode: {
      return {...state, lightMode: !state.lightMode};
    }
    default: {
      return state;
    }
  }
};
export default reducer;
