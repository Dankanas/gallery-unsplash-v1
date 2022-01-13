import { ApplicationState } from './types/applicationState';

const initialState: ApplicationState = {
  themeSwitch: 'default',
  favoriteImagesArray: [],
  searchBar: '',
  isImageModalActive: false
};

export default initialState;
