import React, { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '../components/Grid/Grid';
import { clientId } from '../constants/keys';

const ImageGridContainer: FunctionComponent = () => {
  const numberOfGridPhotos = 24;
  const emptyDataArray = [];
  for (let i=0; i<numberOfGridPhotos; i++) {
    emptyDataArray.push({ src: '', id: '', liked: false });
  }
  const [data, setData] = useState(emptyDataArray);
  const getUnsplashData = async () => {
    const response = await axios.get('https://api.unsplash.com/photos', {
      params: {
        client_id: clientId,
        per_page: numberOfGridPhotos,
      },
    });
    setData(
      response.data.map((x: ImageGridProps) => {
        return { src: x.urls.regular, id: x.id };
      })
    );
  };
  useEffect(() => {
    getUnsplashData();
  }, []);

  return (
    <div>
      <Grid images={data} />
    </div>
  );
};

interface ImageGridProps {
  urls: {
    regular: string;
  };
  id: string;
}

export default ImageGridContainer;
