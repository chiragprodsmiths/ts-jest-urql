export enum EnumButtonVariants {
  'PRIMARY' = 'primary',
  'OUTLINE' = 'outline',
  'ICON' = 'icon',
  'TRANSPARENT' = 'transparent',
  'ICON_LINK' = 'iconLink',
  'TAB' = 'tab',
  'TAB_ACTIVE' = 'tabActive',
  'CLOSE' = 'close',
  'CLOSE_SMALL' = 'closeSmall',
  'LINK' = 'link',
  'PAGINATION' = 'pagination',
}

export type IButtonVariants = Record<EnumButtonVariants, any>;

/**
 * TODO:
 * primary
 * py is not from theme, minWidth should be number as all values are pixels by default
 * outline
 */
export const ButtonVariants: IButtonVariants = {
  primary: {
    px: 3,
    py: 3,
    color: 'white',
    bg: 'primary',
    minWidth: '176px',
    boxShadow: 'buttonShadow',
    '&:hover': {
      boxShadow: 'buttonHoverShadow',
    },
    '&:disabled': {
      boxShadow: 'none',
      bg: 'greyShadow',
      color: 'muted',
    },
  },
  outline: {
    px: 3,
    py: 3,
    bg: 'transparent',
    border: '1px solid',
    minWidth: '176px',
    borderColor: 'textLight',
    color: 'text',
    '&:hover': {
      boxShadow: 'buttonOutlineShadow',
    },
    '&:disabled': {
      boxShadow: 'none',
      borderColor: 'border',
      color: 'border',
    },
  },
  icon: {
    width: 'auto',
    height: 'auto',
    padding: 0,
    fontSize: 2,
  },
  iconLink: {
    width: 'auto',
    height: 'auto',
    padding: 0,
    fontSize: 2,
    cursor: 'pointer',
    color: 'text',
  },
  close: {
    color: 'textLight',
    px: 0,
    py: 0,
    width: 28,
    height: 28,
  },
  closeSmall: {
    color: 'textLight',
    px: 0,
    py: 0,
    width: 20,
    height: 20,
    ml: 2,
  },
  transparent: {
    bg: 'transparent',
    color: 'inherit',
  },
  tab: {
    bg: 'transparent',
    color: 'textLight',
    borderRadius: 'none',
    minWidth: 88,
    '&:hover': {
      color: 'text',
    },
    '&:active': {
      color: 'text',
      fontWeight: 'medium',
    },
  },
  tabActive: {
    bg: 'transparent',
    color: 'text',
    fontFamily: 'medium',
    borderRadius: 'none',
    position: 'relative',
    minWidth: 88,
    // borderBottom: '2px solid',
    // borderColor: 'primary',
    // mb: '-2px',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      left: 0,
      right: 0,
      height: '2px',
      boxShadow: 'tabActive',
      bottom: '-2px',
      bg: 'primary',
      borderRadius: 'sm',
    },
  },
  link: {
    color: 'link',
    fontSize: 1,
    bg: 'transparent',
    padding: 0,
  },
  pagination: {
    fontSize: 1,
    minWidth: '24px',
    px: 0,
    py: 1,
    textAlign: 'center',
    color: 'textLight',
    bg: 'transparent',
    borderRadius: 0,
    overflow: 'hidden',
    '&:hover': {
      color: 'primary',
    },
  },
};
