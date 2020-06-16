export type ServiceParametersParams = {
  fleetManagement: number | null;
  maintenanceRepairs: number | null;
  tireManagement: number | null;
  fuelManagement: number | null;
  insurance: number | null;
  damageManagement: number | null;
  remarketing: number | null;
  onlineReporting: number | null;
  breakdownAssistance: number | null;
  carReplacement: number | null;
  warrantyExtension: number | null;
  leasing: number | null;
  smr: number | null;
};

export type MarginAndDiscountsParams = {
  smr: number | null;
  smrDiscount: number | null;
  insurance: number | null;
  leasing: number | null;
  tire: number | null;
  tireDiscount: number | null;
  fuel: number | null;
  km: number | null;
};

export type CreateBrandParams = {
  name: string;
  description?: string | null;
  streetNo: string | null;
  streetName: string;
  city: string;
  zipcode: string;
  country: string;
  language: string;
  currency: string;
  timezone: string;
  units: string;
  reportsHeaders: string | null;
  reportsFooter: string | null;
  logo: string | null;
  brandPrimaryColor: string | null;
  fmcServiceParameters: ServiceParametersParams;
  partnerServiceParameters: ServiceParametersParams;
  marginAndDiscountsParams: MarginAndDiscountsParams;
  fmcId: string;
};

export type CreateBrandResponse = {
  createBrand?: {
    id: string;
    marginAndDiscountsId: string;
    fmcServiceParametersId: string;
    partnerServiceParametersId: string;
  };
};
