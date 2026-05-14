import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const peekView = (theme: Theme) => ({

  /**
   * Color of the peek view borders and arrow.
   */
  'peekView.border': theme.ui['peekView.border'] ?? theme.palette.border.focus,

  /**
   * Background color of the peek view editor.
   */
  'peekViewEditor.background': theme.ui['peekViewEditor.background'] ?? theme.palette.bg.workbench,

  /**
   * Background color of the gutter in the peek view editor.
   */
  'peekViewEditorGutter.background': theme.ui['peekViewEditorGutter.background'] ?? theme.palette.bg.workbench,

  /**
   * Match highlight color in the peek view editor.
   */
  'peekViewEditor.matchHighlightBackground': theme.ui['peekViewEditor.matchHighlightBackground'] ?? theme.palette.state.warning.bg,

  /**
   * Match highlight border color in the peek view editor.
   */
  'peekViewEditor.matchHighlightBorder': theme.ui['peekViewEditor.matchHighlightBorder'] ?? theme.colors.orange,

  /**
   * Background color of the peek view result list.
   */
  'peekViewResult.background': theme.ui['peekViewResult.background'] ?? theme.palette.bg.editor,

  /**
   * Foreground color for file nodes in the peek view result list.
   */
  'peekViewResult.fileForeground': theme.ui['peekViewResult.fileForeground'] ?? theme.palette.fg.default,

  /**
   * Foreground color for line nodes in the peek view result list.
   */
  'peekViewResult.lineForeground': theme.ui['peekViewResult.lineForeground'] ?? theme.palette.fg.dim,

  /**
   * Match highlight color in the peek view result list.
   */
  'peekViewResult.matchHighlightBackground': theme.ui['peekViewResult.matchHighlightBackground'] ?? theme.palette.state.warning.bg,

  /**
   * Background color of the selected entry in the peek view result list.
   */
  'peekViewResult.selectionBackground': theme.ui['peekViewResult.selectionBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Foreground color of the selected entry in the peek view result list.
   */
  'peekViewResult.selectionForeground': theme.ui['peekViewResult.selectionForeground'] ?? theme.palette.fg.default,

  /**
   * Background color of the peek view title area.
   */
  'peekViewTitle.background': theme.ui['peekViewTitle.background'] ?? theme.palette.bg.workbench,

  /**
   * Color of the peek view title info.
   */
  'peekViewTitleDescription.foreground': theme.ui['peekViewTitleDescription.foreground'] ?? theme.palette.fg.dim,

  /**
   * Color of the peek view title.
   */
  'peekViewTitleLabel.foreground': theme.ui['peekViewTitleLabel.foreground'] ?? theme.palette.fg.default,

  /**
   * Background color of sticky scroll in the peek view editor.
   */
  'peekViewEditorStickyScroll.background': theme.ui['peekViewEditorStickyScroll.background'] ?? theme.palette.bg.workbench,

  /**
   * Background color of the gutter part of sticky scroll in the peek view editor.
   */
  'peekViewEditorStickyScrollGutter.background': theme.ui['peekViewEditorStickyScrollGutter.background'] ?? theme.palette.bg.workbench,

});

export type PeekViewKey = keyof ReturnType<typeof peekView>;
