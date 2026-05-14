import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const action = (theme: Theme) => ({

  /**
   * Toolbar background when hovering over actions using the mouse
   */
  'toolbar.hoverBackground': theme.ui['toolbar.hoverBackground'] ?? theme.palette.bg.hover,

  /**
   * Toolbar outline when hovering over actions using the mouse
   */
  'toolbar.hoverOutline': theme.ui['toolbar.hoverOutline'] ?? theme.colors.transparent,

  /**
   * Toolbar background when holding the mouse over actions
   */
  'toolbar.activeBackground': theme.ui['toolbar.activeBackground'] ?? theme.palette.bg.active,

  /**
   * Action List background color.
   */
  'editorActionList.background': theme.ui['editorActionList.background'] ?? theme.palette.bg.overlay,

  /**
   * Action List foreground color.
   */
  'editorActionList.foreground': theme.ui['editorActionList.foreground'] ?? theme.palette.fg.default,

  /**
   * Action List foreground color for the focused item.
   */
  'editorActionList.focusForeground': theme.ui['editorActionList.focusForeground'] ?? theme.palette.fg.default,

  /**
   * Action List background color for the focused item.
   */
  'editorActionList.focusBackground': theme.ui['editorActionList.focusBackground'] ?? theme.palette.bg.selectedAccent,

});

export type ActionKey = keyof ReturnType<typeof action>;
