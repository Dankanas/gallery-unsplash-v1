import React, { FC } from "react";
import classNames from "classnames";

import Icon from "../../../Icon";
import { ToggleTheme } from "../../../../store/action";
import { classNamesObject } from "../../../../containers/ClassNamesObject";

import "./ThemeSwitch.scss";

const ThemeSwitch: FC = () => {
  const className = "theme-switch";
  const classNameBox = classNames(className, classNamesObject());
  return (
    <div className={classNameBox} onClick={() => ToggleTheme()}>
      <div className={`${className}_icon`}>
        <Icon name="theme" />{" "}
      </div>
    </div>
  );
};

export default ThemeSwitch;
