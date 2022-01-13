import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { classNamesObject } from "../../../containers/ClassNamesObject";

import "./ImageModalDescription.scss";

const ImageModalDescription: FunctionComponent<ModalDescriptionProps> = ({
  description,
}: ModalDescriptionProps) => {
  const className = "description";
  const classNameContent = classNames(
    `${className}__content`,
    classNamesObject()
  );
  return (
    <div className={`${className}`}>
      <div className={`${className}__title`}>description</div>
      <div className={classNameContent}>{description}</div>
    </div>
  );
};

interface ModalDescriptionProps {
  description: string;
}

export default ImageModalDescription;
