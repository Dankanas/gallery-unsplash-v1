import React, { FC } from "react";

import { IconColorProps } from "../../../types/IconColorProps";

const DownloadIcon: FC<IconColorProps> = ({ color }: IconColorProps) => {
  const iconColor = color === "dark" ? "#1a243a" : "#fff";
  const style = `.a,.b,.d{fill:none;}.a{clip-rule:evenodd;}.b{fill-rule:evenodd;}.c{clip-path:url(#a);}.d{stroke:rgba(112,112,112,0.01);stroke-width:0px;}.e{fill:${iconColor};}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      height="100%"
      width="100%"
    >
      <defs>
        <style>{style}</style>
        <clipPath id="a">
          <path className="a" d="M0,0H24V24H0Z" />
        </clipPath>
      </defs>
      <g transform="translate(0 24)">
        <g transform="translate(0 -24)">
          <g className="c">
            <path className="d" d="M0,0H24V24H0Z" />
          </g>
          <g className="c">
            <path className="e" d="M19,9H15V3H9V9H5l7,7ZM5,18v2H19V18Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default DownloadIcon;
