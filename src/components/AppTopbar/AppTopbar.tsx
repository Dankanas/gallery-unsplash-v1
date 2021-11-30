import React, { FC } from "react";

import "./AppTopbar.scss";
import TopbarLogo from "../TopbarLogo";
import NavigationBar from "../NavigationBar/NavigationBar";

const AppTopbar: FC = () => {
  const className = "app-topbar";
  return (
    <div className={className}>
      <TopbarLogo />
      <div className={`${className}_inner`}>
      <NavigationBar NavigationItems={[{name: "search"}]}></NavigationBar>
      <NavigationBar
        NavigationItems={[{ name: "heart" }, { name: "image" }]}
      ></NavigationBar>
       </div>
    </div>
  );
};

export default AppTopbar;
