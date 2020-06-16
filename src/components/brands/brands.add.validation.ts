import * as yup from 'yup';
import { CreateBrandParams } from './brands.add.types';
import * as ErrorMessages from './brands.add.validation.error.messages';
import {
  serviceParameterValidation,
  marginsAndDiscountParametersValidation,
  required,
  optional,
} from './brands.add.validation.common';

export const validationSchema = yup
  .object<CreateBrandParams>({
    name: required(ErrorMessages.NameErrorMessages.REQUIRED),
    description: optional,
    streetNo: optional,
    streetName: required(ErrorMessages.StreetNameErrorMessages.REQUIRED),
    city: required(ErrorMessages.CityErrorMessages.REQUIRED),
    zipcode: required(ErrorMessages.ZipCodeErrorMessages.REQUIRED),
    country: required(ErrorMessages.CountryErrorMessages.REQUIRED),
    language: required(ErrorMessages.LanguageErrorMessages.REQUIRED),
    currency: required(ErrorMessages.CurrencyErrorMessages.REQUIRED),
    timezone: required(ErrorMessages.TimeZoneErrorMessages.REQUIRED),
    units: required(ErrorMessages.UnitsErrorMessages.REQUIRED),
    reportsHeaders: optional,
    reportsFooter: optional,
    logo: optional,
    brandPrimaryColor: optional,
    fmcServiceParameters: serviceParameterValidation,
    partnerServiceParameters: serviceParameterValidation,
    marginAndDiscountsParams: marginsAndDiscountParametersValidation,
    fmcId: required(ErrorMessages.FmcID.REQUIRED),
  })
  .defined();
