import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from 'pages/pages.404';
import AddBrand from 'pages/brands/pages.brands.add';
import Brands from 'pages/brands/pages.brands';
import EditBrand from 'pages/brands/pages.brands.edit';
import ProtectedRoute from './router.protected';

type PropTypes = {};

/**
 * Brand Router
 * brand index & relative routes
 */

const BrandRouter: React.FC<PropTypes> = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<Brands />} />} />
      <Route path="add-brand" element={<ProtectedRoute element={<AddBrand />} />} />
      <Route path="edit-brand/:slug" element={<ProtectedRoute element={<EditBrand />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default BrandRouter;
