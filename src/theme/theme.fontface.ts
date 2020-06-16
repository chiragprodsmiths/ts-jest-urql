import IBMPlexSansLight from './fonts/IBMPlexSans-Light.ttf';
import IBMPlexSansRegular from './fonts/IBMPlexSans-Regular.ttf';
import IBMPlexSansMedium from './fonts/IBMPlexSans-Medium.ttf';
import IBMPlexSansSemiBold from './fonts/IBMPlexSans-SemiBold.ttf';
import IBMPlexSansBold from './fonts/IBMPlexSans-Bold.ttf';

enum Fonts {
  LIGHT = IBMPlexSansLight,
  REGULAR = IBMPlexSansRegular,
  MEDIUM = IBMPlexSansMedium,
  SEMI_BOLD = IBMPlexSansSemiBold,
  BOLD = IBMPlexSansBold,
}

export enum FontNames {
  LIGHT = 'IBMPlexSansLight',
  REGULAR = 'IBMPlexSansRegular',
  MEDIUM = 'IBMPlexSansMedium',
  SEMI_BOLD = 'IBMPlexSansSemiBold',
  BOLD = 'IBMPlexSansBold',
}

type FontFamily = {
  fontFamily: FontNames;
  src: string;
  fontWeight: 'regular';
  fontStyle: 'regular';
  fontDisplay: 'fallback';
};

type FontFace = {
  '@font-face': FontFamily;
};

const light: FontFace = {
  '@font-face': {
    fontFamily: FontNames.LIGHT,
    src: `url(${Fonts.LIGHT})`,
    fontWeight: 'regular',
    fontStyle: 'regular',
    fontDisplay: 'fallback',
  },
};

const regular: FontFace = {
  '@font-face': {
    fontFamily: FontNames.REGULAR,
    src: `url(${Fonts.REGULAR})`,
    fontWeight: 'regular',
    fontStyle: 'regular',
    fontDisplay: 'fallback',
  },
};

const medium: FontFace = {
  '@font-face': {
    fontFamily: FontNames.MEDIUM,
    src: `url(${Fonts.MEDIUM})`,
    fontWeight: 'regular',
    fontStyle: 'regular',
    fontDisplay: 'fallback',
  },
};

const semiBold: FontFace = {
  '@font-face': {
    fontFamily: FontNames.SEMI_BOLD,
    src: `url(${Fonts.SEMI_BOLD})`,
    fontWeight: 'regular',
    fontStyle: 'regular',
    fontDisplay: 'fallback',
  },
};

const bold: FontFace = {
  '@font-face': {
    fontFamily: FontNames.BOLD,
    src: `url(${Fonts.BOLD})`,
    fontWeight: 'regular',
    fontStyle: 'regular',
    fontDisplay: 'fallback',
  },
};

type FontFaces = {
  light: FontFace;
  regular: FontFace;
  medium: FontFace;
  semiBold: FontFace;
  bold: FontFace;
};

const fontFaces: FontFaces = {
  light,
  regular,
  medium,
  semiBold,
  bold,
};

export default fontFaces;
