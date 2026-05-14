import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const debug = (theme: Theme) => ({

  /**
   * Debug toolbar background color.
   */
  'debugToolBar.background': theme.ui['debugToolBar.background'] ?? theme.palette.bg.raised,

  /**
   * Debug toolbar border color.
   */
  'debugToolBar.border': theme.ui['debugToolBar.border'] ?? theme.palette.border.default,

  /**
   * Background color of the top stack frame highlight in the editor.
   */
  'editor.stackFrameHighlightBackground': theme.ui['editor.stackFrameHighlightBackground'] ?? theme.palette.state.warning.bg,

  /**
   * Background color of the focused stack frame highlight in the editor.
   */
  'editor.focusedStackFrameHighlightBackground': theme.ui['editor.focusedStackFrameHighlightBackground'] ?? theme.palette.state.info.bg,

  /**
   * Color for the debug inline value text.
   */
  'editor.inlineValuesForeground': theme.ui['editor.inlineValuesForeground'] ?? theme.palette.fg.muted,

  /**
   * Color for the debug inline value background.
   */
  'editor.inlineValuesBackground': theme.ui['editor.inlineValuesBackground'] ?? theme.palette.bg.workbench,

  /**
   * Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.
   */
  'debugView.exceptionLabelForeground': theme.ui['debugView.exceptionLabelForeground'] ?? theme.palette.state.error.fg,

  /**
   * Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.
   */
  'debugView.exceptionLabelBackground': theme.ui['debugView.exceptionLabelBackground'] ?? theme.palette.state.error.bg,

  /**
   * Foreground color for a label in the CALL STACK view showing the current session's or thread's state.
   */
  'debugView.stateLabelForeground': theme.ui['debugView.stateLabelForeground'] ?? theme.palette.fg.default,

  /**
   * Background color for a label in the CALL STACK view showing the current session's or thread's state.
   */
  'debugView.stateLabelBackground': theme.ui['debugView.stateLabelBackground'] ?? theme.palette.bg.workbench,

  /**
   * Color used to highlight value changes in the debug views (such as in the Variables view).
   */
  'debugView.valueChangedHighlight': theme.ui['debugView.valueChangedHighlight'] ?? theme.palette.state.info.bg,

  /**
   * Foreground color for the token names shown in debug views (such as in the Variables or Watch view).
   */
  'debugTokenExpression.name': theme.ui['debugTokenExpression.name'] ?? theme.palette.syntax.variable,

  /**
   * Foreground color for the token values shown in debug views.
   */
  'debugTokenExpression.value': theme.ui['debugTokenExpression.value'] ?? theme.palette.fg.default,

  /**
   * Foreground color for strings in debug views.
   */
  'debugTokenExpression.string': theme.ui['debugTokenExpression.string'] ?? theme.palette.syntax.string,

  /**
   * Foreground color for booleans in debug views.
   */
  'debugTokenExpression.boolean': theme.ui['debugTokenExpression.boolean'] ?? theme.palette.syntax.keyword,

  /**
   * Foreground color for numbers in debug views.
   */
  'debugTokenExpression.number': theme.ui['debugTokenExpression.number'] ?? theme.palette.syntax.number,

  /**
   * Foreground color for expression errors in debug views.
   */
  'debugTokenExpression.error': theme.ui['debugTokenExpression.error'] ?? theme.palette.state.error.fg,

  /**
   * Foreground color for the token types shown in the debug views (ie. the Variables or Watch view).
   */
  'debugTokenExpression.type': theme.ui['debugTokenExpression.type'] ?? theme.palette.syntax.type,

});

export type DebugKey = keyof ReturnType<typeof debug>;
