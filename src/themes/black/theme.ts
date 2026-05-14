import { colors } from '@/themes/black/colors';
import { palette } from '@/themes/black/palette';
import type { Theme } from '@/types';

const theme: Theme = {
    name: 'Malekula Black',
    file: 'malekula-black.json',
    type: 'dark',

    colors,
    palette,

    ui: {
        //
    },
} as const;

export default theme;
