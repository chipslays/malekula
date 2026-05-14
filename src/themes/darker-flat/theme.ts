import { palette } from '@/themes/darker-flat/palette';
import { colors } from '@/themes/darker/colors';
import type { Theme } from '@/types';

const theme: Theme = {
    name: 'Malekula Darker Flat',
    file: 'malekula-darker-flat.json',
    type: 'dark',

    colors,
    palette,

    ui: {
        //
    },
} as const;

export default theme;
