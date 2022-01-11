import React, { FC } from "react";
import {useLocation, useHistory} from 'react-router-dom';

import "./NavigationBar.scss";
import Icon from "../Icon";
import { IconName } from "../../types/IconName";

const NavigationBar: FC<NavigationBarProps> = ({
  NavigationItems,
}: NavigationBarProps) => {
  const className = "navigation-bar";
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(history);
  return (
    <div className={className}>
      {NavigationItems.map((item, index) => (
        <div className={`${className}_box`} onClick={() => {history.push(item.route)}}>
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
  route?: string;
}
