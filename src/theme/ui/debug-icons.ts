import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const debugIcons = (theme: Theme) => ({

  /**
   * Icon color for breakpoints.
   */
  'debugIcon.breakpointForeground': theme.ui['debugIcon.breakpointForeground'] ?? theme.colors.red,

  /**
   * Icon color for disabled breakpoints.
   */
  'debugIcon.breakpointDisabledForeground': theme.ui['debugIcon.breakpointDisabledForeground'] ?? theme.palette.fg.disabled,

  /**
   * Icon color for unverified breakpoints.
   */
  'debugIcon.breakpointUnverifiedForeground': theme.ui['debugIcon.breakpointUnverifiedForeground'] ?? theme.colors.orange,

  /**
   * Icon color for the current breakpoint stack frame.
   */
  'debugIcon.breakpointCurrentStackframeForeground': theme.ui['debugIcon.breakpointCurrentStackframeForeground'] ?? theme.colors.yellow,

  /**
   * Icon color for all breakpoint stack frames.
   */
  'debugIcon.breakpointStackframeForeground': theme.ui['debugIcon.breakpointStackframeForeground'] ?? theme.colors.blue,

  /**
   * Debug toolbar icon for start debugging.
   */
  'debugIcon.startForeground': theme.ui['debugIcon.startForeground'] ?? theme.colors.green,

  /**
   * Debug toolbar icon for pause.
   */
  'debugIcon.pauseForeground': theme.ui['debugIcon.pauseForeground'] ?? theme.colors.blue,

  /**
   * Debug toolbar icon for stop.
   */
  'debugIcon.stopForeground': theme.ui['debugIcon.stopForeground'] ?? theme.colors.red,

  /**
   * Debug toolbar icon for disconnect.
   */
  'debugIcon.disconnectForeground': theme.ui['debugIcon.disconnectForeground'] ?? theme.colors.red,

  /**
   * Debug toolbar icon for restart.
   */
  'debugIcon.restartForeground': theme.ui['debugIcon.restartForeground'] ?? theme.colors.green,

  /**
   * Debug toolbar icon for step over.
   */
  'debugIcon.stepOverForeground': theme.ui['debugIcon.stepOverForeground'] ?? theme.colors.blue,

  /**
   * Debug toolbar icon for step into.
   */
  'debugIcon.stepIntoForeground': theme.ui['debugIcon.stepIntoForeground'] ?? theme.colors.blue,

  /**
   * Debug toolbar icon for step over.
   */
  'debugIcon.stepOutForeground': theme.ui['debugIcon.stepOutForeground'] ?? theme.colors.blue,

  /**
   * Debug toolbar icon for continue.
   */
  'debugIcon.continueForeground': theme.ui['debugIcon.continueForeground'] ?? theme.colors.blue,

  /**
   * Debug toolbar icon for step back.
   */
  'debugIcon.stepBackForeground': theme.ui['debugIcon.stepBackForeground'] ?? theme.colors.blue,

  /**
   * Foreground color for info messages in debug REPL console.
   */
  'debugConsole.infoForeground': theme.ui['debugConsole.infoForeground'] ?? theme.palette.state.info.fg,

  /**
   * Foreground color for warning messages in debug REPL console.
   */
  'debugConsole.warningForeground': theme.ui['debugConsole.warningForeground'] ?? theme.palette.state.warning.fg,

  /**
   * Foreground color for error messages in debug REPL console.
   */
  'debugConsole.errorForeground': theme.ui['debugConsole.errorForeground'] ?? theme.palette.state.error.fg,

  /**
   * Foreground color for source filenames in debug REPL console.
   */
  'debugConsole.sourceForeground': theme.ui['debugConsole.sourceForeground'] ?? theme.palette.fg.subtle,

  /**
   * Foreground color for debug console input marker icon.
   */
  'debugConsoleInputIcon.foreground': theme.ui['debugConsoleInputIcon.foreground'] ?? theme.palette.fg.default,

});

export type DebugIconsKey = keyof ReturnType<typeof debugIcons>;
