import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './ImageModalPicture.scss';
import { classNamesObject } from '../../../containers/ClassNamesObject';

const ImageModalPicture: FunctionComponent<ModalPictureProps> = ({
  src,
}: ModalPictureProps) => {
  const className = 'picture';
  const classNameBox = classNames(`${className}__box`, classNamesObject())
  const urlCheck = src !== '';
  return (
    <div className={classNameBox}>
      {urlCheck && <img src={src} className={`${className}__img`} />}
    </div>
  );
};

interface ModalPictureProps {
  src: string;
}

export default ImageModalPicture;
