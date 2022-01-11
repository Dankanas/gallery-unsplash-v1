import React, { FunctionComponent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import ImageModalAbout from './components/ImageModalAbout';
import ImageModalPicture from './components/ImageModalPicture';

import './ImageModal.scss';

const ImageModal: FunctionComponent<ImageModalProps> = ({
  src,
  id,
  author,
  description,
  likes,
  downloads,
  views,
  cameraMakes,
  cameraModule,
  focalLength,
  dimensions,
}: ImageModalProps) => {
  const history = useHistory();
  const location = useLocation();
  const className = 'image-modal';
  const handleImageModalClosing = () => {
    history.push(location.pathname);
  };
  return (
    <div
      className={className}
      id={className}
      tabIndex={1}
      onClick={e => {
        if (e.currentTarget === e.target) {
          handleImageModalClosing();
        }
      }}
    >
      <div className={`${className}__main`}>
        <ImageModalPicture src={src} />
        <ImageModalAbout
          id={id}
          author={author}
          description={description}
          likes={likes}
          downloads={downloads}
          views={views}
          cameraMakes={cameraMakes}
          cameraModule={cameraModule}
          focalLength={focalLength}
          dimensions={dimensions}
          src={src}
        />
      </div>
    </div>
  );
};

interface ImageModalProps {
  src: string;
  id: string;
  author: string;
  description: string;
  likes: number;
  downloads: number;
  views: number;
  cameraMakes: string;
  cameraModule: string;
  focalLength: string;
  dimensions: string;
}

export default ImageModal;