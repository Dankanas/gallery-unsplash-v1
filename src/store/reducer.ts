import { ApplicationState } from "./types";
import { Action, ActionTypes } from "./types/actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action: Action): ApplicationState => {
  switch (action.type) {
    case ActionTypes.ToggleFavoriteImage: {
      const dummyObjectArray = state.favoriteImagesArray;
      if (
        dummyObjectArray.some((x) => {
          return x.id === action.payload.id;
        })
      ) {
        const filteredDummyObjectArray = dummyObjectArray.filter((x) => {
          return x.id != action.payload.id;
        });
        return { ...state, favoriteImagesArray: [...filteredDummyObjectArray] };
      } else {
        dummyObjectArray.push(action.payload);
        console.log(dummyObjectArray);
        return { ...state, favoriteImagesArray: [...dummyObjectArray] };
      }
    }
    case ActionTypes.SubmitSearchBar: {
      return { ...state, searchBar: action.payload };
    }
    case ActionTypes.ToggleTheme: {
      const existingTheme = state.themeSwitch;
      if (existingTheme === "default") {
        return { ...state, themeSwitch: "blue" };
      } else if (existingTheme === "blue") {
        return { ...state, themeSwitch: "light" };
      } else if (existingTheme === "light") {
        return { ...state, themeSwitch: "default" };
      } else 
      return {...state, themeSwitch: "default"};
    }
    case ActionTypes.ToggleImageModal: {
      if (action.payload)
      return {...state, isImageModalActive: true}
      if (!action.payload)
      return {...state, isImageModalActive: false}
    }
    default: {
      return state;
    }
  }
};
export default reducer;
