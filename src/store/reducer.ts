import { ApplicationState } from './types';
import { Action, ActionTypes } from './types/actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action: Action): ApplicationState => {
  switch (action.type) {
    case ActionTypes.ToggleFavoriteImage: {
      const dummyObjectArray = state.favoriteImagesArray;
      if ( dummyObjectArray.some(x => { return x.id === action.payload.id; })
      ) {
        const filteredDummyObjectArray = dummyObjectArray.filter(x => {
          return x.id != action.payload.id;
        });
        return { ...state, favoriteImagesArray: [...filteredDummyObjectArray] };
      } else {
        dummyObjectArray.push(action.payload);
        console.log(dummyObjectArray);
        return { ...state, favoriteImagesArray: [...dummyObjectArray] };
      }
    }
    default: {
      return state;
    }
  }
};
export default reducer;
