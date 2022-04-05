import React, { ReactNode, FunctionComponent, useState } from "react";
import classNames from "classnames";

import ImageModalContainer from "../../containers/ImageModal.container";
import { classNamesObject } from "../../containers/ClassNamesObject";

import "./MainLayout.scss";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store/types";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainLayout: FunctionComponent = ({ children }: MainLayoutProps) => {
  const className = "main-layout";
  const [searchbarInput, setSearchbarInput] = useState("Search...");
  const isModalActive = useSelector((state: ApplicationState) => state.isImageModalActive);
  const classNameMain = classNames(className, classNamesObject());
  const classNameBody = classNames(`${className}_body`, {...classNamesObject(), 'is-modal-active': isModalActive});
  const classNameContent = classNames(`${className}_content`, classNamesObject());
  return (
    <div className={classNameMain}>
      <ImageModalContainer/>
      <div className={classNameBody}>
        <Header input={searchbarInput} setInput={setSearchbarInput}/>
        <div className={classNameContent}>{children}</div>
        <Footer input={searchbarInput} setInput={setSearchbarInput}/>
      </div>
    </div>
  );
};

interface MainLayoutProps {
  children: React.ReactChildren;
}

export default MainLayout;
