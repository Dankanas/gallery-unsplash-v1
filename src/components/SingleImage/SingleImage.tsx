import React, { FC } from "react";
import { Link } from "react-router-dom";

import Icon from "../Icon";

import "./SingleImage.scss";

const SingleImage: FC<SingleImageProps> = ({
  src,
  liked,
  id,
}: SingleImageProps) => {
  const className = "img";
  const heartRender = (
    <div className={`${className}_heart`}>
      <Icon name="heart" />
    </div>
  );

  return (
      <Link to={{ search: id }}>
    <div className={className}>
      <img className={`${className}_image`} src={src} />
      {liked ? heartRender : null}
    </div></Link>
  );
};

export interface SingleImageProps {
  src: string;
  liked?: boolean;
  id?: string;
}

export default SingleImage;
