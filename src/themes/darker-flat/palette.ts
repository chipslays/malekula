import { colors } from '@/themes/darker/colors';
import { palette as darker } from '@/themes/darker/palette';
import type { Palette } from '@/types';

const flat = colors.background[300];

export const palette: Palette = {
    ...darker,

    bg: {
        ...darker.bg,
        base: colors.background[400],
        chrome: flat,
        workbench: flat,
        workbenchSticky: flat,
        editor: flat,
        editorSticky: flat,
        raised: colors.background[350],
        overlay: colors.background[350],
    },

    input: {
        bg: colors.background[350],
        bgDisabled: colors.background[300],
        fg: colors.foreground[50],
        placeholder: colors.foreground[200],
    },
} as const;
