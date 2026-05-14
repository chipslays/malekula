import type { Colors } from "@/types";

export const colors: Colors = {
    get accent() {
        return this.orange;
    },

    background: {
        50: '#CCC4B4',
        100: '#D8D0C0',
        200: '#FAF7F0',
        300: '#F2EDE3',
        350: '#EAE4D8',
        400: '#E2DBD0',
    },

    foreground: {
        50: '#3B3528',
        100: '#7A7266',
        150: '#9E9688',
        200: '#B0A898',
        300: '#C9C1B5',
    },

    red: '#D7503A',
    orange: '#A0620A',
    yellow: '#B88C00',
    green: '#4F9E3C',

    cyan: '#1E8FA0',
    blue: '#3D72D4',
    purple: '#9227A0',

    pink: '#C05055',

    white: '#FAF7F0',
    black: '#3B3528',

    transparent: '#00000000',
} as const;
