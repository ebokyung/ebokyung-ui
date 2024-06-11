import { palette } from './palette';
import { fontSizes, fontWeights } from './typography';
import { borderRadius, borderWidths } from './border';
import { space } from './space';

export const tokens = {
  // color: {
  //   primary: {
  //     bg: palette.primary,
  //     text: palette.white,
  //   },
  //   secondary: {
  //     bg: palette.secondary,
  //     text: palette.black,
  //   },
  //   negative: {}
  // },
  palette,
  fontSizes,
  fontWeights,
  border: {
    radius: borderRadius,
    width: borderWidths,
  },
  space,
} as const;
