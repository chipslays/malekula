import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const editorWidget = (theme: Theme) => ({

  /**
   * Foreground color of editor widgets, such as find/replace.
   */
  'editorWidget.foreground': theme.ui['editorWidget.foreground'] ?? theme.palette.fg.default,

  /**
   * Background color of editor widgets, such as Find/Replace.
   */
  'editorWidget.background': theme.ui['editorWidget.background'] ?? theme.palette.bg.raised,

  /**
   * Border color of the editor widget unless the widget does not contain a border or defines its own border color.
   */
  'editorWidget.border': theme.ui['editorWidget.border'] ?? theme.palette.border.default,

  /**
   * Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
   */
  'editorWidget.resizeBorder': theme.ui['editorWidget.resizeBorder'] ?? theme.palette.border.focus,

  /**
   * Background color of the suggestion widget.
   */
  'editorSuggestWidget.background': theme.ui['editorSuggestWidget.background'] ?? theme.palette.bg.raised,

  /**
   * Border color of the suggestion widget.
   */
  'editorSuggestWidget.border': theme.ui['editorSuggestWidget.border'] ?? theme.palette.border.default,

  /**
   * Foreground color of the suggestion widget.
   */
  'editorSuggestWidget.foreground': theme.ui['editorSuggestWidget.foreground'] ?? theme.palette.fg.default,

  /**
   * Color of the match highlights in the suggest widget when an item is focused.
   */
  'editorSuggestWidget.focusHighlightForeground': theme.ui['editorSuggestWidget.focusHighlightForeground'] ?? theme.palette.fg.link,

  /**
   * Color of the match highlights in the suggestion widget.
   */
  'editorSuggestWidget.highlightForeground': theme.ui['editorSuggestWidget.highlightForeground'] ?? theme.palette.fg.link,

  /**
   * Background color of the selected entry in the suggestion widget.
   */
  'editorSuggestWidget.selectedBackground': theme.ui['editorSuggestWidget.selectedBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Foreground color of the selected entry in the suggest widget.
   */
  'editorSuggestWidget.selectedForeground': theme.ui['editorSuggestWidget.selectedForeground'] ?? theme.palette.fg.default,

  /**
   * Icon foreground color of the selected entry in the suggest widget.
   */
  'editorSuggestWidget.selectedIconForeground': theme.ui['editorSuggestWidget.selectedIconForeground'] ?? theme.palette.fg.default,

  /**
   * Foreground color of the suggest widget status.
   */
  'editorSuggestWidgetStatus.foreground': theme.ui['editorSuggestWidgetStatus.foreground'] ?? theme.palette.fg.subtle,

  /**
   * Foreground color of the editor hover.
   */
  'editorHoverWidget.foreground': theme.ui['editorHoverWidget.foreground'] ?? theme.palette.fg.default,

  /**
   * Background color of the editor hover.
   */
  'editorHoverWidget.background': theme.ui['editorHoverWidget.background'] ?? theme.palette.bg.base,

  /**
   * Border color of the editor hover.
   */
  'editorHoverWidget.border': theme.ui['editorHoverWidget.border'] ?? theme.palette.border.default,

  /**
   * Foreground color of the active item in the parameter hint.
   */
  'editorHoverWidget.highlightForeground': theme.ui['editorHoverWidget.highlightForeground'] ?? theme.palette.fg.link,

  /**
   * Background color of the editor hover status bar.
   */
  'editorHoverWidget.statusBarBackground': theme.ui['editorHoverWidget.statusBarBackground'] ?? theme.palette.bg.workbench,

  /**
   * Border color of the ghost text shown by inline completion providers and the suggest preview.
   */
  'editorGhostText.border': theme.ui['editorGhostText.border'],

  /**
   * Background color of the ghost text in the editor.
   */
  'editorGhostText.background': theme.ui['editorGhostText.background'],

  /**
   * Foreground color of the ghost text shown by inline completion providers and the suggest preview.
   */
  'editorGhostText.foreground': theme.ui['editorGhostText.foreground'] ?? theme.palette.fg.muted,

  /**
   * Editor sticky scroll background color.
   */
  'editorStickyScroll.background': theme.ui['editorStickyScroll.background'] ?? theme.palette.bg.editorSticky,

  /**
   * Border color of sticky scroll in the editor.
   */
  'editorStickyScroll.border': theme.ui['editorStickyScroll.border'] ?? theme.palette.border.faint,

  /**
   * Shadow color of sticky scroll in the editor.
   */
  'editorStickyScroll.shadow': theme.ui['editorStickyScroll.shadow'] ?? theme.palette.shadow.sm,

  /**
   * Background color of the gutter part of sticky scroll in the editor.
   */
  'editorStickyScrollGutter.background': theme.ui['editorStickyScrollGutter.background'] ?? theme.palette.bg.editorSticky,

  /**
   * Editor sticky scroll on hover background color.
   */
  'editorStickyScrollHover.background': theme.ui['editorStickyScrollHover.background'] ?? theme.palette.bg.editorSticky,

  /**
   * Exception widget background color.
   */
  'debugExceptionWidget.background': theme.ui['debugExceptionWidget.background'] ?? theme.palette.state.error.bg,

  /**
   * Exception widget border color.
   */
  'debugExceptionWidget.border': theme.ui['debugExceptionWidget.border'] ?? theme.palette.state.error.border,

  /**
   * Editor marker navigation widget background.
   */
  'editorMarkerNavigation.background': theme.ui['editorMarkerNavigation.background'] ?? theme.palette.bg.workbench,

  /**
   * Editor marker navigation widget error color.
   */
  'editorMarkerNavigationError.background': theme.ui['editorMarkerNavigationError.background'] ?? theme.palette.state.error.bg,

  /**
   * Editor marker navigation widget warning color.
   */
  'editorMarkerNavigationWarning.background': theme.ui['editorMarkerNavigationWarning.background'] ?? theme.palette.state.warning.bg,

  /**
   * Editor marker navigation widget info color.
   */
  'editorMarkerNavigationInfo.background': theme.ui['editorMarkerNavigationInfo.background'] ?? theme.palette.state.info.bg,

  /**
   * Editor marker navigation widget error heading background.
   */
  'editorMarkerNavigationError.headerBackground': theme.ui['editorMarkerNavigationError.headerBackground'] ?? theme.palette.state.error.bg,

  /**
   * Editor marker navigation widget warning heading background.
   */
  'editorMarkerNavigationWarning.headerBackground': theme.ui['editorMarkerNavigationWarning.headerBackground'] ?? theme.palette.state.warning.bg,

  /**
   * Editor marker navigation widget info heading background.
   */
  'editorMarkerNavigationInfo.headerBackground': theme.ui['editorMarkerNavigationInfo.headerBackground'] ?? theme.palette.state.info.bg,

});

export type EditorWidgetKey = keyof ReturnType<typeof editorWidget>;
