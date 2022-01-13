import React, { FC } from "react";
import { useLocation, useHistory } from "react-router-dom";
import classNames from "classnames";

import Icon from "../Icon";
import { classNamesObject } from "../../containers/ClassNamesObject";

import { IconName } from "../../types/IconName";
import "./NavigationBar.scss";

const NavigationBar: FC<NavigationBarProps> = ({
  NavigationItems,
}: NavigationBarProps) => {
  const className = "navigation-bar";
  const location = useLocation();
  const history = useHistory();
  return (
    <div className={className}>
      {NavigationItems.map((item, index) => (
        <div
          className={classNames(`${className}_box`, {
            ...classNamesObject(),
            "is-active": location.pathname === item.route,
          })}
          onClick={() => {
            history.push(item.route);
            item.action;
          }}
          key={`navigation-item-${index}`}
        >
          <div className={`${className}_icon`}>
            <Icon name={item.name}></Icon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;

interface NavigationBarProps {
  NavigationItems: NavigationItem[];
}

interface NavigationItem {
  name: IconName;
  route: string;
  action?: string;
}
