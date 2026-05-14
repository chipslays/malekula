import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const progressBar = (theme: Theme) => ({

  /**
   * Background color of the progress bar shown for long running operations.
   */
  'progressBar.background': theme.ui['progressBar.background'] ?? theme.palette.ctrl.primary.bg,

});

export type ProgressBarKey = keyof ReturnType<typeof progressBar>;
