import { colors } from '@/themes/black/colors';
import { palette as black } from '@/themes/black/palette';
import type { Palette } from '@/types';

const flat = colors.background[300];

export const palette: Palette = {
    ...black,

    bg: {
        ...black.bg,
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

