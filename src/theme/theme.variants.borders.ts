import Colors from './theme.colors';

export enum EnumBorderVariants {
  'TABLE' = 'table',
}

export type IBorderVariants = Record<EnumBorderVariants, any>;

const BorderVariants: IBorderVariants = {
  table: `1px solid ${Colors.border}`,
};

export default BorderVariants;
