/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Link from 'components/link';
import { EnumLinksVariants } from 'theme/theme.variants.links';

type PropTypes = {};

const AddNewBrand: React.FC<PropTypes> = () => {
  return (
    <Link to="/brands/add-brand" variant={EnumLinksVariants.PRIMARY_FILL}>
      New Brand
    </Link>
  );
};

export default AddNewBrand;
