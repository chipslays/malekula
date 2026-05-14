import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const dropdownControl = (theme: Theme) => ({

  /**
   * Dropdown background.
   */
  'dropdown.background': theme.ui['dropdown.background'] ?? theme.palette.bg.overlay,

  /**
   * Dropdown list background.
   */
  'dropdown.listBackground': theme.ui['dropdown.listBackground'] ?? theme.palette.bg.overlay,

  /**
   * Dropdown border.
   */
  'dropdown.border': theme.ui['dropdown.border'] ?? theme.palette.border.default,

  /**
   * Dropdown foreground.
   */
  'dropdown.foreground': theme.ui['dropdown.foreground'] ?? theme.palette.fg.default,

});

export type DropdownControlKey = keyof ReturnType<typeof dropdownControl>;
