# Malekula

A carefully crafted collection of dark, light and warm color themes for Visual Studio Code inspired by the Atom One Dark theme.

## Screenshots

[![Malekula Dark](/screenshots/dark.png)](/screenshots/dark.png)

<details>
  <summary>👉 Other theme variants</summary>
  
  [![Malekula Dark Flat](/screenshots/dark-flat.png)](/screenshots/dark-flat.png)

  ---
  
  [![Malekula Darker](/screenshots/darker.png)](/screenshots/darker.png)

  ---
  
  [![Malekula Darker Flat](/screenshots/darker-flat.png)](/screenshots/darker-flat.png)

  ---
  
  [![Malekula Black](/screenshots/black.png)](/screenshots/black.png)

  ---
  
  [![Malekula Black Flat](/screenshots/black-flat.png)](/screenshots/black-flat.png)

  ---
  
  [![Malekula Light](/screenshots/light.png)](/screenshots/light.png)

  ---
  
  [![Malekula Light Flat](/screenshots/light-flat.png)](/screenshots/light-flat.png)

  ---
  
  [![Malekula Warm](/screenshots/warm.png)](/screenshots/warm.png)

  ---
  
  [![Malekula Warm Flat](/screenshots/warm-flat.png)](/screenshots/warm-flat.png)
  
</details>

## Variants

| Name | Style | Base |
|------|-------|------|
| **Malekula Dark** | Regular | Dark |
| **Malekula Dark Flat** | Flat UI | Dark |
| **Malekula Darker** | Regular | Darker |
| **Malekula Darker Flat** | Flat UI | Darker |
| **Malekula Black** | Regular | Black |
| **Malekula Black Flat** | Flat UI | Black |
| **Malekula Light** | Regular | Light |
| **Malekula Light Flat** | Flat UI | Light |
| **Malekula Warm** | Regular | Warm |
| **Malekula Warm Flat** | Flat UI | Warm |

> **Regular** variants use a multi-level background scale — different surfaces (editor, sidebar, title bar) have distinct background shades.
> **Flat** variants collapse most surfaces to a single background color for a minimal, distraction-free look.

## Installation

1. Open **Extensions** in VS Code (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for `Malekula`
3. Click **Install**
4. Open the Command Palette (`Ctrl+Shift+P`) → **Preferences: Color Theme** → choose any `Malekula` variant

## Development

This theme is built with TypeScript and [Bun](https://bun.sh). The source lives in `src/` and generates the final JSON theme files in `themes/`.

### Prerequisites

```bash
# Install dependencies
bun install
```

### Project structure

```
src/
  types.ts                      — shared TypeScript types
  theme/
    builder.ts                  — assembles a Theme object into a VS Code JSON schema
    syntax/
      textmate-token-colors.ts  — TextMate grammar token rules (all themes share these)
      semantic-token-colors.ts  — semantic token rules
    ui/                         — individual UI area color mappings (editor, sidebar, …)
  themes/
    dark/                       — "Dark" variant
      colors.ts                 — raw color palette (hex values)
      palette.ts                — semantic color roles (bg.base, fg.default, …)
      theme.ts                  — theme entry-point (name, file, type, colors, palette)
    dark-flat/
      palette.ts                — overrides palette for flat style (reuses dark/colors.ts)
      theme.ts
    … (darker, black, light, warm — same pattern)
scripts/
  generator.ts                  — entry point: imports all themes and writes JSON files
themes/                         — generated JSON theme files (committed, do not edit manually)
```

### Build themes

```bash
# One-off build
bun run build

# Watch mode — rebuilds on every source change
bun run dev
```

Generated files are written to `themes/*.json`.

### Create a new theme variant

1. **Create a folder** under `src/themes/my-theme/`.

2. **`colors.ts`** — define all raw hex colors (required if your palette uses new hues):

```ts
import type { Colors } from "@/types";

export const colors: Colors = {
  get accent() { return this.blue; },

  background: {
    50:  '#3A3F4B',
    100: '#32363F',
    200: '#2C3038',
    300: '#272B33',
    350: '#22262D',
    400: '#1E2128',
  },

  foreground: {
    50:  '#D0D4DA',
    100: '#B8BEC8',
    150: '#8C95A4',
    200: '#6A7280',
    300: '#535D6B',
  },

  red:    '#E06C75',
  orange: '#D19A66',
  yellow: '#E5C07B',
  green:  '#98C379',
  cyan:   '#61C6D4',
  blue:   '#6CB6FF',
  purple: '#D08DFF',
  pink:   '#C05B56',
  white:  '#E6EAF2',
  black:  '#282C34',
  transparent: '#00000000',
} as const;
```

3. **`palette.ts`** — map colors to semantic roles:

```ts
import { colors } from "@/themes/my-theme/colors";
import type { Palette } from "@/types";
import color from "@/utils/color";

export const palette: Palette = {
  bg: {
    base:            colors.background[400],
    chrome:          colors.background[350],
    workbench:       colors.background[300],
    workbenchSticky: colors.background[350],
    editor:          colors.background[300],
    editorSticky:    colors.background[300],
    raised:          colors.background[200],
    overlay:         colors.background[350],
    hover:           color.alpha(colors.foreground[50], 0.06),
    active:          colors.background[50],
    hoverAccent:     color.alpha(colors.white, 0.05),
    selectedAccent:  color.alpha(colors.white, 0.1),
  },
  fg: {
    default:  colors.foreground[50],
    subtle:   colors.foreground[100],
    dim:      colors.foreground[150],
    muted:    colors.foreground[200],
    disabled: colors.foreground[300],
  },
  // … (see src/types.ts for the full Palette type)
};
```

4. **`theme.ts`** — wire everything together:

```ts
import { colors } from "@/themes/my-theme/colors";
import { palette } from "@/themes/my-theme/palette";
import type { Theme } from "@/types";

const theme: Theme = {
  name: "Malekula My Theme",   // displayed in VS Code
  file: "malekula-my-theme.json",  // output filename in themes/
  type: "dark",                // "dark" | "light"
  colors,
  palette,
  ui: {},
};

export default theme;
```

5. **Register the theme in `scripts/generator.ts`**:

```ts
import MyTheme from "@/themes/my-theme/theme";

const themes = [
  // … existing themes …
  MyTheme,
];
```

6. **Register it in `package.json`** under `contributes.themes`:

```json
{
  "label": "Malekula My Theme",
  "uiTheme": "vs-dark",
  "path": "./themes/malekula-my-theme.json"
}
```

7. **Run the build**:

```bash
bun run build
```

### Override individual UI colors

Each `theme.ts` accepts a `ui` object that lets you override any specific VS Code color token for that variant without touching shared files:

```ts
const theme: Theme = {
  // …
  ui: {
    "editor.background": "#1a1d23",
    "sideBar.border": "#00000000",
  },
};
```

See the [VS Code color reference](https://code.visualstudio.com/api/references/theme-color) for all available token names.

### Palette vs colors

| File | Purpose |
|------|---------|
| `colors.ts` | Raw brand palette — hex values, no semantics |
| `palette.ts` | Semantic roles — maps `bg.editor`, `fg.subtle`, `syntax.comment`, etc. to colors |

The UI components in `src/theme/ui/` read only from `palette`, never directly from `colors`. This means swapping a palette automatically updates every UI element that uses that semantic role.

### Flat variants

Flat variants reuse a base theme's `colors.ts` and only override the `bg.*` group in their `palette.ts` to collapse all background shades into one value:

```ts
// src/themes/dark-flat/palette.ts
import { colors } from "@/themes/dark/colors";
import { palette as dark } from "@/themes/dark/palette";

const flat = colors.background[300];

export const palette: Palette = {
  ...dark,
  bg: { ...dark.bg, chrome: flat, workbench: flat, editor: flat, … },
};
```

## Contributing

Bug reports and pull requests are welcome on the [GitHub repository](https://github.com/chipslays/malekula).

## License

[MIT](LICENSE)
