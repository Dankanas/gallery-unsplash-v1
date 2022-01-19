import React, { FC } from "react";

import { IconColorProps } from "../../../types/IconColorProps";

const EyeIcon: FC<IconColorProps> = ({ color }: IconColorProps) => {
  const eyeColor = color === "dark" ? "#1a243a" : "#fff";
  const style = `.a,.b,.d{fill:none;}.a{clip-rule:evenodd;}.b{fill-rule:evenodd;}.c{clip-path:url(#a);}.d{stroke:rgba(112,112,112,0.01);stroke-width:0px;}.e{fill:${eyeColor};}`;
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
            <path
              className="e"
              d="M12,4.5A11.827,11.827,0,0,0,1,12a11.817,11.817,0,0,0,22,0A11.827,11.827,0,0,0,12,4.5ZM12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default EyeIcon;
