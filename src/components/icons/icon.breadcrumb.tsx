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

const BreadCrumbIcon: React.FC<PropTypes> = (props) => {
  const { color, width, height, sx, ...rest } = props;
  return (
    <svg
      viewBox="0 0 5.974 9.414"
      sx={{
        fill: color,
        width,
        height,
        ...sx,
      }}
      {...rest}>
      <path d="M15.16,10l-4,4-.56-.56L14.04,10,10.6,6.56,11.16,6Z" transform="translate(-9.893 -5.293)" />
    </svg>
  );
};

BreadCrumbIcon.defaultProps = {
  color: 'textLight',
  width: '5.974',
  height: '9.414',
  sx: {},
};

export default BreadCrumbIcon;
