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

const ReportIcon: React.FC<PropTypes> = (props) => {
  const { color, width, height, sx, ...rest } = props;
  return (
    <svg
      viewBox="0 0 12.571 16"
      sx={{
        fill: color,
        width,
        height,
        ...sx,
      }}
      {...rest}>
      <g transform="translate(-5 -2)">
        <rect width="1" height="3" transform="translate(10.808 11.973)" />
        <rect width="1" height="4" transform="translate(12.791 10.975)" />
        <rect width="1" height="6" transform="translate(8.825 8.98)" />
        <path d="M16.429,3.714H14.714V3.143A1.143,1.143,0,0,0,13.571,2H9A1.143,1.143,0,0,0,7.857,3.143v.571H6.143A1.143,1.143,0,0,0,5,4.857v12A1.143,1.143,0,0,0,6.143,18H16.429a1.143,1.143,0,0,0,1.143-1.143v-12A1.143,1.143,0,0,0,16.429,3.714ZM9,3.143h4.571V5.429H9Zm7.429,13.714H6.143v-12H7.857V6.571h6.857V4.857h1.714Z" />
      </g>
    </svg>
  );
};

ReportIcon.defaultProps = {
  color: 'muted',
  width: 12.571,
  height: 16,
  sx: {},
};

export default ReportIcon;
