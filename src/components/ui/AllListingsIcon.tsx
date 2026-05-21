import React from "react";
import Svg, { Path } from "react-native-svg";

const AllListingsIcon = ({ width = 24, height = 24, stroke = "#6B7A3A" }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 800 800"
      fill="none"
    >
      <Path
        d="M350 466.667h216.667M233.333 466.667H250M233.333 350H250M233.333 583.333H250M350 350h216.667M350 583.333h216.667"
        stroke={stroke}
        strokeWidth={50}
        strokeLinecap="round"
      />
      <Path
        d="M266.667 116.667c0-27.615 22.385-50 50-50h166.666c27.614 0 50 22.385 50 50V150c0 27.614-22.386 50-50 50H316.667c-27.615 0-50-22.386-50-50v-33.333z"
        stroke={stroke}
        strokeWidth={60}
      />
      <Path
        d="M700 533.34c0 94.28 0 141.423-29.29 170.71-29.29 29.29-76.43 29.29-170.71 29.29H300c-94.281 0-141.421 0-170.711-29.29C100 674.763 100 627.62 100 533.34v-100m433.333-299.942c72.5.404 111.764 3.619 137.377 29.232C700 191.919 700 239.06 700 333.34v66.667M266.667 133.398c-72.501.404-111.765 3.619-137.378 29.232-25.612 25.612-28.827 64.874-29.231 137.37"
        stroke={stroke}
        strokeWidth={60}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default AllListingsIcon;
