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

const AddIcon: React.FC<PropTypes> = (props) => {
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
      <g transform="translate(-2 -2)">
        <path d="M14,3.714A10.286,10.286,0,1,1,3.714,14,10.316,10.316,0,0,1,14,3.714M14,2A12,12,0,1,0,26,14,12.035,12.035,0,0,0,14,2Z" />
        <path d="M20,13.25H14.75V8h-1.5v5.25H8v1.5h5.25V20h1.5V14.75H20Z" />
      </g>
    </svg>
  );
};

AddIcon.defaultProps = {
  color: 'textLight',
  width: 24,
  height: 24,
  sx: {},
};

export default AddIcon;
