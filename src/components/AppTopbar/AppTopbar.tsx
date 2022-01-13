import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

import TopbarLogo from "../TopbarLogo";
import NavigationBar from "../NavigationBar/NavigationBar";
import { SubmitSearchBar } from "../../store/action";
import ThemeSwitch from "../ThemeSwitch";
import { classNamesObject } from "../../containers/ClassNamesObject";

import "./AppTopbar.scss";
import routes from "../../constants/routes";

const AppTopbar: FC = () => {
  const className = "app-topbar";
  const classNameTopbar = classNames(className, classNamesObject());
  const [input, setInput] = useState("Search...");
  const history = useHistory();
  const handleSearch = () => {
    if (input === "Search..." || input.length === 0) {
      history.push(routes.home);
    } else {
      SubmitSearchBar(input);
      setInput("Search...");
    }
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && input.length !== 0) {
      SubmitSearchBar(input);
      setInput("");
      history.push(routes.search);
    }
  };
  return (
    <div className={classNameTopbar}>
      <div className={`${className}_logo`} id={"app-topbar-logo"}>
        <TopbarLogo />
      </div>
      <div className={`${className}_inner`}>
        <ThemeSwitch />
        <NavigationBar
          NavigationItems={[
            { name: "heart", route: routes.favorites },
            { name: "image", route: routes.home },
          ]}
        />
        <div onClick={() => handleSearch()}>
          <NavigationBar
            NavigationItems={[{ name: "search", route: routes.search }]}
          />
        </div>
      </div>
      <div className={`${className}_search`}>
        <div className={`${className}_input`}>
          <input
            className={`${className}_input_text`}
            type="text"
            value={input}
            onFocus={(e) => setInput("")}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default AppTopbar;
