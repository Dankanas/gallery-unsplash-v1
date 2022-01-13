import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import Icon from "../../Icon";
import { classNamesObject } from "../../../containers/ClassNamesObject";

import "./ImageModalData.scss";
import { ApplicationState } from "../../../store/types";

const ImageModalData: FunctionComponent<ModalDataProps> = ({
  likes,
  views,
  downloads,
}: ModalDataProps) => {
  const className = "data";
  const theme = useSelector((state: ApplicationState) => state.themeSwitch);
  const classNameValue = classNames(`${className}_value`, classNamesObject());
  return (
    <div className={`${className}`}>
      <div className={`${className}__block`}>
        <div className={`${className}_icon`}>
          <Icon name="heart" color={theme === "light" ? "dark" : "light"} />
        </div>
        <div className={classNameValue}>{likes}</div>
      </div>
      <div className={`${className}__block`}>
        <div className={`${className}_icon`}>
          <Icon name="download" color={theme === "light" ? "dark" : "light"} />
        </div>
        <div className={classNameValue} id="value_downloads">
          {downloads}
        </div>
      </div>
      <div className={`${className}__block`}>
        <div className={`${className}_icon`}>
          <Icon name="eye" color={theme === "light" ? "dark" : "light"} />
        </div>
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
