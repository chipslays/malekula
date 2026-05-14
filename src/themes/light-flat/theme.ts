import { palette } from '@/themes/light-flat/palette';
import { colors } from '@/themes/light/colors';
import type { Theme } from '@/types';

const theme: Theme = {
    name: 'Malekula Light Flat',
    file: 'malekula-light-flat.json',
    type: 'light',

    colors,
    palette,

    ui: {
        //
    },
} as const;

export default theme;
