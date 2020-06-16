import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Label, Input, Box, Flex, Text } from 'theme-ui';
import { FormData } from './types';
import { validationSchema } from './validation';

export type PropTypes = {};

const RequestAnAccount: React.FC<PropTypes> = () => {
  const { register, handleSubmit, errors } = useForm<FormData>({ validationSchema });

  console.log(errors);

  const onSubmit = (formData: FormData): void => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Box variant="inputWrap">
        <Input
          id="name"
          placeholder="Name"
          name="name"
          autoFocus
          autoComplete="off"
          ref={register}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby="nameError"
        />
        <Label htmlFor="name">Name</Label>
        {errors.name && (
          <Text
            id="nameError"
            sx={{
              color: 'error',
              pl: 4,
              pt: 1,
              position: 'absolute',
              display: 'none',
            }}>
            {errors.name.message}
          </Text>
        )}
      </Box>
      <Box variant="inputWrap">
        <Input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          ref={register}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby="emailError"
        />
        <Label htmlFor="email">Email</Label>
        {errors.name && (
          <Text
            id="emailError"
            sx={{
              color: 'error',
              pl: 4,
              pt: 1,
              position: 'absolute',
              display: 'none',
            }}>
            {errors.name.message}
          </Text>
        )}
      </Box>
      <Box variant="inputWrap">
        <Input
          id="title"
          placeholder="title"
          name="title"
          autoComplete="off"
          ref={register}
          aria-invalid={errors.title ? 'true' : 'false'}
          aria-describedby="titleError"
        />
        <Label htmlFor="title">Title</Label>
        {errors.title && (
          <Text
            id="titleError"
            sx={{
              color: 'error',
              pl: 4,
              pt: 1,
              position: 'absolute',
              display: 'none',
            }}>
            {errors.title.message}
          </Text>
        )}
      </Box>
      <Box variant="inputWrap">
        <Input
          id="organization"
          placeholder="Organization"
          name="organization"
          autoComplete="off"
          ref={register}
          aria-invalid={errors.organization ? 'true' : 'false'}
          aria-describedby="organizationError"
        />
        <Label htmlFor="organization">Organization Name</Label>
        {errors.organization && (
          <Text
            id="organizationError"
            sx={{
              color: 'error',
              pl: 4,
              pt: 1,
              position: 'absolute',
              display: 'none',
            }}>
            {errors.organization.message}
          </Text>
        )}
      </Box>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="primary" type="submit">
          Request
        </Button>
        <Button variant="outline">Cancel</Button>
      </Flex>
    </form>
  );
};

RequestAnAccount.defaultProps = {
  visible: false,
};

export default RequestAnAccount;
