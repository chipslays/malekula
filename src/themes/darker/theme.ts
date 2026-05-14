import { colors } from '@/themes/darker/colors';
import { palette } from '@/themes/darker/palette';
import type { Theme } from '@/types';

const theme: Theme = {
    name: 'Malekula Darker',
    file: 'malekula-darker.json',
    type: 'dark',

    colors,
    palette,

    ui: {
        //
    },
} as const;

export default theme;
