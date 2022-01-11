import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

//import { ApplicationState } from '@/store/types';

import './ImageModalPicture.scss';

const ImageModalPicture: FunctionComponent<ModalPictureProps> = ({
  src,
}: ModalPictureProps) => {
  const className = 'picture';
  //const lightMode = useSelector((state: ApplicationState) => state.lightMode);
  const urlCheck = src !== '';
  return (
    <div className={`${className}__box`}>
      {urlCheck && <img src={src} className={`${className}__img`} />}
    </div>
  );
};

interface ModalPictureProps {
  src: string;
}

export default ImageModalPicture;
