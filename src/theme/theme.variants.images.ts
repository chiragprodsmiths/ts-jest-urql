export enum EnumImagesVariants {
  'LOGO' = 'logo',
}

export type IImagesVariants = Record<EnumImagesVariants, any>;

const ImagesVariants: IImagesVariants = {
  logo: {
    maxHeight: 36,
    maxWidth: 36,
    mr: 3,
  },
};

export default ImagesVariants;
