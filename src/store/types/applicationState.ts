export interface ApplicationState {
  favoriteImagesArray: FavoriteImagesType[]
  themeSwitch: ThemeSwitch
}

export type ThemeSwitch = 'green' | 'red' | 'blue' | 'light'

export interface FavoriteImagesType {
  id: string,
  src: string
}