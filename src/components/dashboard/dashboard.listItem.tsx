import * as React from 'react';
import { Box } from 'theme-ui';

type PropTypes = {};

/**
 * Dashboard List item component used in Alert and Notes Tab
 */
const DashboardListItem: React.FC<PropTypes> = () => {
  return <Box variant="dashboardListItem">Customer Nestle has not paid dues for more than 30 days</Box>;
};

DashboardListItem.defaultProps = {};

export default DashboardListItem;
