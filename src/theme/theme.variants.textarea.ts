export enum EnumTextareaVariants {
  'TEXTAREA' = 'textarea',
}

export type ITextareaVariants = Record<EnumTextareaVariants, any>;

const TextareaVariants: ITextareaVariants = {
  textarea: {
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
    '&:focus': {
      borderColor: 'link',
    },
  },
};

export default TextareaVariants;
