import React , { FC } from 'react'

import SingleImage from '../../components/SingleImage';
import Grid from '../../components/Grid';
import mockImageData from '../../mock/imagedata';
import ImageGridContainer from '../../containers/ImageGrid.container';

const Home: FC = () => {
    const className = 'home';
    return <ImageGridContainer/>
}

export default Home;