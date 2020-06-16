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

const Checkmark: React.FC<PropTypes> = (props) => {
  const { color, width, height, sx, ...rest } = props;
  return (
    <svg
      viewBox="0 0 22.6 15.6"
      sx={{
        fill: color,
        width,
        height,
        ...sx,
      }}
      {...rest}>
      <path d="M12,21.2,4.9,14.1,3.5,15.5l7.1,7.1L12,24,26.1,9.9,24.7,8.4Z" transform="translate(-3.5 -8.4)" />
    </svg>
  );
};

Checkmark.defaultProps = {
  color: '#5CCB76',
  width: 22.6,
  height: 15.6,
  sx: {},
};

export default Checkmark;
