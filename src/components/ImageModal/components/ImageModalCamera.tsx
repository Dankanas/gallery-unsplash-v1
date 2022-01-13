import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

//import { ApplicationState } from '@/store/types';

import './ImageModalCamera.scss';
import { classNamesObject } from '../../../containers/ClassNamesObject';

const ImageModalCamera: FunctionComponent<ModalCameraProps> = ({
  cameraMakes,
  cameraModule,
  focalLength,
  dimensions,
}: ModalCameraProps) => {
  const className = 'camera';
  const classNameTitle = `${className}__title`;
  const classNameContent = classNames(`${className}__content`, classNamesObject());
  return (
    <div className={`${className}`}>
      <div className={`${className}__block`}>
        <div className={classNameTitle}>Camera Make</div>
        <div className={classNameContent}>{cameraMakes}</div>
      </div>
      <div className={`${className}__block`}>
        <div className={classNameTitle}>Camera Module</div>
        <div className={classNameContent}>{cameraModule}</div>
      </div>
      <div className={`${className}__block`}>
        <div className={classNameTitle}>Focal Length</div>
        <div className={classNameContent}>{focalLength}</div>
      </div>
      <div className={`${className}__block`}>
        <div className={classNameTitle}>Dimensions</div>
        <div className={classNameContent}>{dimensions}</div>
      </div>
    </div>
  );
};

interface ModalCameraProps {
  cameraMakes: string;
  cameraModule: string;
  focalLength: string;
  dimensions: string;
}

export default ImageModalCamera;
