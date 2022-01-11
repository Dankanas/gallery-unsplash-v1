import React , { FC } from 'react'
import { useSelector } from 'react-redux';

import Grid from '../../components/Grid';
import { ApplicationState } from '../../store/types';

const Favorites: FC = () => {
    const favoriteImagesArray = useSelector((state: ApplicationState) => state.favoriteImagesArray)
    const className = 'favorites';
    return <div className={className}><Grid images= {favoriteImagesArray}/></div>
}

export default Favorites;