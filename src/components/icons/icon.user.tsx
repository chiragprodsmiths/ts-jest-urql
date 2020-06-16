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
      viewBox="0 0 24 24"
      sx={{
        fill: color,
        width,
        height,
        ...sx,
      }}
      {...rest}>
      <path
        d="M14,2A12,12,0,1,0,26,14,12,12,0,0,0,14,2Zm0,4.286a3.849,3.849,0,1,1-2.73,1.127A3.857,3.857,0,0,1,14,6.286Zm6.857,15.36a10.226,10.226,0,0,1-13.714,0v-.5h0a4.457,4.457,0,0,1,4.286-4.577h5.143a4.466,4.466,0,0,1,4.286,4.551Z"
        transform="translate(-2 -2)"
      />
    </svg>
  );
};

UserIcon.defaultProps = {
  color: 'border',
  width: 24,
  height: 24,
  sx: {},
};

export default UserIcon;
