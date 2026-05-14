import { colors } from '@/themes/light/colors';
import { palette as light } from '@/themes/light/palette';
import type { Palette } from '@/types';
import color from '@/utils/color';

const flat = colors.background[300];

export const palette: Palette = {
    ...light,

    bg: {
        ...light.bg,
        base: colors.background[400],
        chrome: flat,
        workbench: flat,
        workbenchSticky: flat,
        editor: flat,
        editorSticky: flat,
        raised: colors.background[200],
        overlay: colors.background[200],
    },
} as const;
