export const defaultEnabledUtilities = [
  'width',
  'height',
  'flex',
  'grid',
  'position',
]

export const defaultUtilitiesConfig = {
  padding: {
    regex: '(?<=[:`\'"\\s])!?(|-)p(|t|b|r|l|x|y)-[^`\'"\\s]+',
    color: 'rgba(187, 196, 136, 1)',
  },
  margin: {
    regex: '(?<=[:`\'"\\s])!?(|-)m(|t|b|r|l|x|y)-[^`\'"\\s]+',
    color: 'rgba(173, 134, 91, 1)',
  },
  space: {
    regex: '(?<=[:`\'"\\s])!?(|-)space-(x|y)-[^`\'"\\s]+',
    color: 'rgba(173, 134, 91, 1)',
  },
  border: {
    regex: '(?<=[:`\'"\\s])!?border(?!-collapse|-separate)(|-)[^`\'"\\s]*',
    color: 'rgba(222, 195, 138, 1)',
  },
  rounded: {
    regex: '(?<=[:`\'"\\s])!?rounded(|-)[^`\'"\\s]*',
    color: 'rgba(222, 195, 138, 1)',
  },
  divide: {
    regex: '(?<=[:`\'"\\s])!?divide(|-)[^`\'"\\s]*',
    color: 'rgba(222, 195, 138, 1)',
  },
  ring: {
    regex: '(?<=[:`\'"\\s])!?ring(|-)[^`\'"\\s]*',
    color: 'rgba(222, 195, 138, 1)',
  },
  width: {
    regex: '(?<=[:`\'"\\s])!?(|-)(|max|min)(|-)w-[^`\'"\\s]+',
    color: 'rgba(160, 202, 222, 1)',
  },
  height: {
    regex: '(?<=[:`\'"\\s])!?(|-)(|max|min)(|-)h-[^`\'"\\s]+',
    color: 'rgba(230, 177, 161, 1)',
  },
  flex: {
    regex: '(?<=[:`\'"\\s])!?(|inline-)flex(|-)[^`\'"\\s]*',
    color: 'rgba(192, 175, 224, 1)',
  },
  grid: {
    regex: '(?<=[:`\'"\\s])!?grid(|-)[^`\'"\\s]*',
    color: 'rgba(192, 175, 224, 1)',
  },
  order: {
    regex: '(?<=[:`\'"\\s])!?(|-)order-[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  gridColumn: {
    regex: '(?<=[:`\'"\\s])!?col(|-)[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  gridRow: {
    regex: '(?<=[:`\'"\\s])!?row(|-)[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  gridAutoColumns: {
    regex: '(?<=[:`\'"\\s])!?auto-cols-[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  gridAutoRows: {
    regex: '(?<=[:`\'"\\s])!?auto-rows-[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  gap: {
    regex: '(?<=[:`\'"\\s])!?gap-[^`\'"\\s]+',
    color: 'rgba(192, 175, 224, 1)',
  },
  justifyContent: {
    regex: '(?<=[:`\'"\\s])!?justify-(start|end|center|between|around|evenly)',
    color: 'rgba(192, 175, 224, 1)',
  },
  justifyItems: {
    regex: '(?<=[:`\'"\\s])!?justify-items-(start|end|center|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  justifySelf: {
    regex: '(?<=[:`\'"\\s])!?justify-self-(auto|start|end|center|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  alignContent: {
    regex: '(?<=[:`\'"\\s])!?content-(start|end|center|between|around|evenly)',
    color: 'rgba(192, 175, 224, 1)',
  },
  alignItems: {
    regex: '(?<=[:`\'"\\s])!?items-(start|end|center|baseline|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  alignSelf: {
    regex: '(?<=[:`\'"\\s])!?self-(auto|start|end|center|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  placeContent: {
    regex:
      '(?<=[:`\'"\\s])!?place-content-(center|start|end|between|around|evenly|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  placeItems: {
    regex: '(?<=[:`\'"\\s])!?place-items-(start|end|center|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  placeSelf: {
    regex: '(?<=[:`\'"\\s])!?place-self-(auto|start|end|center|stretch)',
    color: 'rgba(192, 175, 224, 1)',
  },
  table: {
    regex: '(?<=[:`\'"\\s])!?(table-fixed|table-auto|table)',
    color: 'rgba(255, 210, 105, 1)',
  },
  borderCollapse: {
    regex: '(?<=[:`\'"\\s])!?border-(collapse|separate)',
    color: 'rgba(255, 210, 105, 1)',
  },
  transition: {
    regex: '(?<=[:`\'"\\s])!?transition(|-)[^`\'"\\s]*',
    color: 'rgba(141, 179, 184, 1)',
  },
  transitionDuration: {
    regex: '(?<=[:`\'"\\s])!?duration-[^`\'"\\s]*',
    color: 'rgba(141, 179, 184, 1)',
  },
  transitionTimingFunction: {
    regex: '(?<=[:`\'"\\s])!?ease(|-)[^`\'"\\s]*',
    color: 'rgba(141, 179, 184, 1)',
  },
  transitionDelay: {
    regex: '(?<=[:`\'"\\s])!?delay-[^`\'"\\s]*',
    color: 'rgba(141, 179, 184, 1)',
  },
  animation: {
    regex: '(?<=[:`\'"\\s])!?animate-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  transform: {
    regex: '(?<=[:`\'"\\s])!?transform(|-)[^`\'"\\s]*',
    color: 'rgba(255, 176, 202, 1)',
  },
  transformOrigin: {
    regex: '(?<=[:`\'"\\s])!?origin-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  scale: {
    regex: '(?<=[:`\'"\\s])!?scale-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  rotate: {
    regex: '(?<=[:`\'"\\s])!?(|-)rotate-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  translate: {
    regex: '(?<=[:`\'"\\s])!?(|-)translate-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  skew: {
    regex: '(?<=[:`\'"\\s])!?(|-)skew-[^`\'"\\s]+',
    color: 'rgba(255, 176, 202, 1)',
  },
  text: {
    regex: '(?<=[:`\'"\\s])!?text-[^`\'"\\s]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  textDecoration: {
    regex: '(?<=[:`\'"\\s])!?(underline|line-through|no-underline)',
    color: 'rgba(171, 169, 169, 1)',
  },
  textTransform: {
    regex: '(?<=[:`\'"\\s])!?(uppercase|lowercase|capitalize|normal-case)',
    color: 'rgba(171, 169, 169, 1)',
  },
  textOverflow: {
    regex: '(?<=[:`\'"\\s])!?(truncate|overflow-ellipsis|overflow-clip)',
    color: 'rgba(171, 169, 169, 1)',
  },
  verticalAlign: {
    regex: '(?<=[:`\'"\\s])!?align-[^`\'"\\s]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  whitespace: {
    regex: '(?<=[:`\'"\\s])!?whitespace-(normal|nowrap|pre(-line|-wrap|))',
    color: 'rgba(171, 169, 169, 1)',
  },
  wordBreak: {
    regex: '(?<=[:`\'"\\s])!?break-(normal|words|all)',
    color: 'rgba(171, 169, 169, 1)',
  },
  font: {
    regex: '(?<=[:`\'"\\s])!?font-[^`\'"\\s]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  fontStyle: {
    regex: '(?<=[:`\'"\\s])!?(italic|not-italic)',
    color: 'rgba(171, 169, 169, 1)',
  },
  leading: {
    regex: '(?<=[:`\'"\\s])!?leading-[^`\'"\\s]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  tracking: {
    regex: '(?<=[:`\'"\\s])!?tracking-[^`\'"\\s]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  background: {
    regex: '(?<=[:`\'"\\s])!?bg-[^`\'"\\s]+',
    color: 'rgba(117, 224, 165, 1)',
  },
  gradientColorStops: {
    regex: '(?<=[:`\'"\\s])!?(from|via|to)-[^`\'"\\s]+',
    color: 'rgba(117, 224, 165, 1)',
  },
  position: {
    regex: '(?<=[:`\'"\\s])!?(static|fixed|absolute|relative|sticky)',
    color: 'rgba(242, 142, 111, 1)',
  },
  inset: {
    regex: '(?<=[:`\'"\\s])!?(|-)(inset|top|bottom|left|right)-[^`\'"\\s]+',
    color: 'rgba(242, 142, 111, 1)',
  },
  zIndex: {
    regex: '(?<=[:`\'"\\s])!?(|-)z-[^`\'"\\s]+',
    color: 'rgba(249, 225, 159, 1)',
  },
  box: {
    regex: '(?<=[:`\'"\\s])!?box-(border|content)',
    color: 'rgba(249, 225, 159, 1)',
  },
  shadow: {
    regex: '(?<=[:`\'"\\s])!?shadow-[^`\'"\\s]+',
    color: 'rgba(249, 225, 159, 1)',
  },
  cursor: {
    regex:
      '(?<=[:`\'"\\s])!?cursor-(auto|default|pointer|wait|text|move|help|not-allowed|none|context-menu|progress|cell|crosshair|vertical-text|alias|copy|no-drop|grab|grabbing|all-scroll|zoom-in|zoom-out)',
    color: 'rgba(249, 225, 15, 1)',
  },
  overflow: {
    regex:
      '(?<=[:`\'"\\s])!?overflow-?(|x|y)-(hidden|scroll|auto|clip|visible)',
    color: 'rgba(49, 225, 159, 1)',
  },
  shrink: {
    regex: '(?<=[:`\'"\\s])!?shrink(|-0)',
    color: 'rgba(149, 25, 59, 1)',
  },
  pointer: {
    regex:
      '(?<=[:`\'"\\s])!?pointer-events-(none|auto)',
    color: 'rgba(171, 169, 169, 1)',
  },
  blur: {
    regex:
      '(?<=[:`\'"\\s])!?blur(-(none|sm|md|lg|xl|2xl|3xl))?',
    color: 'rgba(171, 169, 169, 1)',
  },
  brightness: {
    regex:
      '(?<=[:`\'"\\s])!?brightness-[0-9]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  contrast: {
    regex:
      '(?<=[:`\'"\\s])!?contrast-[0-9]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  grayscale: {
    regex:
      '(?<=[:`\'"\\s])!?grayscale(-0)?',
    color: 'rgba(171, 169, 169, 1)',
  },
  invert: {
    regex:
      '(?<=[:`\'"\\s])!?invert(-0)?',
    color: 'rgba(171, 169, 169, 1)',
  },
  hueRotate: {
    regex:
      '(?<=[:`\'"\\s])!?hue-rotate-[0-9]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  sepia: {
    regex:
      '(?<=[:`\'"\\s])!?sepia-[0-9]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  saturate: {
    regex:
      '(?<=[:`\'"\\s])!?saturate-[0-9]+',
    color: 'rgba(171, 169, 169, 1)',
  },
  opacity: {
    regex:
      '(?<=[:`\'"\\s])!?opacity(-[0-9]+)?',
    color: 'rgba(171, 16, 1, 1)',
  },
  select: {
    regex:
      '(?<=[:`\'"\\s])!?select-(none|text|all|auto)',
    color: 'rgba(171, 16, 100, 1)',
  },
  willChange: {
    regex:
      '(?<=[:`\'"\\s])!?will-change-(scroll|contents|auto|transform)',
    color: 'rgba(17, 16, 100, 1)',
  },
}
