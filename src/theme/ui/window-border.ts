import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const windowBorder = (theme: Theme) => ({

  /**
   * Border color for the active (focused) window.
   */
  'window.activeBorder': theme.ui['window.activeBorder'] ?? theme.palette.border.window,

  /**
   * Border color for the inactive (unfocused) windows.
   */
  'window.inactiveBorder': theme.ui['window.inactiveBorder'] ?? theme.palette.border.window,

});

export type WindowBorderKey = keyof ReturnType<typeof windowBorder>;
