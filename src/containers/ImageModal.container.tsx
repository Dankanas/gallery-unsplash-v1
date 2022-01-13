import React, { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import ImageModal from '../components/ImageModal';
import { ToggleImageModal } from '../store/action';

const ImageModalContainer: FunctionComponent = () => {
  const [src, setSrc] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [likes, setLikes] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [views, setViews] = useState(0);
  const [cameraMakes, setCameraMakes] = useState('');
  const [cameraModule, setCameraModule] = useState('');
  const [focalLength, setFocalLength] = useState('');
  const [dimensions, setDimensions] = useState('');

  const getUnsplashData = async (location: string) => {
    ToggleImageModal(true);
    const response = await axios.get(
      `https://api.unsplash.com/photos/${location}`,
      {
        params: {
          client_id: 'IpFv3wfhiTwFG5YhrM6R4Q0LGb3On_OOdCvFMREhyrk', // TODO: move to constants
        },
      }
    );
    const responseStats = await axios.get(
      `https://api.unsplash.com/photos/${location}/statistics`,
      {
        params: {
          client_id: 'IpFv3wfhiTwFG5YhrM6R4Q0LGb3On_OOdCvFMREhyrk',
        },
      }
    );
    setSrc(response.data.urls.regular);
    setDescription(response.data.description);
    setAuthor(response.data.user.name);
    setDownloads(response.data.downloads);
    setLikes(response.data.likes);
    setViews(responseStats.data.views.total);
    setCameraMakes(response.data.exif.make);
    setCameraModule(response.data.exif.model);
    setFocalLength(response.data.exif.focal_length);
    setDimensions(`${response.data.width} x ${response.data.height}`);
  };
  const location = useLocation().search.slice(1);
  if (location !== '') getUnsplashData(location);
  useEffect(() => {
    if (location === '') {
      setSrc('');
      setDescription('');
      setAuthor('');
      setDownloads(0);
      setLikes(0);
      setViews(0);
      setCameraMakes('');
      setCameraModule('');
      setFocalLength('');
      setDimensions('');
    }
  });
  if (location === '') {
    ToggleImageModal(false);
    return <></>;
  }
  return (
    <ImageModal
      src={src}
      id={location}
      author={author}
      description={description}
      likes={likes}
      views={views}
      downloads={downloads}
      cameraMakes={cameraMakes}
      cameraModule={cameraModule}
      focalLength={focalLength}
      dimensions={dimensions}
    />
  );
};

export default ImageModalContainer;
