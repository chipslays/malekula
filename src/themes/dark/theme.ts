import { colors } from '@/themes/dark/colors';
import { palette } from '@/themes/dark/palette';
import type { Theme } from '@/types';

const theme: Theme = {
    name: 'Malekula Dark',
    file: 'malekula-dark.json',
    type: 'dark',

    colors,
    palette,

    ui: {
        //
    },
} as const;

export default theme;
