import React, { ReactNode, FunctionComponent } from "react";
import classNames from "classnames";

import AppTopbar from "../../components/AppTopbar";
import ImageModalContainer from "../../containers/ImageModal.container";
import { classNamesObject } from "../../containers/ClassNamesObject";

import "./MainLayout.scss";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store/types";

const MainLayout: FunctionComponent = ({ children }: MainLayoutProps) => {
  const className = "main-layout";
  const isModalActive = useSelector((state: ApplicationState) => state.isImageModalActive);
  const classNameMain = classNames(className, classNamesObject());
  const classNameBody = classNames(`${className}_body`, {...classNamesObject(), 'is-modal-active': isModalActive});
  const classNameContent = classNames(`${className}_content`, classNamesObject());
  return (
    <div className={classNameMain}>
      <ImageModalContainer/>
      <div className={classNameBody}>
        <AppTopbar/>
        <div className={classNameContent}>{children}</div>
      </div>
    </div>
  );
};

interface MainLayoutProps {
  children: React.ReactChildren;
}

export default MainLayout;
