# Unocss Highlight

![](https://github.com/Simon-He95/vscode-unocss-highlight/main/assets/visual-image.png)

This extension highlights the utilities of Unocss.

## Installation

<https://marketplace.visualstudio.com/items?itemName=simonhe.vscode-unocss-highlight>

## Development

1. `yarn install`
2. `yarn dev`
3. Run debug mode on the vscode.

## Configuration

### `unocss-highlight.languages`

List of languages to apply highlighting.

```json
"unocss-highlight.languages": [
  "html",
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact",
  "vue",
  "php",
  "svelte"
]
```

### `unocss-highlight.enabledUtilities`

List of utilities to highlight.

Utility name list: [src/defaultConfig.ts](https://github.com/Simon-He95/vscode-unocss-highlight/blob/main/src/defaultConfig.ts)

```json
"unocss-highlight.enabledUtilities": [
  "padding",
  "margin",
  "space",
  "width",
  "height",
  "flex",
  "grid",
  "position"
]
```

### `unocss-highlight.customUtilitiesConfig`

Configuration for highlighting utilities.
Override [default config](https://github.com/Simon-He95/vscode-unocss-highlight/blob/main/src/defaultConfig.ts).
Set only the properties you want to override.

| Name  | Description                                              | Type                                                                                                       |
| ----- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| regex | Regex to match the utility                               | `String`                                                                                                   |
| color | Color of the highlight. Style property takes precedence. | `String`                                                                                                   |
| style | Highlight styles                                         | [DecorationRenderOptions](https://code.visualstudio.com/api/references/vscode-api#DecorationRenderOptions) |

#### Example: Make it a underline instead of a highlight

```json
"unocss-highlight.customUtilitiesConfig": {
  "padding": {
    "style": {
      "backgroundColor": "",
      "borderWidth": "0 0 3px 0",
      "borderStyle": "solid",
      "borderColor": "rgba(187, 196, 136, 1)",
      "color": "currentColor"
    }
  },
}
```

![](https://github.com/Simon-He95/vscode-unocss-highlight/main/assets/example-configs.png)

### `unocss-highlight.defaultVariantsColor`

Default color of the variants.

```json
"unocss-highlight.defaultVariantsColor": "#1FAB89"
```

### `unocss-highlight.customVariantsConfig`

Configuration for highlighting variants.

| Name  | Description     | Type       |
| ----- | --------------- | ---------- |
| Key   | Color           | `String`   |
| Value | List of variant | `String[]` |

```json
"unocss-highlight.customVariantsConfig": {
  "#08D9D6": [
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
}
```

#### Example: Change the color of the focus variants

```json
"unocss-highlight.customVariantsConfig": {
  "#FFB6C1": [
    "focus",
    "focus-within",
    "focus-visible"
  ]
}
```
