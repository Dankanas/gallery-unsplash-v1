import React, { FC, useState } from "react";

import "./AppTopbar.scss";
import TopbarLogo from "../TopbarLogo";
import NavigationBar from "../NavigationBar/NavigationBar";
import routes from "../../constants/routes";
import Home from "../../views/Home";

const AppTopbar: FC = () => {
  const [searchbar, setSearchbar] = useState("Search...");
  const className = "app-topbar";
  return (
    <div className={className}>
      <TopbarLogo />
      <div className={`${className}_inner`}>
        <NavigationBar NavigationItems={[{ name: "heart" ,route: routes.favorites }, { name: "image", route: routes.home }, { name: "search" ,route: routes.search }]}></NavigationBar>
        <div className={`${className}_input`}>
          <input
            className={`${className}_input_text`}
            type="text"
            value={searchbar}
            onFocus={(e) => setSearchbar("")}
            onBlur={(e) => setSearchbar("Search...")}
            onChange={(e) => setSearchbar(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AppTopbar;
