/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
// theme ui
import { Container, Badge, IconButton, Button, Box, Checkbox, Close, Input, Label, Radio, Text } from 'theme-ui';
import AddIcon from 'components/icons/icon.add';
import Table from 'components/table';
import SubtractIcon from 'components/icons/icon.subtract';
import { CustomVariants } from 'theme/theme.variants';

type PropTypes = {};

/**
 * Login Page
 */
const AllComponents: React.FC<PropTypes> = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
        align: 'center',
      },
      {
        Header: 'First Name 1',
        accessor: 'firstName1',
      },
      {
        Header: 'Last Name 1',
        accessor: 'lastName1',
      },
      {
        Header: 'Age1',
        accessor: 'age1',
      },
      {
        Header: 'First Name 2',
        accessor: 'firstName2',
      },
      {
        Header: 'Last Name2',
        accessor: 'lastName2',
      },
      {
        Header: 'Age2',
        accessor: 'age2',
      },
    ],
    [],
  );

  const data = React.useMemo(
    () => [
      {
        firstName: 'Ankit',
        lastName: 'Patel',
        age: 36,
        firstName1: 'Ankit1 Ankit1 Ankit1',
        lastName1: 'Patel1',
        age1: 361,
        firstName2: 'Ankit2',
        lastName2: 'Patel2 Ankit2 Ankit2 Ankit2 Ankit2 Ankit2',
        age2: 362,
      },
      {
        firstName: 'Ankit',
        lastName: 'Patel Patel1 Patel1',
        age: 36,
        firstName1: 'Ankit1 Ankit1 Ankit1',
        lastName1: 'Patel1',
        age1: 361,
        firstName2: 'Ankit2',
        lastName2: 'Patel2 Ankit2 Ankit2 Ankit2 Ankit2 Ankit2',
        age2: 362,
      },
      {
        firstName: 'Ankit',
        lastName: 'Patel',
        age: 36,
        firstName1: 'Ankit1 Ankit1 Ankit1',
        lastName1: 'Patel1',
        age1: 361,
        firstName2: 'Ankit2',
        lastName2: 'Patel2 Ankit2 Ankit2 Ankit2 Ankit2 Ankit2',
        age2: 362,
      },
    ],
    [],
  );

  return (
    <Box>
      <Container p={8}>
        <Table columns={columns} data={data} />
      </Container>
      <Box variant="inputWrap">
        <Input
          variant="input"
          id="inputName"
          type="input"
          name="inputName"
          placeholder="Input"
          autoComplete="inputName"
          autoFocus
        />
        <Label htmlFor="input">Input</Label>
      </Box>
      <Box variant="inputWrap">
        <Input
          variant="inputError"
          id="inputError"
          name="userName"
          placeholder="Input With Error"
          autoComplete="inputError"
          autoFocus
        />
        <Label htmlFor="inputError">Input With Error</Label>
        <Text id="inputErrorError" variant="inputError">
          Error Message
        </Text>
      </Box>
      <Box variant="inputFileWrap">
        <Box variant="inputFileBox">
          <Input multiple id="uploadfile" type="file" placeholder="Brand Logo" variant="input" />
          <Label htmlFor="uploadfile">Upload File</Label>
          <Button variant="outline">Browse</Button>
        </Box>
        <Text variant="inputError" sx={{ color: 'textLight' }}>
          Only .jpg and .png, 2 Mb max file size
        </Text>
      </Box>
      <Box variant="inputFileWrap">
        <Box variant="inputFileBox">
          <Input multiple id="uploadfile2" type="file" placeholder="Brand Logo" variant="input" />
          <Label htmlFor="uploadfile2">Upload File</Label>
          <Button>Upload</Button>
          <Box variant="selectedFileWrap">
            <Badge variant="selectedFile">
              <Text variant="selectedFileText">Filename.png</Text>
              <Close variant="closeSmall" />
            </Badge>
            <Badge variant="selectedFile">
              <Text variant="selectedFileText">test.jpg</Text>
              <Close variant="closeSmall" />
            </Badge>
          </Box>
        </Box>
        <Text variant="inputError">File cannot exceed 2 Mb</Text>
      </Box>
      <Box variant="inputFileWrap">
        <Label sx={{ lineHeight: 'normal' }}>
          <Checkbox defaultChecked />
          Hello
        </Label>
      </Box>
      <Box variant="inputFileWrap">
        <Label sx={{ lineHeight: 'normal' }}>
          <Radio name="dark-mode" value="true" />
          Dark Mode
        </Label>
        <Label sx={{ lineHeight: 'normal' }}>
          <Radio name="dark-mode" value="false" />
          Light Mode
        </Label>
      </Box>
      <Box variant={CustomVariants.INPUT_WRAP}>
        <IconButton>
          <AddIcon sx={{ mr: 2 }} />{' '}
          <Text as="span" color="link" sx={{ fontFamily: 'IBMPlexSansMedium' }}>
            Add another Address
          </Text>
        </IconButton>
        <IconButton ml="8">
          <SubtractIcon sx={{ mr: 2 }} />
          <Text as="span" color="link" sx={{ fontFamily: 'IBMPlexSansMedium' }}>
            Remove
          </Text>
        </IconButton>
      </Box>
      <Text id="inputErrorError" variant="inputError">
        Error Message
      </Text>
      {/* Shimmer components */}
      <Box variant="animatedBackground" />
    </Box>
  );
};

export default AllComponents;
