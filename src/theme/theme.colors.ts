import { ColorPalette } from './theme.colors.palette';
import { TypeColorValue } from './theme.colors.values';

/**
 * TODO: declare color mode type
 * add color sample color mode to test
 */
type Variants = {
  text: TypeColorValue;
  background: TypeColorValue;
  primary: TypeColorValue;
  secondary: TypeColorValue;
  accent: TypeColorValue;
  highlight: TypeColorValue;
  muted: TypeColorValue;
  textLight: TypeColorValue;
  border: TypeColorValue;
  logo: TypeColorValue;
  logoText: TypeColorValue;
  subHeader: TypeColorValue;
  link: TypeColorValue;
  label: TypeColorValue;
  greyShadow: TypeColorValue;
  pinkShadow: TypeColorValue;
  activeShadow: TypeColorValue;
  tableRowShadow: TypeColorValue;
  transparent: TypeColorValue;
  black: TypeColorValue;
  white: TypeColorValue;
  primaryIcon: TypeColorValue;
  authBg: TypeColorValue;
  buttonHoverShadow: TypeColorValue;
  buttonOutlineShadow: TypeColorValue;
  overlay: TypeColorValue;
  error: TypeColorValue;
};

const Colors: Variants = {
  background: ColorPalette.grey[5],
  primary: ColorPalette.maroon[0],
  text: ColorPalette.black[1],
  secondary: ColorPalette.black[2],
  accent: ColorPalette.red[2],
  highlight: ColorPalette.blue[0],
  muted: ColorPalette.grey[1],
  transparent: ColorPalette.white[1],
  black: ColorPalette.black[3],
  white: ColorPalette.white[0],
  textLight: ColorPalette.grey[0],
  border: ColorPalette.grey[2],
  logo: ColorPalette.blue[1],
  logoText: ColorPalette.black[0],
  subHeader: ColorPalette.grey[4],
  link: ColorPalette.blue[0],
  label: ColorPalette.maroon[3],
  greyShadow: ColorPalette.grey[3],
  pinkShadow: ColorPalette.maroon[1],
  activeShadow: ColorPalette.maroon[2],
  tableRowShadow: ColorPalette.shadow[4],
  primaryIcon: ColorPalette.grey[1],
  authBg: ColorPalette.shadow[0],
  buttonHoverShadow: ColorPalette.shadow[2],
  buttonOutlineShadow: ColorPalette.shadow[1],
  overlay: ColorPalette.shadow[3],
  error: ColorPalette.red[0],
};

export default Colors;
