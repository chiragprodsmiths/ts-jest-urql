import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import BrandBreadCrumb from './breadcrumb.brand';

type PropTypes = {};

const BreadCrumbs: React.FC<PropTypes> = () => {
  return (
    <Routes>
      <Route path="brands/*" element={<BrandBreadCrumb />} />
    </Routes>
  );
};

export default BreadCrumbs;
