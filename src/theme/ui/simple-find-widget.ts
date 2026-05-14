import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const simpleFindWidget = (theme: Theme) => ({

  /**
   * Border color of the sash border.
   */
  'simpleFindWidget.sashBorder': theme.ui['simpleFindWidget.sashBorder'] ?? theme.palette.border.faint,

});

export type SimpleFindWidgetKey = keyof ReturnType<typeof simpleFindWidget>;
