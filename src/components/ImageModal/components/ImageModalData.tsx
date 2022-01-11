import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

//import { ApplicationState } from '@/store/types';
import Icon from '../../Icon';

import './ImageModalData.scss';

const ImageModalData: FunctionComponent<ModalDataProps> = ({
  likes,
  views,
  downloads,
}: ModalDataProps) => {
  //const lightMode = useSelector((state: ApplicationState) => state.lightMode);
  const className = 'data';
  //const classNameValue = classNames(`${className}__value`, {
  //  lightMode: lightMode,
  //});
  const classNameValue = `${className}_value`
  return (
    <div className={`${className}`}>
      <div className={`${className}__block`}>
        <div className={`${className}_icon`}><Icon name="heart" /></div>
        <div className={classNameValue}>{likes}</div>
      </div>
      <div className={`${className}__block`}>
      <div className={`${className}_icon`}><Icon name="download" /></div>
        <div className={classNameValue} id="value_downloads">
          {downloads}
        </div>
      </div>
      <div className={`${className}__block`}>
      <div className={`${className}_icon`}><Icon name="eye" /></div>
        <div className={classNameValue} id="value_views">
          {views}
        </div>
      </div>
    </div>
  );
};

interface ModalDataProps {
  likes: number;
  downloads: number;
  views: number;
}

export default ImageModalData;
