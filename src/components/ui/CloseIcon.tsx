import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseIcon = ({ width = 24, height = 24 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM9.17 14.83l5.66-5.66M14.83 14.83L9.17 9.17"
        stroke="#998F8E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CloseIcon;
