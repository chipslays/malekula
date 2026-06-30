import { colors } from '@/themes/black/colors';
import { createPalette } from '@/themes/dark/palette';
import type { Palette } from '@/types';
import color from '@/utils/color';

export const palette: Palette = {
    ...createPalette(colors),

    bg: {
        base: colors.background[400],
        chrome: colors.background[350],
        workbench: colors.background[300],
        workbenchSticky: colors.background[350],
        editor: colors.background[200],
        editorSticky: colors.background[200],
        raised: colors.background[100],
        overlay: colors.background[350],

        hover: color.alpha(colors.foreground[50], 0.06),
        active: colors.background[50],

        hoverAccent: color.alpha(colors.white, 0.05),
        selectedAccent: color.alpha(colors.white, 0.10),
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

    input: {
        bg: colors.background[350],
        bgDisabled: colors.background[300],
        fg: colors.foreground[50],
        placeholder: colors.foreground[200],
    },

    state: {
        error: {
            fg: colors.red,
            bg: color.mix(colors.red, '#000000', 0.3),
            border: colors.red,
        },
        warning: {
            fg: colors.orange,
            bg: color.mix(colors.orange, '#000000', 0.3),
            border: colors.orange,
        },
        success: {
            fg: colors.green,
            bg: color.mix(colors.green, '#000000', 0.3),
            border: colors.green,
        },
        info: {
            fg: colors.blue,
            bg: color.mix(colors.blue, '#000000', 0.3),
            border: colors.blue,
        },
    },

    border: {
        faint: color.alpha(colors.foreground[50], 0.10),
        default: color.alpha(colors.foreground[50], 0.20),
        strong: color.alpha(colors.foreground[50], 0.25),
        window: colors.background[100],
        input: color.alpha(colors.foreground[50], 0.10),
        focus: colors.accent,
    },

    shadow: {
        sm: color.alpha('#000000', 0.20),
        md: color.alpha('#000000', 0.40),
        lg: color.alpha('#000000', 0.60),
    },
} as const;
