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

const ChevronDown: React.FC<PropTypes> = (props) => {
  const { color, width, height, sx, ...rest } = props;
  return (
    <svg
      viewBox="0 0 12 6.84"
      sx={{
        fill: color,
        width,
        height,
        ...sx,
      }}
      {...rest}>
      <path d="M12,17.44l-6-6,.84-.84L12,15.76l5.16-5.16.84.84Z" transform="translate(-6 -10.6)" />
    </svg>
  );
};

ChevronDown.defaultProps = {
  color: 'primaryIcon',
  width: 12,
  height: 6.84,
  sx: {},
};

export default ChevronDown;
