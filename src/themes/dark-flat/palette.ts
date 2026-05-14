import { colors } from '@/themes/dark/colors';
import { palette as dark } from '@/themes/dark/palette';
import type { Palette } from '@/types';

const flat = colors.background[300];

export const palette: Palette = {
    ...dark,

    bg: {
        ...dark.bg,
        base: colors.background[400],
        chrome: flat,
        workbench: flat,
        workbenchSticky: flat,
        editor: flat,
        editorSticky: flat,
        raised: colors.background[100],
        overlay: colors.background[350],
    },
} as const;
