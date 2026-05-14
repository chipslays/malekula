import { palette } from '@/themes/black-flat/palette';
import { colors } from '@/themes/black/colors';
import type { Theme } from '@/types';

const theme: Theme = {
    name: 'Malekula Black Flat',
    file: 'malekula-black-flat.json',
    type: 'dark',

    colors,
    palette,

    ui: {
        //
    },
} as const;

export default theme;
