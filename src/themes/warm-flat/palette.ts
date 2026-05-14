import { colors } from '@/themes/warm/colors';
import { palette as warm } from '@/themes/warm/palette';
import type { Palette } from '@/types';
import color from '@/utils/color';

const flat = colors.background[300];

export const palette: Palette = {
    ...warm,

    bg: {
        ...warm.bg,
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
