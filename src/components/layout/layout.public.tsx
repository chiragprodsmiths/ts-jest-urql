import * as React from 'react';
import { Outlet } from 'react-router-dom';

type PropTypes = {};

/**
 * Public layout
 * used for public pages
 */
const PublicLayout: React.FC<PropTypes> = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

PublicLayout.defaultProps = {};

export default PublicLayout;
