import * as React from 'react';

type PropTypes = {
  children?: React.ReactElement;
};

/**
 * Brands Layout
 * used for brands pages
 */
const BrandsLayout: React.FC<PropTypes> = (props: PropTypes) => {
  return <div>{props.children}</div>;
};

BrandsLayout.defaultProps = {};

export default BrandsLayout;
