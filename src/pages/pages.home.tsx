import * as React from 'react';
import { Flex, Box, Grid, Link, Divider, Button } from 'theme-ui';
import DashboardCard from 'components/dashboard/dashboard.card';
import DashboardListItem from 'components/dashboard/dashboard.listItem';
import ChevronRight from 'components/icons/icon.chevronRight';

type PropTypes = {};

/**
 * Home Page
 */
const Home: React.FC<PropTypes> = () => {
  return (
    <Grid gap={3} columns={[2, '7fr 3fr']}>
      <Box sx={{ textAlign: 'center' }}>
        <Grid gap={3} columns={[2, null, 3]}>
          <DashboardCard title="Brands" value={120} status="Active" to="/brands" active />
          <DashboardCard title="Users" value={100} status="Active" badgeValue={5} to="/users" active />
          <DashboardCard title="Deliveries" value={34} status="Cars on Order" badgeValue={4} to="/routeName" />
          <DashboardCard title="Activations" value={3} status="InProgress" badgeValue={10} to="/routeName" />
          <DashboardCard title="Active Contracts" value={56} status="Running" badgeValue={4} to="/routeName" />
          <DashboardCard title="Invoices" value={33} status="Billing" badgeValue={4} to="/routeName" />
          <DashboardCard title="Payable" value={20} status="Expenses" badgeValue={4} to="/routeName" />
          <DashboardCard title="Modifications" value={300} status="Contracts" badgeValue={4} to="/routeName" />
          <DashboardCard title="Closures" value={14} status="Being Closed" badgeValue={4} to="/routeName" />
        </Grid>
      </Box>
      <Box bg="white" px={6} py={4} sx={{ borderRadius: 'default' }}>
        <Flex>
          <Button variant="tabActive">Alerts</Button>
          <Button variant="tab">Notes</Button>
        </Flex>
        <Divider m={0} color="border" sx={{ borderWidth: '2px' }} />
        <DashboardListItem />
        <DashboardListItem />
        <DashboardListItem />
        <DashboardListItem />
        <DashboardListItem />
        <DashboardListItem />
        <Flex mt={5} sx={{ justifyContent: 'flex-end' }}>
          <Link href="#!" sx={{ fontWeight: 'medium' }} variant="iconLink">
            View All
            <ChevronRight color="black" sx={{ ml: 2 }} />
          </Link>
        </Flex>
      </Box>
    </Grid>
  );
};

export default Home;
