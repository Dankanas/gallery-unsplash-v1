import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

import Icon from "../Icon";
import { ApplicationState } from "../../store/types";
import { classNamesObject } from "../../containers/ClassNamesObject";

import "./SingleImage.scss";
import { SingleImageProps } from "../../types/SingleImageProps";

const SingleImage: FC<SingleImageProps> = ({
  src,
  liked,
  id,
}: SingleImageProps) => {
  const className = "img";
  const classNameDiv = classNames(className, classNamesObject);
  const classNameImage = classNames(`${className}_image`, classNamesObject());
  const classNameHeart = classNames(`${className}_heart`, classNamesObject());
  const theme = useSelector((state: ApplicationState) => state.themeSwitch);
  const heartRender = (
    <div className={classNameHeart}>
      <Icon name="heart" color={theme === "light" ? "dark" : "light"} />
    </div>
  );
  return (
    <Link to={{ search: id }}>
      <div className={classNameDiv}>
        <img className={classNameImage} src={src} />
        {liked ? heartRender : null}
      </div>
    </Link>
  );
};

export default SingleImage;
