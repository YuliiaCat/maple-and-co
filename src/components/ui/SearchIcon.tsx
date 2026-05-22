import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SearchIcon = ({ width = 20, height = 20 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.584 17.5a7.917 7.917 0 100-15.834 7.917 7.917 0 000 15.833zM18.334 18.333l-1.667-1.667"
        stroke="#998F8E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
