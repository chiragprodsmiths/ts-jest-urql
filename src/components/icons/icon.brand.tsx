/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';

type PropTypes = {
  viewBox?: string;
  color?: string;
  width?: number;
  height?: number;
  sx?: object;
};

const UserIcon: React.FC<PropTypes> = (props) => {
  const { color, width, height, sx, ...rest } = props;
  return (
    <svg
      viewBox="0 0 16 16"
      sx={{
        fill: color,
        width,
        height,
        ...sx,
      }}
      {...rest}>
      <g transform="translate(-4 -4)">
        <path d="M9.322,4H5.33A1.33,1.33,0,0,0,4,5.33V9.322a1.33,1.33,0,0,0,1.33,1.33H9.322a1.33,1.33,0,0,0,1.33-1.33V5.33A1.33,1.33,0,0,0,9.322,4Zm0,5.322H5.33V5.33H9.322Z" />
        <path
          d="M23.322,4H19.33A1.33,1.33,0,0,0,18,5.33V9.322a1.33,1.33,0,0,0,1.33,1.33h3.991a1.33,1.33,0,0,0,1.33-1.33V5.33A1.33,1.33,0,0,0,23.322,4Zm0,5.322H19.33V5.33h3.991Z"
          transform="translate(-4.652)"
        />
        <path
          d="M9.322,18H5.33A1.33,1.33,0,0,0,4,19.33v3.991a1.33,1.33,0,0,0,1.33,1.33H9.322a1.33,1.33,0,0,0,1.33-1.33V19.33A1.33,1.33,0,0,0,9.322,18Zm0,5.322H5.33V19.33H9.322Z"
          transform="translate(0 -4.652)"
        />
        <path
          d="M23.322,18H19.33A1.33,1.33,0,0,0,18,19.33v3.991a1.33,1.33,0,0,0,1.33,1.33h3.991a1.33,1.33,0,0,0,1.33-1.33V19.33A1.33,1.33,0,0,0,23.322,18Zm0,5.322H19.33V19.33h3.991Z"
          transform="translate(-4.652 -4.652)"
        />
      </g>
    </svg>
  );
};

UserIcon.defaultProps = {
  color: 'muted',
  width: 16,
  height: 16,
  sx: {},
};

export default UserIcon;
