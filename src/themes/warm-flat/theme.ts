import { palette } from '@/themes/warm-flat/palette';
import { colors } from '@/themes/warm/colors';
import type { Theme } from '@/types';

const theme: Theme = {
    name: 'Malekula Warm Flat',
    file: 'malekula-warm-flat.json',
    type: 'light',

    colors,
    palette,

    ui: {
        //
    },
} as const;

export default theme;
