import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const activityBar = (theme: Theme) => ({

  /**
   * Activity Bar background color.
   */
  'activityBar.background': theme.ui['activityBar.background'] ?? theme.palette.bg.chrome,

  /**
   * Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBar.dropBorder': theme.ui['activityBar.dropBorder'] ?? theme.palette.border.focus,

  /**
   * Activity Bar foreground color (for example used for the icons).
   */
  'activityBar.foreground': theme.ui['activityBar.foreground'] ?? theme.palette.fg.default,

  /**
   * Activity Bar item foreground color when it is inactive.
   */
  'activityBar.inactiveForeground': theme.ui['activityBar.inactiveForeground'] ?? theme.palette.fg.muted,

  /**
   * Activity Bar border color with the Side Bar.
   */
  'activityBar.border': theme.ui['activityBar.border'] ?? theme.palette.border.faint,

  /**
   * Activity notification badge background color.
   */
  'activityBarBadge.background': theme.ui['activityBarBadge.background'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Activity notification badge foreground color.
   */
  'activityBarBadge.foreground': theme.ui['activityBarBadge.foreground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Activity Bar active indicator border color.
   */
  'activityBar.activeBorder': theme.ui['activityBar.activeBorder'] ?? theme.colors.transparent,

  /**
   * Activity Bar optional background color for the active element.
   */
  'activityBar.activeBackground': theme.ui['activityBar.activeBackground'],

  /**
   * Activity bar focus border color for the active item.
   */
  'activityBar.activeFocusBorder': theme.ui['activityBar.activeFocusBorder'] ?? theme.palette.border.focus,

  /**
   * Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
   */
  'activityBarTop.foreground': theme.ui['activityBarTop.foreground'] ?? theme.palette.fg.default,

  /**
   * Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
   */
  'activityBarTop.activeBorder': theme.ui['activityBarTop.activeBorder'] ?? theme.palette.border.focus,

  /**
   * Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
   */
  'activityBarTop.inactiveForeground': theme.ui['activityBarTop.inactiveForeground'] ?? theme.palette.fg.dim,

  /**
   * Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
   */
  'activityBarTop.dropBorder': theme.ui['activityBarTop.dropBorder'] ?? theme.palette.border.focus,

  /**
   * Background color of the activity bar when set to top / bottom.
   */
  'activityBarTop.background': theme.ui['activityBarTop.background'] ?? theme.palette.bg.editor,

  /**
   * Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
   */
  'activityBarTop.activeBackground': theme.ui['activityBarTop.activeBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Foreground color of the warning activity badge
   */
  'activityWarningBadge.foreground': theme.ui['activityWarningBadge.foreground'] ?? theme.palette.state.warning.fg,

  /**
   * Background color of the warning activity badge
   */
  'activityWarningBadge.background': theme.ui['activityWarningBadge.background'] ?? theme.palette.state.warning.bg,

  /**
   * Foreground color of the error activity badge
   */
  'activityErrorBadge.foreground': theme.ui['activityErrorBadge.foreground'] ?? theme.palette.state.error.fg,

  /**
   * Background color of the error activity badge
   */
  'activityErrorBadge.background': theme.ui['activityErrorBadge.background'] ?? theme.palette.state.error.bg,

});

export type ActivityBarKey = keyof ReturnType<typeof activityBar>;
