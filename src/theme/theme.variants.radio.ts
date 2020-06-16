export enum EnumRadioVariants {
  'RADIO' = 'radio',
}

export type IRadioVariants = Record<EnumRadioVariants, any>;

const RadioVariants: IRadioVariants = {
  radio: {
    color: '#ccc',
  },
};

export default RadioVariants;
