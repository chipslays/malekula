import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const breadcrumbs = (theme: Theme) => ({

  /**
   * Color of breadcrumb items.
   */
  'breadcrumb.foreground': theme.ui['breadcrumb.foreground'] ?? theme.palette.fg.muted,

  /**
   * Background color of breadcrumb items.
   */
  'breadcrumb.background': theme.ui['breadcrumb.background'] ?? theme.palette.bg.editor,

  /**
   * Color of focused breadcrumb items.
   */
  'breadcrumb.focusForeground': theme.ui['breadcrumb.focusForeground'] ?? theme.palette.fg.dim,

  /**
   * Color of selected breadcrumb items.
   */
  'breadcrumb.activeSelectionForeground': theme.ui['breadcrumb.activeSelectionForeground'] ?? theme.palette.fg.default,

  /**
   * Background color of breadcrumb item picker.
   */
  'breadcrumbPicker.background': theme.ui['breadcrumbPicker.background'] ?? theme.palette.bg.overlay,

});

export type BreadcrumbsKey = keyof ReturnType<typeof breadcrumbs>;
