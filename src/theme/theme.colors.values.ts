import { asUniqueArray } from './types/theme.types.colors';

export const colorValues = asUniqueArray([
  '#7B0537', // maroon[0] // 0
  '#7B05373D', // maroon[1]
  '#7B053752', // maroon[2]
  '#E22D51', // red[0]
  '#D75B77', // maroon[3]
  '#090D19', // black[0] // 5
  '#1F232C', // black[1]
  '#0F131E', // black[2]
  '#00000', // black[3]
  '#ffffff', // white[0]
  '#EE7874', // red[1] // 10
  '#FCB2AB', // red[2]
  '#31AA61', // green[0]
  '#5FCC7F', // green[1]
  '#B0F6B7', // green[2]
  '#3B6EE6', // blue[0] // 15
  '#33366F', // blue[1]
  '#F98509', // yellow[0]
  '#FBAC45', // yellow[1]
  '#FEDD9C', // yellow[2]
  '#656E7F', // grey[0] // 20
  '#9FACBF', // grey[1]
  '#CFDBE9', // grey[2]
  '#E6EDF5', // grey[3]
  '#F5F8F9', // grey[4]
  '#F1F4F6', // grey[5] // 25
  'rgba(255,255,255,0)', // white[1]
  '#656E7FE6', // shadow[0]
  '#656E7F52', // shadow[1]
  '#7B053799', // shadow[2]
  'rgba(15, 19, 30, 0.8)', // shadow[3] // 30
  '#1F232C29', // shadow[4]
]);

export type TypeColorValue = typeof colorValues[number];
