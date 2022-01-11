import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { ApplicationState } from '../../../store/types';
import { ToggleFavoriteImage } from '../../../store/action';
import Icon from '../../Icon';

import './ImageModalHeader.scss';

const ImageModalHeader: FunctionComponent<ModalHeaderProps> = ({
  author,
  id,
  src,
}: ModalHeaderProps) => {
  const [hover, setHover] = useState(false);
  const className = 'header';
  const favoritesObjectArray = useSelector(
    (state: ApplicationState) => state.favoriteImagesArray
  );
  //const lightMode = useSelector((state: ApplicationState) => state.lightMode);
  const liked = favoritesObjectArray.some(x => {
    return x.id === id;
  });
  return (
    <div className={`${className}`}>
      <div className={`${className}__block`}>
        <p
          className={`${className}_title`}
        >
          author
        </p>
        <p className={`${className}__content`}>{author}</p>
      </div>
      <button className={`${className}__button`} onClick={()=> {ToggleFavoriteImage({id: id, src: src})}}>
        {liked ? (
          <div className={`${className}__liked`}>
            <Icon name="heart" />
          </div>
        ) : (
          <div className={`${className}__notliked`} onMouseEnter={()=>{setHover(true);}} onMouseLeave={()=>{setHover(false);}}>
            <Icon name={hover?"heart":"heart-full"} />
          </div>
        )}
      </button>
    </div>
  );
};

interface ModalHeaderProps {
  id: string;
  src: string;
  author?: string;
}

export default ImageModalHeader;
