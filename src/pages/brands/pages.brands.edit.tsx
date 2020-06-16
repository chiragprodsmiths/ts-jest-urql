import * as React from 'react';
import { useParams, useLocation } from 'react-router-dom';

type PropTypes = {};

type RouteParams = {
  slug?: string;
};

type LocationState = {
  state: {
    name?: string;
  };
};

/**
 * Edit Brand Page
 * TODO: remove as casting from typescript as typedef are currently
 * not updated for react router
 */
const EditBrand: React.FC<PropTypes> = () => {
  const params: RouteParams = useParams();
  const { state } = useLocation() as LocationState;
  return (
    <>
      <h1>Edit Brand Page, Hello {state.name}</h1>
      <h1>{params.slug}</h1>
    </>
  );
};

export default EditBrand;
