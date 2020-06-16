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
      viewBox="0 0 11.429 16"
      sx={{
        fill: color,
        width,
        height,
        ...sx,
      }}
      {...rest}>
      <g transform="translate(-6 -2)">
        <path d="M17.257,6.171l-4-4a.519.519,0,0,0-.4-.171H7.143A1.146,1.146,0,0,0,6,3.143V16.857A1.146,1.146,0,0,0,7.143,18h9.143a1.146,1.146,0,0,0,1.143-1.143V6.571A.519.519,0,0,0,17.257,6.171Zm-4.4-2.8,3.2,3.2h-3.2Zm3.429,13.486H7.143V3.143h4.571V6.571a1.146,1.146,0,0,0,1.143,1.143h3.429Z" />
        <rect width="6.098" height="1" transform="translate(8.665 13.04)" />
        <rect width="6.098" height="1" transform="translate(8.665 10.005)" />
      </g>
    </svg>
  );
};

UserIcon.defaultProps = {
  color: 'muted',
  width: 11.429,
  height: 16,
  sx: {},
};

export default UserIcon;
