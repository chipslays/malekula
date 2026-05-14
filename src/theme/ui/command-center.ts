import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const commandCenter = (theme: Theme) => ({

  /**
   * Foreground color of the Command Center.
   */
  'commandCenter.foreground': theme.ui['commandCenter.foreground'] ?? theme.palette.fg.default,

  /**
   * Active foreground color of the Command Center.
   */
  'commandCenter.activeForeground': theme.ui['commandCenter.activeForeground'] ?? theme.palette.fg.default,

  /**
   * Background color of the Command Center.
   */
  'commandCenter.background': theme.ui['commandCenter.background'] ?? theme.palette.bg.workbench,

  /**
   * Active background color of the Command Center.
   */
  'commandCenter.activeBackground': theme.ui['commandCenter.activeBackground'] ?? theme.palette.bg.hover,

  /**
   * Border color of the Command Center.
   */
  'commandCenter.border': theme.ui['commandCenter.border'] ?? theme.palette.border.default,

  /**
   * Foreground color of the Command Center when the window is inactive.
   */
  'commandCenter.inactiveForeground': theme.ui['commandCenter.inactiveForeground'] ?? theme.palette.fg.subtle,

  /**
   * Border color of the Command Center when the window is inactive.
   */
  'commandCenter.inactiveBorder': theme.ui['commandCenter.inactiveBorder'] ?? theme.palette.border.faint,

  /**
   * Active border color of the Command Center.
   */
  'commandCenter.activeBorder': theme.ui['commandCenter.activeBorder'] ?? theme.palette.border.focus,

  /**
   * Command Center background color when a program is being debugged.
   */
  'commandCenter.debuggingBackground': theme.ui['commandCenter.debuggingBackground'] ?? theme.palette.state.warning.bg,

});

export type CommandCenterKey = keyof ReturnType<typeof commandCenter>;
