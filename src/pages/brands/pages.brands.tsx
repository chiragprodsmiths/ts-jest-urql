/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, Input } from 'theme-ui';
import AddNewBrand from 'components/brands/brands.add.new';
import Table from 'components/table';
import brandData from './makeData';
// import { Link } from 'react-router-dom';

type PropTypes = {};

/**
 * Brands Page
 */
const Brands: React.FC<PropTypes> = () => {
  // Mock Headers Data for Listing
  const columns = React.useMemo(
    () => [
      {
        Header: 'Brand Id',
        accessor: 'brandId',
        width: 80,
      },
      // {
      //   // /brand/edit-brand/:brandID
      //   Header: 'Brand Name',
      //   accessor: 'brandName',
      //   width: 90,
      // },
      {
        id: 'brandName', // Make sure it has an ID
        Header: 'Brand Name',
        accessor: 'brandName',
        width: 90,
        Cell: ({ row }) => <Link to={`/brand/edit-brand/${row.values.brandId}`}>{row.values.brandName}</Link>,
      },
      {
        Header: 'No. of Brand Users',
        accessor: 'numberOfBrandUsers',
        align: 'center',
      },
      {
        Header: 'No. Of Customers',
        accessor: 'numberOfCustomers',
        align: 'center',
      },
      {
        Header: 'No. of Customer Users',
        accessor: 'numberOfCustomerUsers',
        align: 'center',
      },
      {
        Header: 'No. of Active Contracts',
        accessor: 'numberOfActiveContracts',
        align: 'center',
      },
    ],
    [],
  );

  return (
    <div>
      <Flex mt={-4}>
        <Box>
          <Flex
            sx={{
              alignItems: 'baseline',
            }}>
            <Text sx={{ fontSize: 6, fontFamily: 'light' }}>120</Text>
            <Text sx={{ pl: 1 }} color="textLight">
              Active Customers
            </Text>
          </Flex>
        </Box>
        <Box pl={22}>
          <Flex
            sx={{
              alignItems: 'baseline',
            }}>
            <Text sx={{ fontSize: 6, fontFamily: 'light' }}>€56M</Text>
            <Text sx={{ pl: 1 }} color="textLight">
              Value
            </Text>
          </Flex>
        </Box>
        <Box ml="auto">
          <Flex sx={{ alignItems: 'baseline' }}>
            <Text sx={{ fontSize: 6, fontFamily: 'light' }}>08</Text>
            <Text sx={{ pl: 1 }} color="textLight">
              Tasks Pending
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 5,
        }}>
        <Box>
          <Flex>
            <Box sx={{ width: 320 }}>
              <Input id="abc" placeholder="Search" required />
            </Box>
          </Flex>
        </Box>
        <Box>
          <AddNewBrand />
        </Box>
      </Flex>
      <Box mt={4} mb={6}>
        <Table columns={columns} data={brandData} />
      </Box>
      {/* <ul>
        <li>
          <Link to="add">Add New Brand</Link>
        </li>
      </ul> */}
      {/* <h2>Click below to edit brands</h2>
      <ul>
        {[...Array(10).keys()].map((key: number) => (
          <li key={String(key)}>
            <Link to={`arthify_${key}`} state={{ name: `arthify-name_${key}` }}>
              {key}
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Brands;
