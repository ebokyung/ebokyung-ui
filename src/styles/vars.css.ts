// TODO: theme token 적용하고 삭제하기
import { createGlobalTheme } from '@vanilla-extract/css';

const colorPalette = {
  colors: {
    primary: '#18181B',
    primaryHover: '#F4F4F4',
    secondary: '#C4C4C4',
    secondaryHover: '#F4F4F4',
    negative: '#DC2625',
    negativeHover: '#f8d3d3',
  },
};

export const vars = createGlobalTheme(':root', colorPalette);
