import { palette } from '@/themes/dark-flat/palette';
import { colors } from '@/themes/dark/colors';
import type { Theme } from '@/types';

const theme: Theme = {
    name: 'Malekula Dark Flat',
    file: 'malekula-dark-flat.json',
    type: 'dark',

    colors,
    palette,

    ui: {
        //
    },
} as const;

export default theme;
