import type { Colors } from "@/types";

export const colors: Colors = {
  get accent() {
    return this.blue;
  },

  background: {
    50: '#383E49',
    100: '#2F353F',
    200: '#282C34',
    300: '#23272F',
    350: '#1F232B',
    400: '#1B1F26',
  },

  foreground: {
    50: '#cfd2d8',
    100: '#B9C0CC',
    150: '#8B93A2',
    200: '#697180',
    300: '#525866',
  },

  red: '#E06C75',
  orange: '#D19A66',
  yellow: '#E5C07B',
  green: '#98C379',

  cyan: '#61C6D4',
  blue: '#6CB6FF',
  purple: '#D08DFF',

  pink: '#C05B56',

  white: '#E6EAF2',
  black: '#282C34',

  transparent: '#00000000',
} as const;
