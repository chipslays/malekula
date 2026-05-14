import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const integratedTerminal = (theme: Theme) => ({

  /**
   * The background of the Integrated Terminal's viewport.
   */
  'terminal.background': theme.ui['terminal.background'] ?? theme.palette.bg.workbench,

  /**
   * The color of the border that separates split panes within the terminal. This defaults to panel.border.
   */
  'terminal.border': theme.ui['terminal.border'] ?? theme.palette.border.faint,

  /**
   * The default foreground color of the Integrated Terminal.
   */
  'terminal.foreground': theme.ui['terminal.foreground'] ?? theme.palette.fg.default,

  /**
   * 'Black' ANSI color in the terminal.
   */
  'terminal.ansiBlack': theme.ui['terminal.ansiBlack'] ?? theme.palette.terminal.black,

  /**
   * 'Blue' ANSI color in the terminal.
   */
  'terminal.ansiBlue': theme.ui['terminal.ansiBlue'] ?? theme.palette.terminal.blue,

  /**
   * 'BrightBlack' ANSI color in the terminal.
   */
  'terminal.ansiBrightBlack': theme.ui['terminal.ansiBrightBlack'] ?? theme.palette.terminal.brightBlack,

  /**
   * 'BrightBlue' ANSI color in the terminal.
   */
  'terminal.ansiBrightBlue': theme.ui['terminal.ansiBrightBlue'] ?? theme.palette.terminal.brightBlue,

  /**
   * 'BrightCyan' ANSI color in the terminal.
   */
  'terminal.ansiBrightCyan': theme.ui['terminal.ansiBrightCyan'] ?? theme.palette.terminal.brightCyan,

  /**
   * 'BrightGreen' ANSI color in the terminal.
   */
  'terminal.ansiBrightGreen': theme.ui['terminal.ansiBrightGreen'] ?? theme.palette.terminal.brightGreen,

  /**
   * 'BrightMagenta' ANSI color in the terminal.
   */
  'terminal.ansiBrightMagenta': theme.ui['terminal.ansiBrightMagenta'] ?? theme.palette.terminal.brightMagenta,

  /**
   * 'BrightRed' ANSI color in the terminal.
   */
  'terminal.ansiBrightRed': theme.ui['terminal.ansiBrightRed'] ?? theme.palette.terminal.brightRed,

  /**
   * 'BrightWhite' ANSI color in the terminal.
   */
  'terminal.ansiBrightWhite': theme.ui['terminal.ansiBrightWhite'] ?? theme.palette.terminal.brightWhite,

  /**
   * 'BrightYellow' ANSI color in the terminal.
   */
  'terminal.ansiBrightYellow': theme.ui['terminal.ansiBrightYellow'] ?? theme.palette.terminal.brightYellow,

  /**
   * 'Cyan' ANSI color in the terminal.
   */
  'terminal.ansiCyan': theme.ui['terminal.ansiCyan'] ?? theme.palette.terminal.cyan,

  /**
   * 'Green' ANSI color in the terminal.
   */
  'terminal.ansiGreen': theme.ui['terminal.ansiGreen'] ?? theme.palette.terminal.green,

  /**
   * 'Magenta' ANSI color in the terminal.
   */
  'terminal.ansiMagenta': theme.ui['terminal.ansiMagenta'] ?? theme.palette.terminal.magenta,

  /**
   * 'Red' ANSI color in the terminal.
   */
  'terminal.ansiRed': theme.ui['terminal.ansiRed'] ?? theme.palette.terminal.red,

  /**
   * 'White' ANSI color in the terminal.
   */
  'terminal.ansiWhite': theme.ui['terminal.ansiWhite'] ?? theme.palette.terminal.white,

  /**
   * 'Yellow' ANSI color in the terminal.
   */
  'terminal.ansiYellow': theme.ui['terminal.ansiYellow'] ?? theme.palette.terminal.yellow,

  /**
   * The selection background color of the terminal.
   */
  'terminal.selectionBackground': theme.ui['terminal.selectionBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
   */
  'terminal.selectionForeground': theme.ui['terminal.selectionForeground'],

  /**
   * The selection background color of the terminal when it does not have focus.
   */
  'terminal.inactiveSelectionBackground': theme.ui['terminal.inactiveSelectionBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
   */
  'terminal.findMatchBackground': theme.ui['terminal.findMatchBackground'] ?? theme.palette.state.warning.bg,

  /**
   * Border color of the current search match in the terminal.
   */
  'terminal.findMatchBorder': theme.ui['terminal.findMatchBorder'] ?? theme.colors.orange,

  /**
   * Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
   */
  'terminal.findMatchHighlightBackground': theme.ui['terminal.findMatchHighlightBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Border color of the other search matches in the terminal.
   */
  'terminal.findMatchHighlightBorder': theme.ui['terminal.findMatchHighlightBorder'],

  /**
   * Color of the highlight when hovering a link in the terminal.
   */
  'terminal.hoverHighlightBackground': theme.ui['terminal.hoverHighlightBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
   */
  'terminalCursor.background': theme.ui['terminalCursor.background'] ?? theme.palette.bg.editor,

  /**
   * The foreground color of the terminal cursor.
   */
  'terminalCursor.foreground': theme.ui['terminalCursor.foreground'] ?? theme.palette.fg.default,

  /**
   * The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
   */
  'terminal.dropBackground': theme.ui['terminal.dropBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Border on the side of the terminal tab in the panel. This defaults to `tab.activeBorder`.
   */
  'terminal.tab.activeBorder': theme.ui['terminal.tab.activeBorder'] ?? theme.palette.border.focus,

  /**
   * The default terminal command decoration background color.
   */
  'terminalCommandDecoration.defaultBackground': theme.ui['terminalCommandDecoration.defaultBackground'] ?? theme.palette.fg.muted,

  /**
   * The terminal command decoration background color for successful commands.
   */
  'terminalCommandDecoration.successBackground': theme.ui['terminalCommandDecoration.successBackground'] ?? theme.colors.green,

  /**
   * The terminal command decoration background color for error commands.
   */
  'terminalCommandDecoration.errorBackground': theme.ui['terminalCommandDecoration.errorBackground'] ?? theme.colors.red,

  /**
   * The overview ruler cursor color.
   */
  'terminalOverviewRuler.cursorForeground': theme.ui['terminalOverviewRuler.cursorForeground'] ?? theme.palette.fg.subtle,

  /**
   * Overview ruler marker color for find matches in the terminal.
   */
  'terminalOverviewRuler.findMatchForeground': theme.ui['terminalOverviewRuler.findMatchForeground'] ?? theme.colors.orange,

  /**
   * The background color of the sticky scroll overlay in the terminal.
   */
  'terminalStickyScroll.background': theme.ui['terminalStickyScroll.background'] ?? theme.palette.bg.editor,

  /**
   * The border of the sticky scroll overlay in the terminal.
   */
  'terminalStickyScroll.border': theme.ui['terminalStickyScroll.border'] ?? theme.palette.border.faint,

  /**
   * The background color of the sticky scroll overlay in the terminal when hovered.
   */
  'terminalStickyScrollHover.background': theme.ui['terminalStickyScrollHover.background'] ?? theme.palette.bg.hover,

  /**
   * Foreground color of the terminal initial hint.
   */
  'terminal.initialHintForeground': theme.ui['terminal.initialHintForeground'] ?? theme.palette.fg.disabled,

  /**
   * The overview ruler left-side border color.
   */
  'terminalOverviewRuler.border': theme.ui['terminalOverviewRuler.border'] ?? theme.palette.border.faint,

  /**
   * The foreground color of the terminal command guide that appears to the left of a command and its output on hover.
   */
  'terminalCommandGuide.foreground': theme.ui['terminalCommandGuide.foreground'] ?? theme.palette.fg.muted,

  /**
   * The foreground color for an alias icon. These icons will appear in the terminal suggest widget
   */
  'terminalSymbolIcon.aliasForeground': theme.ui['terminalSymbolIcon.aliasForeground'] ?? theme.palette.fg.subtle,

  /**
   * The foreground color for a branch icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.branchForeground': theme.ui['terminalSymbolIcon.branchForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for a commit icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.commitForeground': theme.ui['terminalSymbolIcon.commitForeground'] ?? theme.palette.fg.subtle,

  /**
   * The foreground color for an flag icon. These icons will appear in the terminal suggest widget
   */
  'terminalSymbolIcon.flagForeground': theme.ui['terminalSymbolIcon.flagForeground'] ?? theme.colors.yellow,

  /**
   * The foreground color for an option icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.optionForeground': theme.ui['terminalSymbolIcon.optionForeground'] ?? theme.palette.fg.subtle,

  /**
   * The foreground color for an enum member icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.optionValueForeground': theme.ui['terminalSymbolIcon.optionValueForeground'] ?? theme.colors.green,

  /**
   * The foreground color for a method icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.methodForeground': theme.ui['terminalSymbolIcon.methodForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for an argument icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.argumentForeground': theme.ui['terminalSymbolIcon.argumentForeground'] ?? theme.palette.fg.subtle,

  /**
   * The foreground color for an inline suggestion icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.inlineSuggestionForeground': theme.ui['terminalSymbolIcon.inlineSuggestionForeground'] ?? theme.palette.fg.muted,

  /**
   * The foreground color for a file icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.fileForeground': theme.ui['terminalSymbolIcon.fileForeground'] ?? theme.palette.fg.default,

  /**
   * The foreground color for a folder icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.folderForeground': theme.ui['terminalSymbolIcon.folderForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for a completed pull request icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.pullRequestDoneForeground': theme.ui['terminalSymbolIcon.pullRequestDoneForeground'] ?? theme.colors.green,

  /**
   * The foreground color for a pull request icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.pullRequestForeground': theme.ui['terminalSymbolIcon.pullRequestForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for a remote icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.remoteForeground': theme.ui['terminalSymbolIcon.remoteForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for a stash icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.stashForeground': theme.ui['terminalSymbolIcon.stashForeground'] ?? theme.colors.orange,

  /**
   * The foreground color for a plaintext suggestion. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.symbolText': theme.ui['terminalSymbolIcon.symbolText'] ?? theme.palette.fg.subtle,

  /**
   * The foreground color for a symbolic link file icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.symbolicLinkFileForeground': theme.ui['terminalSymbolIcon.symbolicLinkFileForeground'] ?? theme.colors.cyan,

  /**
   * The foreground color for a symbolic link folder icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.symbolicLinkFolderForeground': theme.ui['terminalSymbolIcon.symbolicLinkFolderForeground'] ?? theme.colors.cyan,

  /**
   * The foreground color for a tag icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.tagForeground': theme.ui['terminalSymbolIcon.tagForeground'] ?? theme.colors.orange,

});

export type IntegratedTerminalKey = keyof ReturnType<typeof integratedTerminal>;
