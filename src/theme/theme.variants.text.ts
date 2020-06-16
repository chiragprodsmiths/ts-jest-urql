export enum EnumTextVariants {
  'HEADING' = 'heading',
  'WHITE_SMALL' = 'whiteSmall',
  'SECONDARY_REGULAR' = 'secondaryRegular',
  'INPUT_ERROR' = 'inputError',
  'SELECT_PLACEHOLDER' = 'selectPlaceholder',
  'SELECT_PLACEHOLDER_HAS_VALUE' = 'selectPlaceholderHasValue',
  'SELECT_PLACEHOLDER_ERROR' = 'selectPlaceholderError',
  'SELECT_PLACEHOLDER_HAS_VALUE_ERROR' = 'selectPlaceholderHasValueError',
  'SELECTED_FILE_TEXT' = 'selectedFileText',
}

const select = {
  position: 'absolute',
  top: 0,
  left: 4,
  px: '2px',
  bg: 'white',
  display: 'inline-flex',
  width: 'auto',
  color: 'link',
  fontSize: 1,
  transition: 'all 0.2s',
  touchAction: 'manipulation',
};

export type ITextVariants = Record<EnumTextVariants, any>;

const TextVariants: ITextVariants = {
  heading: {
    fontFamily: 'heading',
    lineHeight: 'heading',
  },
  whiteSmall: {
    fontSize: 12,
    color: 'white',
  },
  secondaryRegular: {
    fontSize: 16,
    color: 'textLight',
  },
  inputError: {
    color: 'error',
    pl: 4,
    pt: '2px',
    position: 'absolute',
  },
  selectPlaceholder: {
    ...select,
    transform: 'translate(0, 12px)',
  },
  selectPlaceholderHasValue: {
    ...select,
    transform: 'translate(0, -9.5px)',
  },
  selectPlaceholderError: {
    ...select,
    color: 'error',
    transform: 'translate(0, 12px)',
  },
  selectPlaceholderHasValueError: {
    ...select,
    color: 'error',
    transform: 'translate(0, -9.5px)',
  },
  selectedFileText: {
    color: 'textLight',
    fontSize: 2,
    lineHeight: 'tight',
    position: 'relative',
    top: '-2px',
  },
};

export default TextVariants;
