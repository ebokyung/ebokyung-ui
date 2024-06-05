import { createVar, globalStyle, style } from '@vanilla-extract/css';

const bgColor = createVar();
const hoverBgColor = createVar();
const textColor = createVar();
const hoverTextColor = createVar();
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
  ':hover': {
    backgroundColor: hoverBgColor,
    color: hoverTextColor,
  },
});

export const menubarContent = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '2.5rem',
  padding: '0.5rem 0',
  borderRadius: '0.5rem',
  border: '1px solid #c4c4c4',
  backgroundColor: bgColor,
});

export const menubarItem = style({
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'space-between',
  // gap: '0.5rem',
  padding: '0.25rem 0.5rem',
  color: textColor,
  ':hover': {
    backgroundColor: hoverBgColor,
  },
  ':focus': {
    backgroundColor: focusBgColor,
  },
});

export const itemIcon = style({
  flexShrink: 0,
  marginRight: '0.5rem',
});
export const itemContent = style({ flexShrink: 0, flexGrow: 1 });
export const itemShortcut = style({ flexShrink: 0, marginLeft: '0.5rem' });

// export const menubarCommand = style({
//     opacity: '0.8',
//     fontSize: '0.875rem',
//     paddingLeft: '1rem',
//   });

export const menubarSeparator = style({
  margin: '0.5rem 0',
  borderColor: borderColor,
  borderBottom: '2px dotted',
});

export const menuThemeVars = {
  bgColor: 'teal.500',
  hoverBgColor: 'gray',
  // hoverBgColor: 'teal.600',
  textColor: 'gray.200',
  hoverTextColor: 'white',
  focusBgColor: 'teal.600',
  borderColor: 'white',
};

globalStyle(':root', {
  vars: {
    [bgColor]: menuThemeVars.bgColor,
    [hoverBgColor]: menuThemeVars.hoverBgColor,
    [textColor]: menuThemeVars.textColor,
    [hoverTextColor]: menuThemeVars.hoverTextColor,
    [focusBgColor]: menuThemeVars.focusBgColor,
    [borderColor]: menuThemeVars.borderColor,
  },
});
