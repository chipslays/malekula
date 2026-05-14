import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const keyboardShortcutTable = (theme: Theme) => ({

  /**
   * Background color for the keyboard shortcuts table header.
   */
  'keybindingTable.headerBackground': theme.ui['keybindingTable.headerBackground'] ?? theme.palette.bg.workbench,

  /**
   * Background color for the keyboard shortcuts table alternating rows.
   */
  'keybindingTable.rowsBackground': theme.ui['keybindingTable.rowsBackground'] ?? theme.palette.bg.editor,

});

export type KeyboardShortcutTableKey = keyof ReturnType<typeof keyboardShortcutTable>;
