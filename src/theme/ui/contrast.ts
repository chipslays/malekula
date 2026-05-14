import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const contrast = (theme: Theme) => ({

  /**
   * An extra border around active elements to separate them from others for greater contrast.
   */
  'contrastActiveBorder': theme.ui['contrastActiveBorder'] ?? theme.colors.transparent,

  /**
   * An extra border around elements to separate them from others for greater contrast.
   */
  'contrastBorder': theme.ui['contrastBorder'] ?? theme.colors.transparent,

});

export type ContrastKey = keyof ReturnType<typeof contrast>;
