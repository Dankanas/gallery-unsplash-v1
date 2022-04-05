import React, { FC, useState } from "react";
import classNames from "classnames";

import TopbarLogo from "./components/TopbarLogo";
import NavigationBar from "./components/NavigationBar";
import ThemeSwitch from "./components/ThemeSwitch";
import SearchButton from "./components/SearchButton";
import SearchBar from "./components/SearchBar";

import "./Header.scss";
import routes from "../../constants/routes";
import { classNamesObject } from "../../containers/ClassNamesObject";

const Header: FC<HeaderProps> = ({input, setInput} : HeaderProps) => {
  const className = "header";
  const classNameTopbar = classNames(className, classNamesObject());
  return (
    <div className={classNameTopbar}>
      <div className={`${className}_logo`}><TopbarLogo /></div>
      <div className={`${className}_navbar`}>
        <ThemeSwitch />
        <NavigationBar
          NavigationItems={[
            { name: "heart", route: routes.favorites },
            { name: "image", route: routes.home },
          ]}
        />
        <SearchButton input={input} setInput={setInput} />
      </div>
      <div className={`${className}_searchbar`}>
        <SearchBar input={input} setInput={setInput} />{" "}
      </div>
    </div>
  );
};

export default Header;

interface HeaderProps {
  input: string;
  setInput: (x: string) => void;
}
