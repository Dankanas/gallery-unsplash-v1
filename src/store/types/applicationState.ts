export interface ApplicationState {
  favoriteImagesArray: FavoriteImagesType[]
  themeSwitch: ThemeSwitch
  searchBar: string;
  isImageModalActive: boolean;
}

export type ThemeSwitch = 'default' | 'red' | 'blue' | 'light' 

export interface FavoriteImagesType {
  id: string,
  src: string
}