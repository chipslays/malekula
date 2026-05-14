import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const menuBar = (theme: Theme) => ({

  /**
   * Foreground color of the selected menu item in the menubar.
   */
  'menubar.selectionForeground': theme.ui['menubar.selectionForeground'] ?? theme.palette.fg.default,

  /**
   * Background color of the selected menu item in the menubar.
   */
  'menubar.selectionBackground': theme.ui['menubar.selectionBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Border color of the selected menu item in the menubar.
   */
  'menubar.selectionBorder': theme.ui['menubar.selectionBorder'],

  /**
   * Foreground color of menu items.
   */
  'menu.foreground': theme.ui['menu.foreground'] ?? theme.palette.fg.default,

  /**
   * Background color of menu items.
   */
  'menu.background': theme.ui['menu.background'] ?? theme.palette.bg.overlay,

  /**
   * Foreground color of the selected menu item in menus.
   */
  'menu.selectionForeground': theme.ui['menu.selectionForeground'] ?? theme.palette.fg.default,

  /**
   * Background color of the selected menu item in menus.
   */
  'menu.selectionBackground': theme.ui['menu.selectionBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Border color of the selected menu item in menus.
   */
  'menu.selectionBorder': theme.ui['menu.selectionBorder'],

  /**
   * Color of a separator menu item in menus.
   */
  'menu.separatorBackground': theme.ui['menu.separatorBackground'] ?? theme.palette.border.faint,

  /**
   * Border color of menus.
   */
  'menu.border': theme.ui['menu.border'] ?? theme.palette.border.default,

});

export type MenuBarKey = keyof ReturnType<typeof menuBar>;
