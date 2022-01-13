import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import ImageModalCamera from './ImageModalCamera';
import ImageModalData from './ImageModalData';
import ImageModalDescription from './ImageModalDescription';
import ImageModalHeader from './ImageModalHeader';
import { classNamesObject } from '../../../containers/ClassNamesObject';

import './ImageModalAbout.scss';

const ImageModalAbout: FunctionComponent<SingleModal> = ({
  author,
  description,
  likes,
  downloads,
  views,
  cameraMakes,
  cameraModule,
  focalLength,
  dimensions,
  id,
  src,
}: SingleModal) => {
  const className = 'about';
  const classNameAbout = classNames(className, classNamesObject());

  return (
    <div className={classNameAbout}>
      <div>
        <ImageModalHeader author={author} id={id} src={src} />
        <ImageModalDescription description={description} />
      </div>
      <div>
        <ImageModalData likes={likes} downloads={downloads} views={views} />
        <ImageModalCamera
          cameraMakes={cameraMakes}
          cameraModule={cameraModule}
          focalLength={focalLength}
          dimensions={dimensions}
        />
      </div>
    </div>
  );
};

interface SingleModal {
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
  src: string;
}

export default ImageModalAbout;
