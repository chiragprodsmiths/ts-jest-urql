import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Button, Label, Input, Text, Heading, Box, Flex, Spinner } from 'theme-ui';
import { useMutation } from 'urql';
/**
 * app components
 */
import Select from 'components/select';
/**
 * Style variants
 */
import { EnumButtonVariants } from 'theme/theme.variants.buttons';
import { CustomVariants } from 'theme/theme.variants';
import { EnumInputVariants } from 'theme/theme.variants.input';
/**
 * Queries / Types / Validation
 */
import { createBrandMutation } from 'queries/queries.brands';
import { CreateBrandParams, CreateBrandResponse } from './brands.add.types';
import { validationSchema } from './brands.add.validation';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

/**
 * prop types
 */
type PropTypes = {};

const AddBrandForm: React.FC<PropTypes> = () => {
  const [addBrandErrors, setAddBrandErrors] = useState<boolean>(false);

  // react hook form => types(FormData)
  const { register, handleSubmit, errors, watch, control, getValues } = useForm<CreateBrandParams>({
    validationSchema,
  });

  // setup add brand mutation => types => mutation(AddbrandResponse, )
  const [{ fetching }, createBrand] = useMutation<CreateBrandResponse, CreateBrandParams>(createBrandMutation);

  const {
    name,
    description,
    streetNo,
    streetName,
    city,
    zipcode,
    country,
    language,
    currency,
    timezone,
    units,
    reportsHeaders,
    reportsFooter,
    logo,
    brandPrimaryColor,
    fmcServiceParameters: watchedFmcServiceParameters,
    partnerServiceParameters: watchedPartnerServiceParameters,
    marginAndDiscountsParams: watchedMarginsAndDiscountParameters,
  } = watch();

  // using this effect to clear submit errors if any of the field changes after error
  useEffect(() => {
    setAddBrandErrors(false);
  }, [
    name,
    description,
    streetNo,
    streetName,
    city,
    zipcode,
    country,
    language,
    currency,
    timezone,
    units,
    reportsHeaders,
    reportsFooter,
    logo,
    brandPrimaryColor,
    watchedFmcServiceParameters?.fleetManagement,
    watchedFmcServiceParameters?.maintenanceRepairs,
    watchedFmcServiceParameters?.tireManagement,
    watchedFmcServiceParameters?.fuelManagement,
    watchedFmcServiceParameters?.insurance,
    watchedFmcServiceParameters?.remarketing,
    watchedFmcServiceParameters?.onlineReporting,
    watchedFmcServiceParameters?.breakdownAssistance,
    watchedFmcServiceParameters?.carReplacement,
    watchedFmcServiceParameters?.warrantyExtension,
    watchedFmcServiceParameters?.leasing,
    watchedFmcServiceParameters?.smr,
    watchedPartnerServiceParameters?.fleetManagement,
    watchedPartnerServiceParameters?.maintenanceRepairs,
    watchedPartnerServiceParameters?.tireManagement,
    watchedPartnerServiceParameters?.fuelManagement,
    watchedPartnerServiceParameters?.insurance,
    watchedPartnerServiceParameters?.remarketing,
    watchedPartnerServiceParameters?.onlineReporting,
    watchedPartnerServiceParameters?.breakdownAssistance,
    watchedPartnerServiceParameters?.carReplacement,
    watchedPartnerServiceParameters?.warrantyExtension,
    watchedPartnerServiceParameters?.leasing,
    watchedPartnerServiceParameters?.smr,
    watchedMarginsAndDiscountParameters?.smr,
    watchedMarginsAndDiscountParameters?.smrDiscount,
    watchedMarginsAndDiscountParameters?.insurance,
    watchedMarginsAndDiscountParameters?.leasing,
    watchedMarginsAndDiscountParameters?.tire,
    watchedMarginsAndDiscountParameters?.tireDiscount,
    watchedMarginsAndDiscountParameters?.fuel,
    watchedMarginsAndDiscountParameters?.km,
  ]);

  // on form submit
  const onFormSubmit = async (brandObj: CreateBrandParams): Promise<void> => {
    console.log(brandObj);
    // TODO: @ankit remove comment
    const { data, error } = await createBrand(brandObj);
    if (error || !data || data === null) {
      setAddBrandErrors(true);
      console.log(addBrandErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {/* Brand Details */}
      <Box variant={CustomVariants.COLLAPSE_SECTION}>
        <Heading as="h4" mb="6">
          Brand Details
        </Heading>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="name"
              name="name"
              placeholder="Name*"
              autoComplete="off"
              autoFocus
              ref={register}
              aria-invalid={errors?.name ? 'true' : 'false'}
              aria-describedby="nameError"
              variant={errors?.name ? 'inputError' : 'input'}
            />
            <Label htmlFor="name">Name*</Label>
            {errors?.name && (
              <Text id="nameError" variant="inputError">
                {errors?.name?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="description"
              name="description"
              placeholder="Description"
              autoComplete="off"
              ref={register}
              variant="input"
            />
            <Label htmlFor="description">Description</Label>
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="language"
              name="language"
              placeholder="Language*"
              options={options}
              control={control}
              error={!!errors?.language}
              aria-invalid={errors?.language ? 'true' : 'false'}
              aria-describedby="languageError"
              valueName="selected.value"
              onChange={([selected]) => {
                return selected.value;
              }}
            />
            {errors?.language && (
              <Text id="languageError" variant="inputError">
                {errors?.language?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="currency"
              name="currency"
              placeholder="Currency*"
              options={options}
              control={control}
              error={!!errors?.currency}
              aria-invalid={errors?.currency ? 'true' : 'false'}
              aria-describedby="currencyError"
              valueName="selected.value"
              onChange={([selected]) => {
                return selected.value;
              }}
            />
            {errors?.currency && (
              <Text id="currencyError" variant="inputError">
                {errors?.currency?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="timezone"
              error={!!errors?.timezone}
              options={options}
              name="timezone"
              placeholder="Time Zone*"
              control={control}
              aria-invalid={errors?.timezone ? 'true' : 'false'}
              aria-describedby="timezoneError"
              valueName="selected.value"
              onChange={([selected]) => {
                return selected.value;
              }}
            />
            {errors?.timezone && (
              <Text id="timezoneError" variant="inputError">
                {errors?.timezone?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="units"
              error={!!errors?.units}
              options={options}
              name="units"
              placeholder="Units*"
              control={control}
              aria-invalid={errors?.units ? 'true' : 'false'}
              aria-describedby="unitsError"
              valueName="selected.value"
              onChange={([selected]) => {
                return selected.value;
              }}
            />
            {errors?.units && (
              <Text id="unitsError" variant="inputError">
                {errors?.units?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="reportsHeaders"
              name="reportsHeaders"
              placeholder="Reports Headers"
              autoComplete="off"
              ref={register}
              variant="input"
            />
            <Label htmlFor="reportsHeaders">Reports Headers</Label>
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="reportsFooter"
              name="reportsFooter"
              placeholder="Reports Footer"
              autoComplete="off"
              ref={register}
              variant="input"
            />
            <Label htmlFor="reportsFooter">Reports Footer</Label>
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="brandPrimaryColor"
              name="brandPrimaryColor"
              placeholder="Brand Primary Color"
              autoComplete="off"
              ref={register}
              variant="input"
            />
            <Label htmlFor="brandPrimaryColor">Brand Primary Color</Label>
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="logo"
              name="logo"
              type="file"
              placeholder="Brand Logo"
              autoComplete="off"
              ref={register}
              variant="input"
            />
            <Label htmlFor="logo">Logo</Label>
          </Box>
        </Grid>
      </Box>
      {/* Address */}
      <Box variant={CustomVariants.COLLAPSE_SECTION}>
        <Heading as="h4" mb="6">
          Address
        </Heading>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="streetNo"
              name="streetNo"
              placeholder="Street No"
              autoComplete="off"
              ref={register}
              variant="input"
            />
            <Label htmlFor="streetNo">Street No</Label>
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="streetName"
              name="streetName"
              placeholder="Street Name*"
              autoComplete="off"
              ref={register}
              aria-invalid={errors?.streetName ? 'true' : 'false'}
              aria-describedby="streetNameError"
              variant={errors?.streetName ? 'inputError' : 'input'}
            />
            <Label htmlFor="streetName">Street Name*</Label>
            {errors?.streetName && (
              <Text id="streetNameError" variant="inputError">
                {errors?.streetName?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="city"
              name="city"
              options={options}
              placeholder="City*"
              control={control}
              error={!!errors?.city}
              aria-invalid={errors?.city ? 'true' : 'false'}
              aria-describedby="cityError"
              valueName="selected.value"
              onChange={([selected]) => {
                return selected.value;
              }}
            />
            {errors?.city && (
              <Text id="cityError" variant="inputError">
                {errors?.city?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Controller
              as={Select}
              id="country"
              name="country"
              placeholder="Country*"
              options={options}
              control={control}
              error={!!errors?.country}
              aria-invalid={errors?.country ? 'true' : 'false'}
              aria-describedby="countryError"
              valueName="selected.value"
              onChange={([selected]) => {
                return selected.value;
              }}
            />
            {errors?.country && (
              <Text id="countryError" variant="inputError">
                {errors?.country?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={[2, null, 3]}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="zipcode"
              name="zipcode"
              placeholder="Zip Code*"
              autoComplete="off"
              ref={register}
              aria-invalid={errors?.zipcode ? 'true' : 'false'}
              aria-describedby="zipcodeError"
              variant={errors?.zipcode ? 'inputError' : 'input'}
            />
            <Label htmlFor="zipcode">Zip Code*</Label>
            {errors?.zipcode && (
              <Text id="zipcodeError" variant="inputError">
                {errors?.zipcode?.message}
              </Text>
            )}
          </Box>
        </Grid>
      </Box>
      {/* Service Parameters */}
      <Box variant={CustomVariants.COLLAPSE_SECTION}>
        <Heading as="h4" mb="6">
          Service Parameters
        </Heading>
        <Grid gap={10} columns={3} mb={3}>
          <Box />
          <Grid gap={4} columns={2}>
            <Label sx={{ justifyContent: 'center' }}>FMC</Label>
            <Label sx={{ justifyContent: 'center' }}>Partner</Label>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.fleetManagement">Fleet Management</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.fleetManagement"
                name="fmcServiceParameters.fleetManagement"
                placeholder="Fleet Management FMC"
                autoComplete="off"
                ref={register}
                aria-invalid={errors?.fmcServiceParameters?.fleetManagement ? 'true' : 'false'}
                aria-describedby="fmcServiceParameters.fleetManagementError"
                variant={
                  errors?.fmcServiceParameters?.fleetManagement
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.fleetManagement && (
                <Text id="fmcServiceParameters.fleetManagementError" variant="inputError">
                  {errors?.fmcServiceParameters?.fleetManagement?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.fleetManagement"
                name="partnerServiceParameters.fleetManagement"
                placeholder="Fleet Management Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.fleetManagement
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
                aria-invalid={errors?.partnerServiceParameters?.fleetManagement ? 'true' : 'false'}
                aria-describedby="partnerServiceParameters.fleetManagementError"
              />
              {errors?.partnerServiceParameters?.fleetManagement && (
                <Text id="partnerServiceParameters.fleetManagementError" variant="inputError">
                  {errors?.partnerServiceParameters?.fleetManagement?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.maintenanceRepairs">Maintenance Repairs</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.maintenanceRepairs"
                name="fmcServiceParameters.maintenanceRepairs"
                placeholder="Maintenance Repairs FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.maintenanceRepairs
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
                aria-invalid={errors?.fmcServiceParameters?.maintenanceRepairs ? 'true' : 'false'}
                aria-describedby="fmcServiceParameters.maintenanceRepairsError"
              />
              {errors?.fmcServiceParameters?.maintenanceRepairs && (
                <Text id="fmcServiceParameters.maintenanceRepairsError" variant="inputError">
                  {errors?.fmcServiceParameters?.maintenanceRepairs?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.maintenanceRepairs"
                name="partnerServiceParameters.maintenanceRepairs"
                placeholder="Maintenance Repairs Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.maintenanceRepairs
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.maintenanceRepairs && (
                <Text id="partnerServiceParameters.maintenanceRepairsError" variant="inputError">
                  {errors?.partnerServiceParameters?.maintenanceRepairs?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.tireManagement">Tire Management</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.tireManagement"
                name="fmcServiceParameters.tireManagement"
                placeholder="Tire Management FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.tireManagement
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.tireManagement && (
                <Text id="fmcServiceParameters.tireManagementError" variant="inputError">
                  {errors?.fmcServiceParameters?.tireManagement?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.tireManagement"
                name="partnerServiceParameters.tireManagement"
                placeholder="Tire Management Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.tireManagement
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.tireManagement && (
                <Text id="partnerServiceParameters.tireManagementError" variant="inputError">
                  {errors?.partnerServiceParameters?.tireManagement?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.fuelManagement">Fuel Management</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.fuelManagement"
                name="fmcServiceParameters.fuelManagement"
                placeholder="Fuel Management FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.fuelManagement
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.fuelManagement && (
                <Text id="fmcServiceParameters.fuelManagementError" variant="inputError">
                  {errors?.fmcServiceParameters?.fuelManagement?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.fuelManagement"
                name="partnerServiceParameters.fuelManagement"
                placeholder="Fuel Management Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.fuelManagement
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.fuelManagement && (
                <Text id="partnerServiceParameters.fuelManagementError" variant="inputError">
                  {errors?.partnerServiceParameters?.fuelManagement?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.insurance">Insurance</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.insurance"
                name="fmcServiceParameters.insurance"
                placeholder="Insurance FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.insurance ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.insurance && (
                <Text id="fmcServiceParameters.insuranceError" variant="inputError">
                  {errors?.fmcServiceParameters?.insurance?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.insurance"
                name="partnerServiceParameters.insurance"
                placeholder="Insurance Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.insurance
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.insurance && (
                <Text id="partnerServiceParameters.insuranceError" variant="inputError">
                  {errors?.partnerServiceParameters?.insurance?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.damageManagement">Damage Management</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.damageManagement"
                name="fmcServiceParameters.damageManagement"
                placeholder="Damage Management FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.damageManagement
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.damageManagement && (
                <Text id="fmcServiceParameters.damageManagementError" variant="inputError">
                  {errors?.fmcServiceParameters?.damageManagement?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.damageManagement"
                name="partnerServiceParameters.damageManagement"
                placeholder="Damage Management Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.damageManagement
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.damageManagement && (
                <Text id="partnerServiceParameters.damageManagementError" variant="inputError">
                  {errors?.partnerServiceParameters?.damageManagement?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.remarketing">Remarketing.</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.remarketing"
                name="fmcServiceParameters.remarketing"
                placeholder="Remarketing FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.remarketing
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.remarketing && (
                <Text id="fmcServiceParameters.remarketingError" variant="inputError">
                  {errors?.fmcServiceParameters?.remarketing?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.remarketing"
                name="partnerServiceParameters.remarketing"
                placeholder="Remarketing Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.remarketing
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.remarketing && (
                <Text id="partnerServiceParameters.remarketingError" variant="inputError">
                  {errors?.partnerServiceParameters?.remarketing?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.onlineReporting">Online Reporting</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.onlineReporting"
                name="fmcServiceParameters.onlineReporting"
                placeholder="Online Reporting FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.onlineReporting
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.onlineReporting && (
                <Text id="fmcServiceParameters.onlineReportingError" variant="inputError">
                  {errors?.fmcServiceParameters?.onlineReporting?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.onlineReporting"
                name="partnerServiceParameters.onlineReporting"
                placeholder="Online Reporting Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.onlineReporting
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.onlineReporting && (
                <Text id="partnerServiceParameters.onlineReportingError" variant="inputError">
                  {errors?.partnerServiceParameters?.onlineReporting?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.breakdownAssistance">Breakdown Assist.</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.breakdownAssistance"
                name="fmcServiceParameters.breakdownAssistance"
                placeholder="Breakdown Assist FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.breakdownAssistance
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.breakdownAssistance && (
                <Text id="fmcServiceParameters.breakdownAssistError" variant="inputError">
                  {errors?.fmcServiceParameters?.breakdownAssistance?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.breakdownAssistance"
                name="partnerServiceParameters.breakdownAssistance"
                placeholder="Breakdown Assist Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.breakdownAssistance
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.breakdownAssistance && (
                <Text id="partnerServiceParameters.breakdownAssistError" variant="inputError">
                  {errors?.partnerServiceParameters?.breakdownAssistance?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.carReplacement">Replacement Car</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.carReplacement"
                name="fmcServiceParameters.carReplacement"
                placeholder="Replacement Car FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.carReplacement
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.carReplacement && (
                <Text id="fmcServiceParameters.replacementCarError" variant="inputError">
                  {errors?.fmcServiceParameters?.carReplacement?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.carReplacement"
                name="partnerServiceParameters.carReplacement"
                placeholder="Replacement Car Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.carReplacement
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.carReplacement && (
                <Text id="partnerServiceParameters.replacementCarError" variant="inputError">
                  {errors?.partnerServiceParameters?.carReplacement?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.warrantyExtension">Warranty Ext.</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.warrantyExtension"
                name="fmcServiceParameters.warrantyExtension"
                placeholder="Warranty Ext FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.warrantyExtension
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.warrantyExtension && (
                <Text id="fmcServiceParameters.warrantyExtError" variant="inputError">
                  {errors?.fmcServiceParameters?.warrantyExtension?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.warrantyExtension"
                name="partnerServiceParameters.warrantyExtension"
                placeholder="Warranty Ext Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.warrantyExtension
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.warrantyExtension && (
                <Text id="partnerServiceParameters.warrantyExtError" variant="inputError">
                  {errors?.partnerServiceParameters?.warrantyExtension?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.leasing">Leasing</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.leasing"
                name="fmcServiceParameters.leasing"
                placeholder="Leasing FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.leasing ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.leasing && (
                <Text id="fmcServiceParameters.leasingError" variant="inputError">
                  {errors?.fmcServiceParameters?.leasing?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.leasing"
                name="partnerServiceParameters.leasing"
                placeholder="Leasing Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.leasing
                    ? EnumInputVariants.INPUT_ERROR
                    : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.leasing && (
                <Text id="partnerServiceParameters.leasingError" variant="inputError">
                  {errors?.partnerServiceParameters?.leasing?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP} sx={{ alignSelf: 'center' }}>
            <Label htmlFor="fmcServiceParameters.smr">SMR</Label>
          </Box>
          <Grid gap={4} columns={2}>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="fmcServiceParameters.smr"
                name="fmcServiceParameters.smr"
                placeholder="SMR FMC"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.fmcServiceParameters?.smr ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.SECONDARY
                }
              />
              {errors?.fmcServiceParameters?.smr && (
                <Text id="fmcServiceParameters.smrError" variant="inputError">
                  {errors?.fmcServiceParameters?.smr?.message}
                </Text>
              )}
            </Box>
            <Box variant={CustomVariants.INPUT_WRAP}>
              <Input
                id="partnerServiceParameters.smr"
                name="partnerServiceParameters.smr"
                placeholder="SMR Partner"
                autoComplete="off"
                ref={register}
                variant={
                  errors?.partnerServiceParameters?.smr ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.SECONDARY
                }
              />
              {errors?.partnerServiceParameters?.smr && (
                <Text id="partnerServiceParameters.smrError" variant="inputError">
                  {errors?.partnerServiceParameters?.smr?.message}
                </Text>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Margins & Discounts */}
      <Box variant={CustomVariants.COLLAPSE_SECTION}>
        <Heading as="h4" mb="6">
          Margins & Discounts
        </Heading>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="marginAndDiscountsParams.smr"
              name="marginAndDiscountsParams.smr"
              placeholder="SMR %"
              autoComplete="off"
              ref={register}
              variant={errors?.marginAndDiscountsParams?.smr ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="marginAndDiscountsParams.smr">SMR %</Label>
            {errors?.marginAndDiscountsParams?.smr && (
              <Text id="marginAndDiscountsParams.smrError" variant="inputError">
                {errors?.marginAndDiscountsParams?.smr?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="marginAndDiscountsParams.smrDiscount"
              name="marginAndDiscountsParams.smrDiscount"
              placeholder="SMR Discount %"
              autoComplete="off"
              ref={register}
              variant={
                errors?.marginAndDiscountsParams?.smrDiscount ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT
              }
            />
            <Label htmlFor="marginAndDiscountsParams.smrDiscount">SMR Discount %</Label>
            {errors?.marginAndDiscountsParams?.smrDiscount && (
              <Text id="marginAndDiscountsParams.smrDiscountError" variant="inputError">
                {errors?.marginAndDiscountsParams?.smrDiscount?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="marginAndDiscountsParams.insurance"
              name="marginAndDiscountsParams.insurance"
              placeholder="Insurance"
              autoComplete="off"
              ref={register}
              variant={
                errors?.marginAndDiscountsParams?.insurance ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT
              }
            />
            <Label htmlFor="marginAndDiscountsParams.insurance">Insurance</Label>
            {errors?.marginAndDiscountsParams?.insurance && (
              <Text id="marginAndDiscountsParams.insuranceError" variant="inputError">
                {errors?.marginAndDiscountsParams?.insurance?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="marginAndDiscountsParams.leasing"
              name="marginAndDiscountsParams.leasing"
              placeholder="Leasing %"
              autoComplete="off"
              ref={register}
              variant={
                errors?.marginAndDiscountsParams?.leasing ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT
              }
            />
            <Label htmlFor="marginAndDiscountsParams.leasing">Leasing %</Label>
            {errors?.marginAndDiscountsParams?.leasing && (
              <Text id="marginAndDiscountsParams.leasingError" variant="inputError">
                {errors?.marginAndDiscountsParams?.leasing?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="marginAndDiscountsParams.tire"
              name="marginAndDiscountsParams.tire"
              placeholder="Tire %"
              autoComplete="off"
              ref={register}
              variant={errors?.marginAndDiscountsParams?.tire ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="marginAndDiscountsParams.tire">Tire %</Label>
            {errors?.marginAndDiscountsParams?.tire && (
              <Text id="marginAndDiscountsParams.tireError" variant="inputError">
                {errors?.marginAndDiscountsParams?.tire?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="marginAndDiscountsParams.tireDiscount"
              name="marginAndDiscountsParams.tireDiscount"
              placeholder="Tire Discount"
              autoComplete="off"
              ref={register}
              variant={
                errors?.marginAndDiscountsParams?.tireDiscount ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT
              }
            />
            <Label htmlFor="marginAndDiscountsParams.tireDiscount">Tire Discount %</Label>
            {errors?.marginAndDiscountsParams?.tireDiscount && (
              <Text id="marginAndDiscountsParams.tireDiscountError" variant="inputError">
                {errors?.marginAndDiscountsParams?.tireDiscount?.message}
              </Text>
            )}
          </Box>
        </Grid>
        <Grid gap={10} columns={3}>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="marginAndDiscountsParams.fuel"
              name="marginAndDiscountsParams.fuel"
              placeholder="Fuel"
              autoComplete="off"
              ref={register}
              variant={errors?.marginAndDiscountsParams?.fuel ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="marginAndDiscountsParams.fuel">Fuel</Label>
            {errors?.marginAndDiscountsParams?.fuel && (
              <Text id="marginAndDiscountsParams.fuelError" variant="inputError">
                {errors?.marginAndDiscountsParams?.fuel?.message}
              </Text>
            )}
          </Box>
          <Box variant={CustomVariants.INPUT_WRAP}>
            <Input
              id="marginAndDiscountsParams.km"
              name="marginAndDiscountsParams.km"
              placeholder="KM"
              autoComplete="off"
              ref={register}
              variant={errors?.marginAndDiscountsParams?.km ? EnumInputVariants.INPUT_ERROR : EnumInputVariants.INPUT}
            />
            <Label htmlFor="marginAndDiscountsParams.km">KM</Label>
            {errors?.marginAndDiscountsParams?.km && (
              <Text id="marginAndDiscountsParams.kmError" variant="inputError">
                {errors?.marginAndDiscountsParams?.km?.message}
              </Text>
            )}
          </Box>
        </Grid>
      </Box>
      <Flex variant={CustomVariants.COLLAPSE_FOOTER}>
        <Button variant={EnumButtonVariants.PRIMARY} type="submit" disabled={fetching} sx={{ mr: 5 }}>
          Save
          {fetching && <Spinner variant={CustomVariants.BUTTON_LOADER_PRIMARY} />}
        </Button>
        <Button variant={EnumButtonVariants.OUTLINE} type="button">
          Cancel
        </Button>
      </Flex>
      <pre>{JSON.stringify(getValues(), null, 2)}</pre>
      {/* TODO: @chirag to map below error to urql error message */}
      {addBrandErrors && (
        <Text id="submitError" variant="inputError">
          Add Brand Failed
        </Text>
      )}
    </form>
  );
};

export default AddBrandForm;
