import { colors } from '@/themes/warm/colors';
import { palette } from '@/themes/warm/palette';
import type { Theme } from '@/types';

const theme: Theme = {
    name: 'Malekula Warm',
    file: 'malekula-warm.json',
    type: 'light',

    colors,
    palette,

    ui: {
        //
    },
} as const;

export default theme;
