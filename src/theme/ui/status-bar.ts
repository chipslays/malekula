import type { Theme } from '@/types';
import color from '@/utils/color';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const statusBar = (theme: Theme) => ({

  /**
   * Standard Status Bar background color.
   */
  'statusBar.background': theme.ui['statusBar.background'] ?? theme.palette.bg.chrome,

  /**
   * Status Bar foreground color.
   */
  'statusBar.foreground': theme.ui['statusBar.foreground'] ?? theme.palette.fg.subtle,

  /**
   * Status Bar border color separating the Status Bar and editor.
   */
  'statusBar.border': theme.ui['statusBar.border'] ?? theme.palette.border.faint,

  /**
   * Status Bar background color when a program is being debugged.
   */
  'statusBar.debuggingBackground': theme.ui['statusBar.debuggingBackground'] ?? theme.colors.orange,

  /**
   * Status Bar foreground color when a program is being debugged.
   */
  'statusBar.debuggingForeground': theme.ui['statusBar.debuggingForeground'] ?? color.contrast(theme.colors.orange),

  /**
   * Status Bar border color separating the Status Bar and editor when a program is being debugged.
   */
  'statusBar.debuggingBorder': theme.ui['statusBar.debuggingBorder'] ?? theme.colors.orange,

  /**
   * Status Bar foreground color when no folder is opened.
   */
  'statusBar.noFolderForeground': theme.ui['statusBar.noFolderForeground'] ?? theme.palette.fg.subtle,

  /**
   * Status Bar background color when no folder is opened.
   */
  'statusBar.noFolderBackground': theme.ui['statusBar.noFolderBackground'] ?? theme.palette.bg.chrome,

  /**
   * Status Bar border color separating the Status Bar and editor when no folder is opened.
   */
  'statusBar.noFolderBorder': theme.ui['statusBar.noFolderBorder'] ?? theme.palette.border.faint,

  /**
   * Status Bar item background color when clicking.
   */
  'statusBarItem.activeBackground': theme.ui['statusBarItem.activeBackground'] ?? theme.palette.bg.active,

  /**
   * Status bar item foreground color when hovering. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.hoverForeground': theme.ui['statusBarItem.hoverForeground'] ?? theme.palette.fg.default,

  /**
   * Status Bar item background color when hovering.
   */
  'statusBarItem.hoverBackground': theme.ui['statusBarItem.hoverBackground'] ?? theme.palette.bg.hover,

  /**
   * Status Bar prominent items foreground color.
   */
  'statusBarItem.prominentForeground': theme.ui['statusBarItem.prominentForeground'] ?? theme.palette.fg.onAccent,

  /**
   * Status Bar prominent items background color.
   */
  'statusBarItem.prominentBackground': theme.ui['statusBarItem.prominentBackground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.prominentHoverForeground': theme.ui['statusBarItem.prominentHoverForeground'] ?? theme.palette.fg.onAccent,

  /**
   * Status Bar prominent items background color when hovering.
   */
  'statusBarItem.prominentHoverBackground': theme.ui['statusBarItem.prominentHoverBackground'] ?? theme.palette.ctrl.primary.bgHover,

  /**
   * Background color for the remote indicator on the status bar.
   */
  'statusBarItem.remoteBackground': theme.ui['statusBarItem.remoteBackground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Foreground color for the remote indicator on the status bar.
   */
  'statusBarItem.remoteForeground': theme.ui['statusBarItem.remoteForeground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Background color for the remote indicator on the status bar when hovering.
   */
  'statusBarItem.remoteHoverBackground': theme.ui['statusBarItem.remoteHoverBackground'] ?? theme.palette.ctrl.primary.bgHover,

  /**
   * Foreground color for the remote indicator on the status bar when hovering.
   */
  'statusBarItem.remoteHoverForeground': theme.ui['statusBarItem.remoteHoverForeground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
   */
  'statusBarItem.errorBackground': theme.ui['statusBarItem.errorBackground'] ?? theme.palette.state.error.bg,

  /**
   * Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.
   */
  'statusBarItem.errorForeground': theme.ui['statusBarItem.errorForeground'] ?? theme.palette.state.error.fg,

  /**
   * Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.errorHoverBackground': theme.ui['statusBarItem.errorHoverBackground'] ?? theme.palette.state.error.bg,

  /**
   * Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.errorHoverForeground': theme.ui['statusBarItem.errorHoverForeground'] ?? theme.palette.state.error.fg,

  /**
   * Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningBackground': theme.ui['statusBarItem.warningBackground'] ?? theme.palette.state.warning.bg,

  /**
   * Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningForeground': theme.ui['statusBarItem.warningForeground'] ?? theme.palette.state.warning.fg,

  /**
   * Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningHoverBackground': theme.ui['statusBarItem.warningHoverBackground'] ?? theme.palette.state.warning.bg,

  /**
   * Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningHoverForeground': theme.ui['statusBarItem.warningHoverForeground'] ?? theme.palette.state.warning.fg,

  /**
   * Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.compactHoverBackground': theme.ui['statusBarItem.compactHoverBackground'] ?? theme.palette.bg.hover,

  /**
   * Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.focusBorder': theme.ui['statusBarItem.focusBorder'] ?? theme.palette.border.focus,

  /**
   * Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
   */
  'statusBar.focusBorder': theme.ui['statusBar.focusBorder'] ?? theme.palette.border.focus,

  /**
   * Status bar item background color when the workbench is offline.
   */
  'statusBarItem.offlineBackground': theme.ui['statusBarItem.offlineBackground'] ?? theme.palette.state.error.bg,

  /**
   * Status bar item foreground color when the workbench is offline.
   */
  'statusBarItem.offlineForeground': theme.ui['statusBarItem.offlineForeground'] ?? theme.palette.state.error.fg,

  /**
   * Status bar item foreground hover color when the workbench is offline.
   */
  'statusBarItem.offlineHoverForeground': theme.ui['statusBarItem.offlineHoverForeground'] ?? theme.palette.state.error.fg,

  /**
   * Status bar item background hover color when the workbench is offline.
   */
  'statusBarItem.offlineHoverBackground': theme.ui['statusBarItem.offlineHoverBackground'] ?? theme.palette.state.error.bg,

});

export type StatusBarKey = keyof ReturnType<typeof statusBar>;
