import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#18181B',
    secondary: '#F4F4F5',
    negative: '#DC2625',
  },
});
