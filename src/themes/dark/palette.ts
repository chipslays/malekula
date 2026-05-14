import { colors } from "@/themes/dark/colors";
import type { Palette } from "@/types";
import color from "@/utils/color";

export const palette: Palette = {

    bg: {
        base: colors.background[400],
        chrome: colors.background[350],
        workbench: colors.background[300],
        workbenchSticky: colors.background[350],
        editor: colors.background[300],
        editorSticky: colors.background[300],
        raised: colors.background[200],
        overlay: colors.background[350],

        hover: color.alpha(colors.foreground[50], 0.06),
        active: colors.background[50],

        hoverAccent: color.alpha(colors.white, 0.05),
        selectedAccent: color.alpha(colors.white, 0.1),
    },

    fg: {
        default: colors.foreground[50],
        subtle: colors.foreground[100],
        dim: colors.foreground[150],
        muted: colors.foreground[200],
        disabled: colors.foreground[300],

        onAccent: color.contrast(colors.accent),

        link: colors.accent,
        linkHover: color.hover(colors.accent, 15),
    },

    border: {
        faint: color.alpha(colors.foreground[50], 0.1),
        default: color.alpha(colors.foreground[50], 0.2),
        strong: color.alpha(colors.foreground[50], 0.25),
        window: colors.background[200],
        input: color.alpha(colors.foreground[50], 0.1),
        focus: colors.accent,
    },

    state: {
        error: {
            fg: colors.red,
            bg: color.alpha(colors.red, 0.12),
            border: colors.red,
        },
        warning: {
            fg: colors.orange,
            bg: color.alpha(colors.orange, 0.12),
            border: colors.orange,
        },
        success: {
            fg: colors.green,
            bg: color.alpha(colors.green, 0.12),
            border: colors.green,
        },
        info: {
            fg: colors.blue,
            bg: color.alpha(colors.blue, 0.12),
            border: colors.blue,
        },
    },

    ctrl: {
        primary: {
            bg: colors.accent,
            bgHover: color.hover(colors.accent, 12),
            bgActive: color.shift(colors.accent, -10),
            fg: color.contrast(colors.accent),
            border: color.transparent,
        },
        secondary: {
            bg: color.transparent,
            bgHover: color.alpha(colors.accent, 0.08),
            bgActive: color.alpha(colors.accent, 0.16),
            fg: colors.accent,
            border: color.alpha(colors.accent, 0.24),
        },
    },

    input: {
        bg: colors.background[350],
        bgDisabled: colors.background[300],
        fg: colors.foreground[50],
        placeholder: colors.foreground[200],
    },

    scrollbar: {
        track: color.alpha(colors.foreground[100], 0.1),
        thumb: color.alpha(colors.foreground[100], 0.1),
        thumbHover: color.alpha(colors.foreground[100], 0.1),
    },

    shadow: {
        sm: color.alpha('#000000', 0.10),
        md: color.alpha('#000000', 0.25),
        lg: color.alpha('#000000', 0.38),
    },

    diff: {
        added: color.alpha(colors.green, 0.07),
        addedHeader: color.alpha(colors.green, 0.14),
        removed: color.alpha(colors.red, 0.07),
        removedHeader: color.alpha(colors.red, 0.14),
        modified: color.alpha(colors.accent, 0.07),
        modifiedHeader: color.alpha(colors.accent, 0.14),
        common: color.alpha(colors.foreground[50], 0.07),
        commonHeader: color.alpha(colors.foreground[50], 0.14),
    },

    syntax: {
        comment: colors.foreground[200],
        keyword: colors.purple,
        fn: colors.blue,
        string: colors.green,
        number: colors.orange,
        variable: colors.red,
        type: colors.yellow,
        tag: colors.red,
        attribute: colors.orange,
        constant: colors.cyan,
        operator: colors.purple,
    },

    terminal: {
        black: colors.black,
        red: colors.red,
        green: colors.green,
        yellow: colors.yellow,
        blue: colors.blue,
        magenta: colors.purple,
        cyan: colors.cyan,
        white: colors.white,
        brightBlack: '#636d83',
        brightRed: colors.red,
        brightGreen: colors.green,
        brightYellow: colors.yellow,
        brightBlue: colors.blue,
        brightMagenta: colors.purple,
        brightCyan: colors.cyan,
        brightWhite: colors.white,
    },

} as const;
