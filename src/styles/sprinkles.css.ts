import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

const unresponsiveProperties = defineProperties({
  properties: {
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    objectFit: ['contain', 'cover'],
    border: ['none'],
    borderStyle: ['solid', 'dotted', 'dashed', 'none', 'hidden'],
    borderRadius: vars.border.radius,
    borderWidth: vars.border.width,
    outlineWidth: vars.border.width,
    pointerEvents: ['none'],
    cursor: ['default', 'pointer', 'not-allowed'],
    visibility: ['hidden', 'visible'],
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    // etc.
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

// const responsiveAtomicProps = defineProperties({
//   properties: responsiveProperties,
//   conditions: {
//     sm: {},
//     md: { '@media': `screen and ...` },
//     lg: { '@media': `screen and ...` },
//   },
//   defaultCondition: 'sm',
//   responsiveArray: ['sm', 'md', 'lg'],
// });

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.palette,
    background: vars.palette,
    // etc.
  },
});

export const textProperties = defineProperties({
  properties: {
    fontWeight: vars.fontWeights,
    fontSize: vars.fontSizes,
  },
});

const selectorPropertis = defineProperties({
  conditions: {
    base: {},
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
    placeholder: { selector: '&::placeholder' },
  },
  defaultCondition: 'base',
  properties: {
    background: vars.palette,
    borderColor: vars.palette,
    color: vars.palette,
    outlineColor: vars.palette,
  },
});

export const sprinkles = createSprinkles(
  unresponsiveProperties,
  responsiveProperties,
  colorProperties,
  textProperties,
  selectorPropertis,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
