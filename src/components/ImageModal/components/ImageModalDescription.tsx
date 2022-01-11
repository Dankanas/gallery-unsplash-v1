import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

//import { ApplicationState } from '@/store/types';

import './ImageModalDescription.scss';

const ImageModalDescription: FunctionComponent<ModalDescriptionProps> = ({
  description,
}: ModalDescriptionProps) => {
  const className = 'description';
  //const lightMode = useSelector((state: ApplicationState) => state.lightMode);
  return (
    <div className={`${className}`}>
      <div
        className={`${className}__title`}
      >
        description
      </div>
      <div
        className={`${className}__content`}
      >
        {description}
      </div>
    </div>
  );
};

interface ModalDescriptionProps {
  description: string;
}

export default ImageModalDescription;
