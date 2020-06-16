import * as React from 'react';
import { Link } from 'react-router-dom';
import { Text, Card, Heading } from 'theme-ui';
import { EnumCardsVariants } from 'theme/theme.variants.cards';
import DashboardBadge from './dashboard.badge';

type PropTypes = {
  active?: boolean;
  title: string;
  value: number;
  badgeValue?: number;
  status: string;
  to: string;
};

/**
 * Dashboard Card
 */
const DashboardCard: React.FC<PropTypes> = (props: PropTypes) => {
  const variant = props.active ? EnumCardsVariants.DASHBOARD : EnumCardsVariants.DASHBOARD_DISABLED;
  return (
    <Link to={props.active ? props.to : ''}>
      <Card variant={variant}>
        {props.badgeValue && <DashboardBadge value={props.badgeValue} />}
        <Heading as="h4">{props.title}</Heading>
        <Text as="p" sx={{ fontSize: 7, fontFamily: 'light' }}>
          {props.value}
        </Text>
        <Text color="textLight">{props.status}</Text>
      </Card>
    </Link>
  );
};

DashboardCard.defaultProps = {
  active: false,
  to: '/',
};

export default DashboardCard;
