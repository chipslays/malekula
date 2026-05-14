import type { Colors } from "@/types";

export const colors: Colors = {
    get accent() {
        return this.blue;
    },

    background: {
        50: '#C8CDD8',
        100: '#D4D9E2',
        200: '#FAFAFA',
        300: '#F2F2F2',
        350: '#E8EAED',
        400: '#DFE1E5',
    },

    foreground: {
        50: '#383A42',
        100: '#696C77',
        150: '#92959c',
        200: '#95969c',
        300: '#97989e',
    },

    red: '#E45649',
    orange: '#986801',
    yellow: '#C18401',
    green: '#50A14F',

    cyan: '#0184BB',
    blue: '#4078F2',
    purple: '#A626A4',

    pink: '#C05B56',

    white: '#FFFFFF',
    black: '#383A42',

    transparent: '#00000000',
} as const;
