import React from 'react';
import { components, IndicatorProps } from 'react-select';
import DotIcon from 'components/icons/icon.dot';

/* eslint-disable react/jsx-props-no-spreading */
const DropdownIndicator: React.FC<IndicatorProps<any>> = (props: IndicatorProps<any>) => {
  console.log(props);
  return (
    <components.DropdownIndicator {...props}>
      <DotIcon sx={{ mr: 1 }} />
    </components.DropdownIndicator>
  );
};
/* eslint-enable react/jsx-props-no-spreading */

export default DropdownIndicator;
