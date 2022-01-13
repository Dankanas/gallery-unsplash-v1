import React, { FC } from "react";
import { useSelector } from "react-redux";

import { SingleImageProps } from "../SingleImage/SingleImage";
import SingleImage from "../SingleImage";
import "./Grid.scss";
import { ApplicationState } from "../../store/types";

const Grid: FC<GridProps> = ({ images }: GridProps) => {
  const className = "grid";
  const FavoriteImagesArray = useSelector((state: ApplicationState) => state.favoriteImagesArray)
  return (
    <div className={className}>
      {images.map((x, i) => {
        return <div className={`${className}_item`} key={`single-image-${i}`}><SingleImage src={x.src} id={x.id} liked={FavoriteImagesArray.some((y)=>{return y.id === x.id})}/></div>;
      })}
    </div>
  );
};

interface GridProps {
  images: SingleImageProps[];
}

export default Grid;
