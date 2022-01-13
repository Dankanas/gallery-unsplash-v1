import React, { FC } from "react";

import HeartfullIcon from "./components/Heartfull.icon";
import HeartIcon from "./components/Heart.icon";
import ImageIcon from "./components/Image.Icon";
import SearchIcon from "./components/Search.Icon";
import EyeIcon from "./components/Eye.icon";
import DownloadIcon from "./components/Download.icon";
import ThemeIcon from "./components/Theme.icon";

import "./icon.scss";
import { IconProps } from "../../types/IconProps";

const Icon: FC<IconProps> = ({ name, color }: IconProps) => {
  const className = "icon";
  switch (name) {
    case "heart":
      return (
        <div className={className}>
          <HeartIcon color={color} />
        </div>
      );
      break;
    case "heart-full":
      return (
        <div className={className}>
          <HeartfullIcon color={color} />
        </div>
      );
      break;
    case "image":
      return (
        <div className={className}>
          <ImageIcon />
        </div>
      );
      break;
    case "search":
      return (
        <div className={className}>
          <SearchIcon />
        </div>
      );
      break;
    case "eye":
      return (
        <div className={className}>
          <EyeIcon color={color} />
        </div>
      );
      break;
    case "download":
      return (
        <div className={className}>
          <DownloadIcon color={color} />
        </div>
      );
      break;
    case "theme":
      return (
        <div className={className}>
          <ThemeIcon />
        </div>
      );
  }
};

export default Icon;
