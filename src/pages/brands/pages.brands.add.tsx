import React, { useState } from 'react';
/**
 * Theme UI Components
 */
// import { Button, Textarea, IconButton, Text, Heading, Flex, Box, Grid, Card, Link, Input, Label } from 'theme-ui';
import { Label, Checkbox, Button, Textarea, IconButton, Text, Heading, Flex, Box, Grid, Card, Link } from 'theme-ui';
/**
 * Components
 */
import OverflowIcon from 'components/icons/icon.overflow';
import AddBrandForm from 'components/brands/brands.add';
import ChevronDown from 'components/icons/icon.chevronDown';
import Checkmark from 'components/icons/icon.checkmark';
/**
 * Variants
 */
import { CustomVariants } from 'theme/theme.variants';
import { EnumLinksVariants } from 'theme/theme.variants.links';
import { EnumCardsVariants } from 'theme/theme.variants.cards';

type PropTypes = {};

/**
 * Add New Brand Page
 */
const AddBrand: React.FC<PropTypes> = () => {
  const [manageBrands, setManageBrands] = useState<boolean>(true);

  // Collapse Manage Brands
  const collapseManageBrands = (): void => {
    setManageBrands(!manageBrands);
  };

  return (
    <>
      <Grid gap={4} columns={[2, '2fr 8fr']}>
        {/* Left Sidebar */}
        <Box>
          <Card mt="5">
            <Box sx={{ position: 'relative' }}>
              <Link variant={EnumLinksVariants.SIDEBAR_ACTIVE} href="/">
                Manage Brands
              </Link>
              <IconButton>
                <Checkmark sx={{ width: 16, height: '11.04' }} />
              </IconButton>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Manage Brand User
              </Link>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Manage Customer User
              </Link>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Manage Master Files
              </Link>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Schedule Processes
              </Link>
            </Box>
          </Card>
          {/* Review Links */}
          <Card mt="15">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text sx={{ lineHeight: '40px', color: 'textLight' }}>Review</Text>
              <IconButton>
                <ChevronDown sx={{ ml: 5, width: 16, height: '9.2' }} />
              </IconButton>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Brand Update History
              </Link>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Users Update History
              </Link>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Master Files Update History
              </Link>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Process History
              </Link>
            </Box>
          </Card>
          {/* Notes Section */}
          <Card mt="8" mb="10">
            <Text sx={{ fontSize: 3, color: 'textLight' }}>Notes</Text>
            <Textarea rows={3} mt="3" />
            <Button mt="4" sx={{ minWidth: '112px', py: '6px' }}>
              Save
            </Button>
          </Card>
          <Card mb="3" px="4" py="2" bg="white" sx={{ border: '1px solid', borderColor: 'border', borderRadius: 'sm' }}>
            <Flex sx={{ justifyContent: 'space-between' }}>
              <Box sx={{ fontSize: 0 }}>
                <Text sx={{ color: 'textLight', lineHeight: '16px' }}>12 Dec 2019</Text>
                <Text sx={{ color: 'textLight', lineHeight: '16px' }}>Username</Text>
              </Box>
              <Box>
                <Label>
                  <Checkbox />
                </Label>
              </Box>
            </Flex>
            <Box mt="2" sx={{ fontSize: 1 }}>
              Pending note related to this will show here
            </Box>
          </Card>
          <Card mb="3" px="4" py="2" bg="white" sx={{ border: '1px solid', borderColor: 'border', borderRadius: 'sm' }}>
            <Flex sx={{ justifyContent: 'space-between' }}>
              <Box sx={{ fontSize: 0 }}>
                <Text sx={{ color: 'textLight', lineHeight: '16px' }}>12 Dec 2019</Text>
                <Text sx={{ color: 'textLight', lineHeight: '16px' }}>Username</Text>
              </Box>
              <Box>
                <Label>
                  <Checkbox />
                </Label>
              </Box>
            </Flex>
            <Box mt="2" sx={{ fontSize: 1 }}>
              Pending note related to this will show here
            </Box>
          </Card>
        </Box>
        <Box>
          {/* Overview Section */}
          <Card variant={EnumCardsVariants.COLLAPSE}>
            <Flex
              sx={{
                justifyContent: 'space-between',
                borderBottom: '1px solid',
                borderColor: 'border',
                px: 6,
                py: 4,
                alignItems: 'center',
                fontFamily: 'IBMPlexSansMedium',
              }}>
              <Box>
                <Text color="primary" sx={{ fontSize: 3 }}>
                  Brand ID: 198433
                </Text>
              </Box>
              <Box>
                <Flex
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text sx={{ fontSize: 1, lineHeight: '18px' }}>
                    Last modified : Ankit{/* Username */} , 14 Feb 2020{/* Date */}
                  </Text>
                  <IconButton>
                    <OverflowIcon sx={{ ml: 4 }} />
                  </IconButton>
                </Flex>
              </Box>
            </Flex>
            <Flex
              sx={{
                px: 6,
                py: 4,
                lineHeight: 'normal',
              }}>
              <Box>
                <Text>
                  {/* Brand Name */}
                  Dramation Anthrologics, {/* City */}
                  Zurich, {/* Country */}
                  CH
                </Text>
                <Text>1st branduser_name</Text>
                <Text>
                  {/* user_email */} ankit@arthify.com | {/* user_mobile */} +91 24322 42324
                </Text>
              </Box>
              <Box pl="15">
                <Text as="span">
                  Brand Users :{' '}
                  <Text as="span" sx={{ color: 'link' }}>
                    3
                  </Text>
                </Text>
                <Text>
                  Customers :{' '}
                  <Text as="span" sx={{ color: 'link' }}>
                    2
                  </Text>
                </Text>
                <Text>
                  Customers Users :{' '}
                  <Text as="span" sx={{ color: 'link' }}>
                    18
                  </Text>
                </Text>
              </Box>
              <Box pl="15">
                <Text>Active Controcts: 13</Text>
              </Box>
            </Flex>
          </Card>
          {/* Manage Users */}
          <Card variant={EnumCardsVariants.COLLAPSE}>
            {/* collapse title */}
            <Flex variant={manageBrands ? CustomVariants.COLLAPSE_HEADER : CustomVariants.COLLAPSED_HEADER}>
              <Box>
                <Heading as="h3">
                  <IconButton>
                    <Checkmark sx={{ mr: 4 }} />
                  </IconButton>
                  Manage Brands
                </Heading>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton>
                  <OverflowIcon sx={{ ml: 4 }} />
                </IconButton>
                <IconButton onClick={collapseManageBrands}>
                  <ChevronDown sx={{ ml: 5, width: 20, height: '11.4' }} />
                </IconButton>
              </Box>
            </Flex>
            {/* Add Brand Form */}
            {manageBrands && <AddBrandForm />}
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default AddBrand;
