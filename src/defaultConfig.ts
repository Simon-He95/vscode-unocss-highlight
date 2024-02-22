export const defaultEnabledUtilities = [
  'width',
  'height',
  'flex',
  'grid',
  'position',
]

export const defaultUtilitiesConfig = {
  padding: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)p(|t|b|r|l|x|y)-[^`\'"\\s]+',
    color: 'rgba(187, 196, 136, 1)',
  },
  margin: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)m(|t|b|r|l|x|y)-[^`\'"\\s]+',
    color: 'rgba(173, 134, 91, 1)',
  },
  space: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)space-(x|y)-[^`\'"\\s]+',
    color: 'rgba(173, 134, 91, 1)',
  },
  border: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?border(?!-collapse|-separate)(|-)[^`\'"\\s]*',
    color: 'rgba(222, 195, 138, 1)',
  },
  rounded: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?rounded(|-)[^`\'"\\s]*',
    color: 'rgba(222, 195, 138, 1)',
  },
  divide: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?divide(|-)[^`\'"\\s]*',
    color: 'rgba(222, 195, 138, 1)',
  },
  ring: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?ring(|-)[^`\'"\\s]*',
    color: 'rgba(222, 195, 138, 1)',
  },
  width: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)(|max|min)(|-)w-[^`\'"\\s]+',
    color: 'rgba(160, 202, 222, 1)',
  },
  height: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)(|max|min)(|-)h-[^`\'"\\s]+',
    color: 'rgba(230, 177, 161, 1)',
  },
  flex: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|inline-)flex(|-)[^`\'"\\s]*',
    color: 'rgba(192, 175, 224, 1)',
  },
  grid: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?grid(|-)[^`\'"\\s]*',
    color: 'rgba(192, 175, 224, 1)',
  },
  order: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)order-[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  gridColumn: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?col(|-)[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  gridRow: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?row(|-)[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  gridAutoColumns: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?auto-cols-[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  gridAutoRows: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?auto-rows-[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  gap: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?gap-[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  justifyContent: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?justify-(start|end|center|between|around|evenly)',
    color: 'rgba(192, 175, 224, 1)',
  },
  justifyItems: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?justify-items-(start|end|center|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  justifySelf: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?justify-self-(auto|start|end|center|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  alignContent: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?content-(start|end|center|between|around|evenly)',
    color: 'rgba(192, 175, 224, 1)',
  },
  alignItems: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?items-(start|end|center|baseline|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  alignSelf: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?self-(auto|start|end|center|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  placeContent: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?place-content-(center|start|end|between|around|evenly|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  placeItems: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?place-items-(start|end|center|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  placeSelf: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?place-self-(auto|start|end|center|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  table: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(table-fixed|table-auto|table)',
    color: 'rgba(255, 210, 105, 1)',
  },
  borderCollapse: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?border-(collapse|separate)',
    color: 'rgba(255, 210, 105, 1)',
  },
  transition: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?transition(|-)[^`\'"\\s]*',
    color: 'rgba(141, 179, 184, 1)',
  },
  transitionDuration: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?duration-[^`\'"\\s]*',
    color: 'rgba(141, 179, 184, 1)',
  },
  transitionTimingFunction: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?ease(|-)[^`\'"\\s]*',
    color: 'rgba(141, 179, 184, 1)',
  },
  transitionDelay: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?delay-[^`\'"\\s]*',
    color: 'rgba(141, 179, 184, 1)',
  },
  animation: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?animate-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  transform: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?transform(|-)[^`\'"\\s]*',
    color: 'rgba(255, 176, 202, 1)',
  },
  transformOrigin: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?origin-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  scale: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?scale-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  rotate: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)rotate-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  translate: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)translate-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  skew: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)skew-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  text: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?text-[^`\'"\\s]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  textDecoration: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(underline|line-through|no-underline)',
    color: 'rgba(171, 169, 169, 1)',
  },
  textTransform: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(uppercase|lowercase|capitalize|normal-case)',
    color: 'rgba(171, 169, 169, 1)',
  },
  textOverflow: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(truncate|overflow-ellipsis|overflow-clip)',
    color: 'rgba(171, 169, 169, 1)',
  },
  verticalAlign: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?align-[^`\'"\\s]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  whitespace: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?whitespace-(normal|nowrap|pre(-line|-wrap|))',
    color: 'rgba(171, 169, 169, 1)',
  },
  wordBreak: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?break-(normal|words|all)',
    color: 'rgba(171, 169, 169, 1)',
  },
  font: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?font-[^`\'"\\s]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  fontStyle: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(italic|not-italic)',
    color: 'rgba(171, 169, 169, 1)',
  },
  leading: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?leading-[^`\'"\\s]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  tracking: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?tracking-[^`\'"\\s]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  background: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?bg-[^`\'"\\s]+',
    color: 'rgba(117, 224, 165, 1)',
  },
  gradientColorStops: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(from|via|to)-[^`\'"\\s]+',
    color: 'rgba(117, 224, 165, 1)',
  },
  position: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(static|fixed|absolute|relative|sticky)',
    color: 'rgba(242, 142, 111, 1)',
  },
  inset: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)(inset|top|bottom|left|right)-[^`\'"\\s]+',
    color: 'rgba(242, 142, 111, 1)',
  },
  zIndex: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?(|-)z-[^`\'"\\s]+',
    color: 'rgba(249, 225, 159, 1)',
  },
  box: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?box-(border|content)',
    color: 'rgba(249, 225, 159, 1)',
  },
  shadow: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?shadow-[^`\'"\\s]+',
    color: 'rgba(249, 225, 159, 1)',
  },
  cursor: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?cursor-(auto|default|pointer|wait|text|move|help|not-allowed|none|context-menu|progress|cell|crosshair|vertical-text|alias|copy|no-drop|grab|grabbing|all-scroll|zoom-in|zoom-out)',
    color: 'rgba(249, 225, 15, 1)',
  },
  overflow: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?overflow-?(|x|y)-(hidden|scroll|auto|clip|visible)',
    color: 'rgba(49, 225, 159, 1)',
  },
  shrink: {
    regex: '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?shrink(|-0)',
    color: 'rgba(149, 25, 59, 1)',
  },
  pointer: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?pointer-events-(none|auto)',
    color: 'rgba(171, 169, 169, 1)',
  },
  blur: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?blur(-(none|sm|md|lg|xl|2xl|3xl))?',
    color: 'rgba(171, 169, 169, 1)',
  },
  brightness: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?brightness-[0-9]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  contrast: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?contrast-[0-9]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  grayscale: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?grayscale(-0)?',
    color: 'rgba(171, 169, 169, 1)',
  },
  invert: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?invert(-0)?',
    color: 'rgba(171, 169, 169, 1)',
  },
  hueRotate: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?hue-rotate-[0-9]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  sepia: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?sepia-[0-9]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  saturate: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?saturate-[0-9]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  opacity: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?opacity(-[0-9]+)?',
    color: 'rgba(171, 16, 1, 1)',
  },
  select: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?select-(none|text|all|auto)',
    color: 'rgba(171, 16, 100, 1)',
  },
  willChange: {
    regex:
      '(?<=[:`\'"\\s])(sm:|md:|lg:|xl:|2xl:|3xl:)?!?will-change-(scroll|contents|auto|transform)',
    color: 'rgba(17, 16, 100, 1)',
  },
}
