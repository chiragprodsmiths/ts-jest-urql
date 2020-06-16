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

const ChevronRight: React.FC<PropTypes> = (props) => {
  const { color, width, height, sx, ...rest } = props;
  return (
    <svg
      viewBox="0 0 6.84 12"
      sx={{
        fill: color,
        width,
        height,
        ...sx,
      }}
      {...rest}>
      <path d="M17.44,12l-6,6-.84-.84L15.76,12,10.6,6.84,11.44,6Z" transform="translate(-10.6 -6)" />
    </svg>
  );
};

ChevronRight.defaultProps = {
  color: 'link',
  width: 6.84,
  height: 12,
  sx: {},
};

export default ChevronRight;
