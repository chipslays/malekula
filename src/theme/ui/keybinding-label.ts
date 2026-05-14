import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const keybindingLabel = (theme: Theme) => ({

  /**
   * Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.background': theme.ui['keybindingLabel.background'] ?? theme.palette.bg.workbench,

  /**
   * Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.foreground': theme.ui['keybindingLabel.foreground'] ?? theme.palette.fg.default,

  /**
   * Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.border': theme.ui['keybindingLabel.border'] ?? theme.palette.border.default,

  /**
   * Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.bottomBorder': theme.ui['keybindingLabel.bottomBorder'] ?? theme.palette.border.strong,

});

export type KeybindingLabelKey = keyof ReturnType<typeof keybindingLabel>;
