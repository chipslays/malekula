import type { Colors } from "@/types";

export const colors: Colors = {
    get accent() {
        return this.blue;
    },

    background: {
        50: '#363A41',
        100: '#2A2E35',
        200: '#1E2127',
        300: '#1E2127',
        350: '#191C21',
        400: '#14171B',
    },

    foreground: {
        50: '#c6cad3',
        100: '#A7ABB3',
        150: '#8A8E96',
        200: '#6D7178',
        300: '#54585F',
    },

    red: '#E06C75',
    orange: '#D19A66',
    yellow: '#E5C07B',
    green: '#98C379',

    cyan: '#61C6D4',
    blue: '#6CB6FF',
    purple: '#D08DFF',

    pink: '#C05B56',

    white: '#b0c6eb',
    black: '#1E2229',

    transparent: '#00000000',
} as const;
