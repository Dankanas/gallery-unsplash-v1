import React, { FunctionComponent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import ImageModalAbout from './components/ImageModalAbout';
import ImageModalPicture from './components/ImageModalPicture';

import './ImageModal.scss';
import { ApplicationState } from '../../store/types';
import { ImageModalProps } from '../../types/ImageModalProps';

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
  const isModalActive = useSelector((state: ApplicationState) => state.isImageModalActive);
  const classNameModal = classNames(className, { "is-modal-open": isModalActive});
  const handleImageModalClosing = () => {
    history.push(location.pathname);
  };
  return (
    <div
      className={classNameModal}
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



export default ImageModal;
