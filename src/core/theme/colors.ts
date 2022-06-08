import { palette } from './palette';

export const Colors = {
  // color names are based on https://colornamer.netlify.app/
  primary: palette.venetianNights,
  productImageBorder: palette.sharpGrey,
  productPrice: palette.black,
  productQuantity: palette.faintFern,
  productTitle: palette.mischka,
  summaryBackground: palette.bleachedSilk,
  summaryHeading: palette.stormGrey,
  summaryText: palette.blackMarket,
  white: palette.white,
};

export type ColorsType = typeof Colors;
export type KeyColors = keyof ColorsType;
