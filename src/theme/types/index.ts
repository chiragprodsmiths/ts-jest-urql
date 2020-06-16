import { FontNames } from 'theme/theme.fontface';

export interface Typography {
  fonts: Record<string, FontNames>;
  fontSizes: number[];
  fontWeights: Record<string, number>;
  lineHeights: Record<string, number>;
  letterSpacings?: Record<string, string | number>;
}
