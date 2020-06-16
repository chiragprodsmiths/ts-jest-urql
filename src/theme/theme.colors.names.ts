import { colorValues, TypeColorValue } from './theme.colors.values';
import { asUniqueArray } from './types/theme.types.colors';

export const maroon: TypeColorValue[] = asUniqueArray([colorValues[0], colorValues[1], colorValues[2], colorValues[4]]);

export const black: TypeColorValue[] = asUniqueArray([colorValues[5], colorValues[6], colorValues[7], colorValues[8]]);

export const white: TypeColorValue[] = asUniqueArray([colorValues[9], colorValues[26]]);

export const red: TypeColorValue[] = asUniqueArray([colorValues[3], colorValues[10], colorValues[11]]);

export const green: TypeColorValue[] = asUniqueArray([colorValues[12], colorValues[13], colorValues[14]]);

export const blue: TypeColorValue[] = asUniqueArray([colorValues[15], colorValues[16]]);

export const yellow: TypeColorValue[] = asUniqueArray([colorValues[17], colorValues[18], colorValues[19]]);

export const grey: TypeColorValue[] = asUniqueArray([
  colorValues[20],
  colorValues[21],
  colorValues[22],
  colorValues[23],
  colorValues[24],
  colorValues[25],
]);

export const shadow: TypeColorValue[] = asUniqueArray([
  colorValues[27],
  colorValues[28],
  colorValues[29],
  colorValues[30],
  colorValues[31],
]);
