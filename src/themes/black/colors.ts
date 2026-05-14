import type { Colors } from "@/types";

export const colors: Colors = {
    get accent() {
        return this.orange;
    },

    background: {
        50: '#323235',
        100: '#27272A',
        200: '#161618',
        300: '#161618',
        350: '#111112',
        400: '#0C0C0D',
    },

    foreground: {
        50: '#cecece',
        100: '#B8B8BC',
        150: '#86868B',
        200: '#646469',
        300: '#49494D',
    },

    red: '#E06C75',
    orange: '#D19A66',
    yellow: '#E5C07B',
    green: '#98C379',

    cyan: '#61C6D4',
    blue: '#6CB6FF',
    purple: '#D08DFF',

    pink: '#C05B56',

    white: '#E0E5F0',
    black: '#10131D',

    transparent: '#00000000',
} as const;
