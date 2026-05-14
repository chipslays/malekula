import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const actionBar = (theme: Theme) => ({

  /**
   * Background color for toggled action items in action bar.
   */
  'actionBar.toggledBackground': theme.ui['actionBar.toggledBackground'] ?? theme.palette.bg.selectedAccent,

});

export type ActionBarKey = keyof ReturnType<typeof actionBar>;
