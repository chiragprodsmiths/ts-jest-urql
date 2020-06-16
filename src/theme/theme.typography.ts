import { FontNames } from 'theme/theme.fontface';
import * as Types from './types';

const Typography: Types.Typography = {
  fonts: {
    body: FontNames.REGULAR,
    light: FontNames.LIGHT,
    regular: FontNames.REGULAR,
    medium: FontNames.MEDIUM,
    semiBold: FontNames.SEMI_BOLD,
    bold: FontNames.BOLD,
    heading: FontNames.MEDIUM,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48],
  fontWeights: {
    extraThin: 200,
    thin: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    body: 400,
    heading: 500,
  },
  lineHeights: { none: 1, tight: 1.25, snug: 1.375, normal: 1.5, relaxed: 1.625, loose: 2, body: 1.25, heading: 1.25 },
};

export default Typography;
