export enum EnumInputVariants {
  'INPUT' = 'input',
  'INPUT_ERROR' = 'inputError',
  'SECONDARY' = 'secondary',
}

export type IInputVariants = Record<EnumInputVariants, object>;

const InputVariants: IInputVariants = {
  input: {
    outline: 'none',
    px: 4,
    py: 3,
    bg: 'white',
    borderColor: 'border',
    position: 'relative',
    borderRadius: 'sm',
    color: 'text',
    width: '100%',
    lineHeight: 1.4,
    fontSize: 2,
    '&::-webkit-input-placeholder': {
      opacity: 0,
      transition: 'inherit',
    },
    '&:focus': {
      borderColor: 'link',
    },
    '&:-internal-autofill-selected': {
      boxShadow: '0 0 0px 1000px white inset',
    },
    '&:-webkit-autofill': {
      '&:first-line': {
        font: '400 16px IBMPlexSansRegular',
        lineHeight: 1.4,
      },
      '&:focus': {
        boxShadow: '0 0 0px 1000px white inset',
      },
    },
    '& + label': {
      position: 'absolute',
      top: '2px',
      left: 4,
      bg: 'white',
      display: 'inline-flex',
      width: 'auto',
      color: 'textLight',
      transition: 'all 0.2s',
      touchAction: 'manipulation',
      transform: 'translate(0, 12px)',
    },
    '&:focus + label': {
      transform: 'translate(0, -9.5px)',
      top: '2px',
      px: '2px',
      fontSize: 1,
      color: 'link',
    },
    '&:not([type="file"])': {
      '&:not(:placeholder-shown)': {
        borderColor: 'link',
      },
      '&:not(:placeholder-shown) + label': {
        transform: 'translate(0, -9.5px)',
        px: '2px',
        fontSize: 1,
        color: 'link',
      },
    },
    '&[type="file"]': {
      pl: 10000,
      '&:placeholder-shown': {
        display: 'none',
        '& + label': {
          transform: 'translate(0, -9.5px)',
        },
      },
      '& + label': {
        '& + button': {
          position: 'absolute',
          right: 3,
          top: 2,
          py: 2,
          minWidth: 112,
          fontSize: 1,
        },
      },
    },
    '&:disabled': {
      bg: 'greyShadow',
      color: 'muted',
      borderColor: 'greyShadow',
      cursor: 'not-allowed',
    },
    '&:disabled + label': {
      color: 'muted',
      bg: 'transparent',
    },
  },
  inputError: {
    px: 4,
    py: 3,
    bg: 'white',
    position: 'relative',
    borderRadius: 'sm',
    color: 'text',
    borderColor: 'error',
    outline: 'none',
    width: '100%',
    lineHeight: 1.4,
    '&::-webkit-input-placeholder': {
      opacity: 0,
      transition: 'inherit',
    },
    '&:-internal-autofill-selected': {
      boxShadow: '0 0 0px 1000px white inset',
    },
    '&:-webkit-autofill': {
      '&:first-line': {
        font: '400 16px IBMPlexSansRegular',
        lineHeight: 1.4,
      },
      '&:focus': {
        boxShadow: '0 0 0px 1000px white inset',
      },
    },
    '& + label': {
      position: 'absolute',
      top: '2px',
      left: 4,
      display: 'inline-flex',
      width: 'auto',
      bg: 'white',
      color: 'textLight',
      transition: 'all 0.2s',
      touchAction: 'manipulation',
      transform: 'translate(0, 12px)',
    },
    '&:focus + label': {
      transform: 'translate(0, -9.5px)',
      px: '2px',
      fontSize: 1,
      color: 'error',
    },
    '&:not(:placeholder-shown) + label': {
      transform: 'translate(0, -9.5px)',
      px: '2px',
      fontSize: 1,
      color: 'error',
    },
  },
  secondary: {
    outline: 'none',
    px: 4,
    py: 3,
    bg: 'white',
    borderColor: 'border',
    position: 'relative',
    borderRadius: 'sm',
    color: 'text',
    width: '100%',
    lineHeight: 1.4,
    fontSize: 2,
    '&::-webkit-input-placeholder': {
      opacity: 0,
      transition: 'inherit',
    },
    '&:focus': {
      borderColor: 'link',
    },
    '&:-internal-autofill-selected': {
      boxShadow: '0 0 0px 1000px white inset',
    },
    '&:-webkit-autofill': {
      '&:first-line': {
        font: '400 16px IBMPlexSansRegular',
        lineHeight: 1.4,
      },
      '&:focus': {
        boxShadow: '0 0 0px 1000px white inset',
      },
    },
    '&:not(:placeholder-shown)': {
      borderColor: 'link',
    },
    '&:disabled': {
      bg: 'greyShadow',
      color: 'muted',
      borderColor: 'greyShadow',
      cursor: 'not-allowed',
    },
  },
};

export default InputVariants;
