import { TypeColorValue } from './theme.colors.values';
import { maroon, black, white, red, green, blue, yellow, grey, shadow } from './theme.colors.names';

type TypeColorPalette = {
  maroon: TypeColorValue[];
  black: TypeColorValue[];
  white: TypeColorValue[];
  red: TypeColorValue[];
  green: TypeColorValue[];
  blue: TypeColorValue[];
  yellow: TypeColorValue[];
  grey: TypeColorValue[];
  shadow: TypeColorValue[];
};

export const ColorPalette: TypeColorPalette = {
  maroon,
  black,
  white,
  red,
  green,
  blue,
  yellow,
  grey,
  shadow,
};
