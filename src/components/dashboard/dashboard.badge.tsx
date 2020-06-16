import * as React from 'react';
import { Badge } from 'theme-ui';
import DotIcon from 'components/icons/icon.dot';

type PropTypes = {
  value?: number;
};

/**
 * Dashboard Tab Badge Indicator
 */
const DashboardBadge: React.FC<PropTypes> = (props) => {
  return (
    <Badge
      variant="outline"
      sx={{ position: 'absolute', top: 3, right: 3, display: 'inline-flex', alignItems: 'center' }}>
      <DotIcon sx={{ mr: 1 }} />
      {props.value}
    </Badge>
  );
};

DashboardBadge.defaultProps = {};

export default DashboardBadge;
