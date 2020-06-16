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

const DotIcon: React.FC<PropTypes> = (props) => {
  const { color, width, height, sx, ...rest } = props;
  return (
    <svg
      viewBox="0 0 12 12"
      sx={{
        fill: color,
        width,
        height,
        ...sx,
      }}
      {...rest}>
      <circle r={6} cx={6} cy={6} />
    </svg>
  );
};

DotIcon.defaultProps = {
  color: 'label',
  width: 6,
  height: 6,
  sx: {},
};

export default DotIcon;
