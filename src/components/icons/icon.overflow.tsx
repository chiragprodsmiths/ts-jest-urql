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

const OverflowIcon: React.FC<PropTypes> = (props) => {
  const { color, width, height, sx, ...rest } = props;
  return (
    <svg
      viewBox="0 0 20 4"
      sx={{
        fill: color,
        width,
        height,
        ...sx,
      }}
      {...rest}>
      <g transform="translate(-6 -14)">
        <circle cx="2" cy="2" r="2" transform="translate(6 14)" />
        <circle cx="2" cy="2" r="2" transform="translate(14 14)" />
        <circle cx="2" cy="2" r="2" transform="translate(22 14)" />
      </g>
    </svg>
  );
};

OverflowIcon.defaultProps = {
  color: 'textLight',
  width: 20,
  height: 4,
  sx: {},
};

export default OverflowIcon;
