import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { ApplicationState } from '../../../store/types';
import { ToggleFavoriteImage } from '../../../store/action';
import Icon from '../../Icon';
import { classNamesObject } from '../../../containers/ClassNamesObject';

import './ImageModalHeader.scss';

const ImageModalHeader: FunctionComponent<ModalHeaderProps> = ({
  author,
  id,
  src,
}: ModalHeaderProps) => {
  const [hover, setHover] = useState(false);
  const className = 'header';
  const classNameTitle = classNames(`${className}_title`, classNamesObject());
  const classNameContent = classNames(`${className}__content`, classNamesObject());
  const classNameLiked = classNames(`${className}__liked`, classNamesObject());
  const favoritesObjectArray = useSelector(
    (state: ApplicationState) => state.favoriteImagesArray
  );
  const theme = useSelector((state: ApplicationState) => state.themeSwitch);
  const liked = favoritesObjectArray.some(x => {
    return x.id === id;
  });
  return (
    <div className={`${className}`}>
      <div className={`${className}__block`}>
        <p
          className={classNameTitle}
        >
          author
        </p>
        <p className={classNameContent}>{author}</p>
      </div>
      <button className={`${className}__button`} onClick={()=> {ToggleFavoriteImage({id: id, src: src})}}>
        {liked ? (
          <div className={classNameLiked}>
            <Icon name="heart" />
          </div>
        ) : (
          <div className={`${className}__notliked`} onMouseEnter={()=>{setHover(true);}} onMouseLeave={()=>{setHover(false);}}>
            <Icon name={hover?"heart":"heart-full"} color={theme === "light" ? "dark" : "light"}/>
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
