import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const testing = (theme: Theme) => ({

  /**
   * Color for 'run' icons in the editor.
   */
  'testing.runAction': theme.ui['testing.runAction'] ?? theme.colors.green,

  /**
   * Color for the 'Errored' icon in the test explorer.
   */
  'testing.iconErrored': theme.ui['testing.iconErrored'] ?? theme.colors.red,

  /**
   * Color for the 'failed' icon in the test explorer.
   */
  'testing.iconFailed': theme.ui['testing.iconFailed'] ?? theme.colors.red,

  /**
   * Color for the 'passed' icon in the test explorer.
   */
  'testing.iconPassed': theme.ui['testing.iconPassed'] ?? theme.colors.green,

  /**
   * Color for the 'Queued' icon in the test explorer.
   */
  'testing.iconQueued': theme.ui['testing.iconQueued'] ?? theme.colors.yellow,

  /**
   * Color for the 'Unset' icon in the test explorer.
   */
  'testing.iconUnset': theme.ui['testing.iconUnset'] ?? theme.palette.fg.subtle,

  /**
   * Color for the 'Skipped' icon in the test explorer.
   */
  'testing.iconSkipped': theme.ui['testing.iconSkipped'] ?? theme.palette.fg.subtle,

  /**
   * Retired color for the 'Errored' icon in the test explorer.
   */
  'testing.iconErrored.retired': theme.ui['testing.iconErrored.retired'] ?? theme.palette.fg.disabled,

  /**
   * Retired color for the 'failed' icon in the test explorer.
   */
  'testing.iconFailed.retired': theme.ui['testing.iconFailed.retired'] ?? theme.palette.fg.disabled,

  /**
   * Retired color for the 'passed' icon in the test explorer.
   */
  'testing.iconPassed.retired': theme.ui['testing.iconPassed.retired'] ?? theme.palette.fg.disabled,

  /**
   * Retired color for the 'Queued' icon in the test explorer.
   */
  'testing.iconQueued.retired': theme.ui['testing.iconQueued.retired'] ?? theme.palette.fg.disabled,

  /**
   * Retired color for the 'Unset' icon in the test explorer.
   */
  'testing.iconUnset.retired': theme.ui['testing.iconUnset.retired'] ?? theme.palette.fg.disabled,

  /**
   * Retired color for the 'Skipped' icon in the test explorer.
   */
  'testing.iconSkipped.retired': theme.ui['testing.iconSkipped.retired'] ?? theme.palette.fg.disabled,

  /**
   * Color of the peek view borders and arrow.
   */
  'testing.peekBorder': theme.ui['testing.peekBorder'] ?? theme.palette.border.focus,

  /**
   * Color of the peek view borders and arrow.
   */
  'testing.peekHeaderBackground': theme.ui['testing.peekHeaderBackground'] ?? theme.palette.bg.workbench,

  /**
   * Margin color beside error messages shown inline in the editor.
   */
  'testing.message.error.lineBackground': theme.ui['testing.message.error.lineBackground'] ?? theme.palette.state.error.bg,

  /**
   * Text color of test info messages shown inline in the editor.
   */
  'testing.message.info.decorationForeground': theme.ui['testing.message.info.decorationForeground'] ?? theme.palette.state.info.fg,

  /**
   * Margin color beside info messages shown inline in the editor.
   */
  'testing.message.info.lineBackground': theme.ui['testing.message.info.lineBackground'] ?? theme.palette.state.info.bg,

  /**
   * Color of the peek view borders and arrow when peeking a logged message.
   */
  'testing.messagePeekBorder': theme.ui['testing.messagePeekBorder'] ?? theme.palette.border.default,

  /**
   * Color of the peek view borders and arrow when peeking a logged message.
   */
  'testing.messagePeekHeaderBackground': theme.ui['testing.messagePeekHeaderBackground'] ?? theme.palette.bg.workbench,

  /**
   * Background color of text that was covered.
   */
  'testing.coveredBackground': theme.ui['testing.coveredBackground'] ?? theme.palette.state.success.bg,

  /**
   * Border color of text that was covered.
   */
  'testing.coveredBorder': theme.ui['testing.coveredBorder'] ?? theme.palette.state.success.border,

  /**
   * Gutter color of regions where code was covered.
   */
  'testing.coveredGutterBackground': theme.ui['testing.coveredGutterBackground'] ?? theme.palette.state.success.bg,

  /**
   * Background of the widget shown for an uncovered branch.
   */
  'testing.uncoveredBranchBackground': theme.ui['testing.uncoveredBranchBackground'] ?? theme.palette.state.error.bg,

  /**
   * Background color of text that was not covered.
   */
  'testing.uncoveredBackground': theme.ui['testing.uncoveredBackground'] ?? theme.palette.state.error.bg,

  /**
   * Border color of text that was not covered.
   */
  'testing.uncoveredBorder': theme.ui['testing.uncoveredBorder'] ?? theme.palette.state.error.border,

  /**
   * Gutter color of regions where code not covered.
   */
  'testing.uncoveredGutterBackground': theme.ui['testing.uncoveredGutterBackground'] ?? theme.palette.state.error.bg,

  /**
   * Background for the badge indicating execution count
   */
  'testing.coverCountBadgeBackground': theme.ui['testing.coverCountBadgeBackground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Foreground for the badge indicating execution count
   */
  'testing.coverCountBadgeForeground': theme.ui['testing.coverCountBadgeForeground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Background color of test error messages shown inline in the editor.
   */
  'testing.message.error.badgeBackground': theme.ui['testing.message.error.badgeBackground'] ?? theme.palette.state.error.bg,

  /**
   * Border color of test error messages shown inline in the editor.
   */
  'testing.message.error.badgeBorder': theme.ui['testing.message.error.badgeBorder'] ?? theme.palette.state.error.border,

  /**
   * Text color of test error messages shown inline in the editor.
   */
  'testing.message.error.badgeForeground': theme.ui['testing.message.error.badgeForeground'] ?? theme.palette.state.error.fg,

});

export type TestingKey = keyof ReturnType<typeof testing>;
