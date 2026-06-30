import { colors } from '@/themes/warm/colors';
import type { Palette } from '@/types';
import color from '@/utils/color';

export const palette: Palette = {

    bg: {
        base: colors.background[400],
        chrome: colors.background[350],
        workbench: colors.background[300],
        workbenchSticky: colors.background[350],
        editor: colors.background[200],
        editorSticky: colors.background[200],
        raised: colors.background[200],
        overlay: colors.background[350],

        hover: color.alpha(colors.foreground[50], 0.05),
        active: colors.background[50],

        hoverAccent: color.alpha(colors.black, 0.05),
        selectedAccent: color.alpha(colors.black, 0.1),
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
        faint: color.alpha(colors.foreground[50], 0.08),
        default: color.alpha(colors.foreground[50], 0.15),
        strong: color.alpha(colors.foreground[50], 0.22),
        window: colors.background[100],
        input: color.alpha(colors.foreground[50], 0.15),
        focus: colors.accent,
    },

    state: {
        error: {
            fg: colors.red,
            bg: color.mix(colors.red, '#ffffff', 0.3),
            border: colors.red,
        },
        warning: {
            fg: colors.orange,
            bg: color.mix(colors.orange, '#ffffff', 0.3),
            border: colors.orange,
        },
        success: {
            fg: colors.green,
            bg: color.mix(colors.green, '#ffffff', 0.3),
            border: colors.green,
        },
        info: {
            fg: colors.blue,
            bg: color.mix(colors.blue, '#ffffff', 0.3),
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
            border: color.alpha(colors.accent, 0.30),
        },
    },

    input: {
        bg: colors.background[200],
        bgDisabled: colors.background[300],
        fg: colors.foreground[50],
        placeholder: colors.foreground[200],
    },

    scrollbar: {
        track: color.alpha(colors.foreground[50], 0.05),
        thumb: color.alpha(colors.foreground[50], 0.15),
        thumbHover: color.alpha(colors.foreground[50], 0.25),
    },

    shadow: {
        sm: color.alpha('#000000', 0.06),
        md: color.alpha('#000000', 0.12),
        lg: color.alpha('#000000', 0.18),
    },

    diff: {
        added: color.alpha(colors.green, 0.10),
        addedHeader: color.alpha(colors.green, 0.20),
        removed: color.alpha(colors.red, 0.10),
        removedHeader: color.alpha(colors.red, 0.20),
        modified: color.alpha(colors.accent, 0.10),
        modifiedHeader: color.alpha(colors.accent, 0.20),
        common: color.alpha(colors.foreground[50], 0.06),
        commonHeader: color.alpha(colors.foreground[50], 0.12),
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
        white: '#FAF7F0',
        brightBlack: '#9E9688',
        brightRed: colors.red,
        brightGreen: colors.green,
        brightYellow: colors.yellow,
        brightBlue: colors.blue,
        brightMagenta: colors.purple,
        brightCyan: colors.cyan,
        brightWhite: '#FAF7F0',
    },

} as const;
