import { createVar, globalStyle, style } from '@vanilla-extract/css';

const bgColor = createVar();
const hoverBgColor = createVar();
const textColor = createVar();
const focusBgColor = createVar();
const borderColor = createVar();

export const menubar = style({
  width: 'fit-content',
  border: '1px solid #c4c4c4',
  borderRadius: '0.5rem',
  padding: '0.25rem',
  display: 'flex',
  gap: '0.25rem',
  //   flexDirection: ''
});

export const menubarMenu = style({
  position: 'relative',
});

export const menubarTrigger = style({
  fontWeight: '500',
  backgroundColor: bgColor,
  color: textColor,
  padding: '0.5rem 1rem',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  selectors: {
    '&.active': {
      backgroundColor: hoverBgColor,
    },
  },
});

export const menubarContent = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '1rem',
  marginTop: '1.5rem',
  padding: '0.25rem',
  borderRadius: '0.5rem',
  border: '1px solid #c4c4c4',
  backgroundColor: bgColor,
});

export const menubarItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  borderRadius: '0.25rem',
  color: textColor,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: hoverBgColor,
  },
  selectors: {
    '&.disabled': {
      opacity: '0.3',
      pointerEvents: 'none',
    },
    '&.disabled:hover': {
      backgroundColor: 'inherit',
    },
  },
});

export const itemIcon = style({
  marginRight: '0.5rem',
});
export const itemContent = style({
  display: 'flex',
  flexShrink: 0,
  flexGrow: 1,
  whiteSpace: 'nowrap',
});
export const itemShortcut = style({
  display: 'flex',
  marginLeft: '1rem',
  fontSize: '0.875rem',
  opacity: '0.5',
});

export const menubarSeparator = style({
  margin: '0.25rem 0',
  borderBottom: '2px dotted',
  borderColor: borderColor,
});

//

export const menuThemeVars = {
  bgColor: 'teal.500',
  hoverBgColor: '#f4f4f5',
  textColor: 'gray.200',
  focusBgColor: 'f4f4f5',
  borderColor: '#d4d4d4',
};

globalStyle(':root', {
  vars: {
    [bgColor]: menuThemeVars.bgColor,
    [hoverBgColor]: menuThemeVars.hoverBgColor,
    [textColor]: menuThemeVars.textColor,
    [focusBgColor]: menuThemeVars.focusBgColor,
    [borderColor]: menuThemeVars.borderColor,
  },
});
