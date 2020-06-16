export enum EnumBadgesVariants {
  'OUTLINE' = 'outline',
  'SELECTED_FILE' = 'selectedFile',
}

export type IBadgesVariants = Record<EnumBadgesVariants, any>;

const BadgesVariants: IBadgesVariants = {
  outline: {
    fontSize: 1,
    fontWeight: 'regular',
    borderRadius: 'label',
    bg: 'white',
    color: 'text',
    border: '1px solid',
    borderColor: 'border',
    px: 2,
    py: '2px',
  },
  selectedFile: {
    display: 'inline-flex',
    alignItems: 'center',
    bg: '#E6EDF5',
    justifyContent: 'center',
    fontWeight: 'regular',
    mr: 2,
    pl: 2,
    borderRadius: 0,
    minHeight: 24,
  },
};

export default BadgesVariants;
