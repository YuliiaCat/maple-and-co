import React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronDownIcon = ({ width = 26, height = 26 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.293 9.654L12 14.348l4.706-4.694"
        stroke="#998F8E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronDownIcon;
