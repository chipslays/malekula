import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const scrollbarControl = (theme: Theme) => ({

  /**
   * Scrollbar track background color.
   */
  'scrollbar.background': theme.ui['scrollbar.background'],

  /**
   * Scrollbar slider shadow to indicate that the view is scrolled.
   */
  'scrollbar.shadow': theme.ui['scrollbar.shadow'] ?? theme.palette.shadow.md,

  /**
   * Scrollbar slider background color when clicked on.
   */
  'scrollbarSlider.activeBackground': theme.ui['scrollbarSlider.activeBackground'] ?? theme.palette.scrollbar.thumbHover,

  /**
   * Scrollbar slider background color.
   */
  'scrollbarSlider.background': theme.ui['scrollbarSlider.background'] ?? theme.palette.scrollbar.thumb,

  /**
   * Scrollbar slider background color when hovering.
   */
  'scrollbarSlider.hoverBackground': theme.ui['scrollbarSlider.hoverBackground'] ?? theme.palette.scrollbar.thumbHover,

});

export type ScrollbarControlKey = keyof ReturnType<typeof scrollbarControl>;
