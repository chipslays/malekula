import { colors } from '@/themes/light/colors';
import { palette } from '@/themes/light/palette';
import type { Theme } from '@/types';

const theme: Theme = {
    name: 'Malekula Light',
    file: 'malekula-light.json',
    type: 'light',

    colors,
    palette,

    ui: {
        //
    },
} as const;

export default theme;
