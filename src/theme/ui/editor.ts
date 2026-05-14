import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const editor = (theme: Theme) => ({

  /**
   * Editor background color.
   */
  'editor.background': theme.ui['editor.background'] ?? theme.palette.bg.editor,

  /**
   * Editor default foreground color.
   */
  'editor.foreground': theme.ui['editor.foreground'] ?? theme.palette.fg.default,

  /**
   * Color of editor line numbers.
   */
  'editorLineNumber.foreground': theme.ui['editorLineNumber.foreground'] ?? theme.palette.fg.muted,

  /**
   * Color of the active editor line number.
   */
  'editorLineNumber.activeForeground': theme.ui['editorLineNumber.activeForeground'] ?? theme.palette.fg.subtle,

  /**
   * Color of the final editor line when editor.renderFinalNewline is set to dimmed.
   */
  'editorLineNumber.dimmedForeground': theme.ui['editorLineNumber.dimmedForeground'] ?? theme.palette.fg.disabled,

  /**
   * The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
   */
  'editorCursor.background': theme.ui['editorCursor.background'] ?? theme.palette.bg.editor,

  /**
   * Color of the editor cursor.
   */
  'editorCursor.foreground': theme.ui['editorCursor.foreground'] ?? theme.colors.accent,

  /**
   * Color of the primary editor cursor when multiple cursors are present.
   */
  'editorMultiCursor.primary.foreground': theme.ui['editorMultiCursor.primary.foreground'] ?? theme.palette.fg.default,

  /**
   * The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
   */
  'editorMultiCursor.primary.background': theme.ui['editorMultiCursor.primary.background'] ?? theme.palette.bg.editor,

  /**
   * Color of secondary editor cursors when multiple cursors are present.
   */
  'editorMultiCursor.secondary.foreground': theme.ui['editorMultiCursor.secondary.foreground'] ?? theme.palette.fg.subtle,

  /**
   * The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
   */
  'editorMultiCursor.secondary.background': theme.ui['editorMultiCursor.secondary.background'] ?? theme.palette.bg.workbench,

  /**
   * Foreground color of the placeholder text in the editor.
   */
  'editor.placeholder.foreground': theme.ui['editor.placeholder.foreground'] ?? theme.palette.fg.disabled,

  /**
   * The border color for an IME composition.
   */
  'editor.compositionBorder': theme.ui['editor.compositionBorder'] ?? theme.palette.border.focus,

  /**
   * Color of the editor selection.
   */
  'editor.selectionBackground': theme.ui['editor.selectionBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Color of the selected text for high contrast.
   */
  'editor.selectionForeground': theme.ui['editor.selectionForeground'],

  /**
   * Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.inactiveSelectionBackground': theme.ui['editor.inactiveSelectionBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.selectionHighlightBackground': theme.ui['editor.selectionHighlightBackground'] ?? theme.palette.state.info.bg,

  /**
   * Border color for regions with the same content as the selection.
   */
  'editor.selectionHighlightBorder': theme.ui['editor.selectionHighlightBorder'] ?? theme.colors.accent,

  /**
   * Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.wordHighlightBackground': theme.ui['editor.wordHighlightBackground'] ?? theme.palette.state.info.bg,

  /**
   * Border color of a symbol during read-access, for example when reading a variable.
   */
  'editor.wordHighlightBorder': theme.ui['editor.wordHighlightBorder'],

  /**
   * Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.wordHighlightStrongBackground': theme.ui['editor.wordHighlightStrongBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Border color of a symbol during write-access, for example when writing to a variable.
   */
  'editor.wordHighlightStrongBorder': theme.ui['editor.wordHighlightStrongBorder'],

  /**
   * Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.wordHighlightTextBackground': theme.ui['editor.wordHighlightTextBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Border color of a textual occurrence for a symbol.
   */
  'editor.wordHighlightTextBorder': theme.ui['editor.wordHighlightTextBorder'],

  /**
   * Color of the current search match.
   */
  'editor.findMatchBackground': theme.ui['editor.findMatchBackground'] ?? theme.palette.state.info.bg,

  /**
   * Text color of the current search match.
   */
  'editor.findMatchForeground': theme.ui['editor.findMatchForeground'],

  /**
   * Foreground color of the other search matches.
   */
  'editor.findMatchHighlightForeground': theme.ui['editor.findMatchHighlightForeground'],

  /**
   * Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.findMatchHighlightBackground': theme.ui['editor.findMatchHighlightBackground'] ?? theme.palette.state.info.bg,

  /**
   * Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.findRangeHighlightBackground': theme.ui['editor.findRangeHighlightBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Border color of the current search match.
   */
  'editor.findMatchBorder': theme.ui['editor.findMatchBorder'] ?? theme.colors.accent,

  /**
   * Border color of the other search matches.
   */
  'editor.findMatchHighlightBorder': theme.ui['editor.findMatchHighlightBorder'] ?? theme.colors.accent,

  /**
   * Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
   */
  'editor.findRangeHighlightBorder': theme.ui['editor.findRangeHighlightBorder'] ?? theme.colors.accent,

  /**
   * Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "`{x} results in {y} files`".
   */
  'search.resultsInfoForeground': theme.ui['search.resultsInfoForeground'] ?? theme.palette.fg.subtle,

  /**
   * Color of the editor's results.
   */
  'searchEditor.findMatchBackground': theme.ui['searchEditor.findMatchBackground'] ?? theme.palette.state.warning.bg,

  /**
   * Border color of the editor's results.
   */
  'searchEditor.findMatchBorder': theme.ui['searchEditor.findMatchBorder'] ?? theme.colors.orange,

  /**
   * Search editor text input box border.
   */
  'searchEditor.textInputBorder': theme.ui['searchEditor.textInputBorder'] ?? theme.palette.border.default,

  /**
   * Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.hoverHighlightBackground': theme.ui['editor.hoverHighlightBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Background color for the highlight of line at the cursor position.
   */
  'editor.lineHighlightBackground': theme.ui['editor.lineHighlightBackground'] ?? theme.palette.bg.hover,

  /**
   * Background color for the highlight of line at the cursor position when the editor is not focused.
   */
  'editor.inactiveLineHighlightBackground': theme.ui['editor.inactiveLineHighlightBackground'],

  /**
   * Background color for the border around the line at the cursor position.
   */
  'editor.lineHighlightBorder': theme.ui['editor.lineHighlightBorder'],

  /**
   * Border color used to highlight unicode characters.
   */
  'editorUnicodeHighlight.border': theme.ui['editorUnicodeHighlight.border'] ?? theme.colors.orange,

  /**
   * Background color used to highlight unicode characters.
   */
  'editorUnicodeHighlight.background': theme.ui['editorUnicodeHighlight.background'] ?? theme.palette.state.warning.bg,

  /**
   * Color of active links.
   */
  'editorLink.activeForeground': theme.ui['editorLink.activeForeground'] ?? theme.palette.fg.link,

  /**
   * Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.rangeHighlightBackground': theme.ui['editor.rangeHighlightBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Background color of the border around highlighted ranges.
   */
  'editor.rangeHighlightBorder': theme.ui['editor.rangeHighlightBorder'],

  /**
   * Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.symbolHighlightBackground': theme.ui['editor.symbolHighlightBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Background color of the border around highlighted symbols.
   */
  'editor.symbolHighlightBorder': theme.ui['editor.symbolHighlightBorder'],

  /**
   * Color of whitespace characters in the editor.
   */
  'editorWhitespace.foreground': theme.ui['editorWhitespace.foreground'] ?? theme.palette.border.default,

  /**
   * Color of the editor indentation guides.
   */
  'editorIndentGuide.background': theme.ui['editorIndentGuide.background'] ?? theme.palette.border.faint,

  /**
   * Color of the editor indentation guides (1).
   */
  'editorIndentGuide.background1': theme.ui['editorIndentGuide.background1'] ?? theme.palette.border.faint,

  /**
   * Color of the editor indentation guides (2).
   */
  'editorIndentGuide.background2': theme.ui['editorIndentGuide.background2'] ?? theme.palette.border.faint,

  /**
   * Color of the editor indentation guides (3).
   */
  'editorIndentGuide.background3': theme.ui['editorIndentGuide.background3'] ?? theme.palette.border.faint,

  /**
   * Color of the editor indentation guides (4).
   */
  'editorIndentGuide.background4': theme.ui['editorIndentGuide.background4'] ?? theme.palette.border.faint,

  /**
   * Color of the editor indentation guides (5).
   */
  'editorIndentGuide.background5': theme.ui['editorIndentGuide.background5'] ?? theme.palette.border.faint,

  /**
   * Color of the editor indentation guides (6).
   */
  'editorIndentGuide.background6': theme.ui['editorIndentGuide.background6'] ?? theme.palette.border.faint,

  /**
   * Color of the active editor indentation guide.
   */
  'editorIndentGuide.activeBackground': theme.ui['editorIndentGuide.activeBackground'] ?? theme.palette.border.default,

  /**
   * Color of the active editor indentation guides (1).
   */
  'editorIndentGuide.activeBackground1': theme.ui['editorIndentGuide.activeBackground1'] ?? theme.palette.border.default,

  /**
   * Color of the active editor indentation guides (2).
   */
  'editorIndentGuide.activeBackground2': theme.ui['editorIndentGuide.activeBackground2'] ?? theme.palette.border.default,

  /**
   * Color of the active editor indentation guides (3).
   */
  'editorIndentGuide.activeBackground3': theme.ui['editorIndentGuide.activeBackground3'] ?? theme.palette.border.default,

  /**
   * Color of the active editor indentation guides (4).
   */
  'editorIndentGuide.activeBackground4': theme.ui['editorIndentGuide.activeBackground4'] ?? theme.palette.border.default,

  /**
   * Color of the active editor indentation guides (5).
   */
  'editorIndentGuide.activeBackground5': theme.ui['editorIndentGuide.activeBackground5'] ?? theme.palette.border.default,

  /**
   * Color of the active editor indentation guides (6).
   */
  'editorIndentGuide.activeBackground6': theme.ui['editorIndentGuide.activeBackground6'] ?? theme.palette.border.default,

  /**
   * Background color of inline hints.
   */
  'editorInlayHint.background': theme.ui['editorInlayHint.background'] ?? theme.palette.bg.raised,

  /**
   * Foreground color of inline hints.
   */
  'editorInlayHint.foreground': theme.ui['editorInlayHint.foreground'] ?? theme.palette.fg.dim,

  /**
   * Foreground color of inline hints for types
   */
  'editorInlayHint.typeForeground': theme.ui['editorInlayHint.typeForeground'] ?? theme.palette.fg.dim,

  /**
   * Background color of inline hints for types
   */
  'editorInlayHint.typeBackground': theme.ui['editorInlayHint.typeBackground'] ?? theme.palette.bg.raised,

  /**
   * Foreground color of inline hints for parameters
   */
  'editorInlayHint.parameterForeground': theme.ui['editorInlayHint.parameterForeground'] ?? theme.palette.fg.dim,

  /**
   * Background color of inline hints for parameters
   */
  'editorInlayHint.parameterBackground': theme.ui['editorInlayHint.parameterBackground'] ?? theme.palette.bg.raised,

  /**
   * Color of the editor rulers.
   */
  'editorRuler.foreground': theme.ui['editorRuler.foreground'] ?? theme.palette.border.faint,

  /**
   * Background color when the editor is in linked editing mode.
   */
  'editor.linkedEditingBackground': theme.ui['editor.linkedEditingBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Foreground color of an editor CodeLens.
   */
  'editorCodeLens.foreground': theme.ui['editorCodeLens.foreground'] ?? theme.palette.fg.dim,

  /**
   * The color used for the lightbulb actions icon.
   */
  'editorLightBulb.foreground': theme.ui['editorLightBulb.foreground'] ?? theme.colors.yellow,

  /**
   * The color used for the lightbulb auto fix actions icon.
   */
  'editorLightBulbAutoFix.foreground': theme.ui['editorLightBulbAutoFix.foreground'] ?? theme.colors.blue,

  /**
   * The color used for the lightbulb AI icon.
   */
  'editorLightBulbAi.foreground': theme.ui['editorLightBulbAi.foreground'] ?? theme.colors.blue,

  /**
   * Background color behind matching brackets.
   */
  'editorBracketMatch.background': theme.ui['editorBracketMatch.background'] ?? theme.palette.bg.hoverAccent,

  /**
   * Color for matching brackets boxes.
   */
  'editorBracketMatch.border': theme.ui['editorBracketMatch.border'] ?? theme.palette.border.default,

  /**
   * Foreground color for matching brackets.
   */
  'editorBracketMatch.foreground': theme.ui['editorBracketMatch.foreground'],

  /**
   * Foreground color of brackets (1). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground1': theme.ui['editorBracketHighlight.foreground1'] ?? theme.colors.yellow,

  /**
   * Foreground color of brackets (2). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground2': theme.ui['editorBracketHighlight.foreground2'] ?? theme.colors.purple,

  /**
   * Foreground color of brackets (3). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground3': theme.ui['editorBracketHighlight.foreground3'] ?? theme.colors.blue,

  /**
   * Foreground color of brackets (4). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground4': theme.ui['editorBracketHighlight.foreground4'] ?? theme.colors.red,

  /**
   * Foreground color of brackets (5). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground5': theme.ui['editorBracketHighlight.foreground5'] ?? theme.colors.cyan,

  /**
   * Foreground color of brackets (6). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground6': theme.ui['editorBracketHighlight.foreground6'] ?? theme.colors.green,

  /**
   * Foreground color of unexpected brackets.
   */
  'editorBracketHighlight.unexpectedBracket.foreground': theme.ui['editorBracketHighlight.unexpectedBracket.foreground'] ?? theme.colors.red,

  /**
   * Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground1': theme.ui['editorBracketPairGuide.activeBackground1'] ?? theme.palette.border.faint,

  /**
   * Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground2': theme.ui['editorBracketPairGuide.activeBackground2'] ?? theme.palette.border.faint,

  /**
   * Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground3': theme.ui['editorBracketPairGuide.activeBackground3'] ?? theme.palette.border.faint,

  /**
   * Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground4': theme.ui['editorBracketPairGuide.activeBackground4'] ?? theme.palette.border.faint,

  /**
   * Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground5': theme.ui['editorBracketPairGuide.activeBackground5'] ?? theme.palette.border.faint,

  /**
   * Background color of active bracket pair guides (6). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground6': theme.ui['editorBracketPairGuide.activeBackground6'] ?? theme.palette.border.faint,

  /**
   * Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background1': theme.ui['editorBracketPairGuide.background1'],

  /**
   * Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background2': theme.ui['editorBracketPairGuide.background2'],

  /**
   * Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background3': theme.ui['editorBracketPairGuide.background3'],

  /**
   * Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background4': theme.ui['editorBracketPairGuide.background4'],

  /**
   * Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background5': theme.ui['editorBracketPairGuide.background5'],

  /**
   * Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background6': theme.ui['editorBracketPairGuide.background6'],

  /**
   * Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.foldBackground': theme.ui['editor.foldBackground'] ?? theme.palette.bg.raised,

  /**
   * Color of the collapsed text after the first line of a folded range.
   */
  'editor.foldPlaceholderForeground': theme.ui['editor.foldPlaceholderForeground'] ?? theme.palette.fg.muted,

  /**
   * Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.
   */
  'editorOverviewRuler.background': theme.ui['editorOverviewRuler.background'] ?? theme.palette.bg.editor,

  /**
   * Color of the overview ruler border.
   */
  'editorOverviewRuler.border': theme.ui['editorOverviewRuler.border'] ?? theme.palette.border.faint,

  /**
   * Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.findMatchForeground': theme.ui['editorOverviewRuler.findMatchForeground'] ?? theme.colors.orange,

  /**
   * Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.rangeHighlightForeground': theme.ui['editorOverviewRuler.rangeHighlightForeground'] ?? theme.colors.blue,

  /**
   * Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.selectionHighlightForeground': theme.ui['editorOverviewRuler.selectionHighlightForeground'] ?? theme.palette.border.default,

  /**
   * Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.wordHighlightForeground': theme.ui['editorOverviewRuler.wordHighlightForeground'] ?? theme.palette.border.default,

  /**
   * Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.wordHighlightStrongForeground': theme.ui['editorOverviewRuler.wordHighlightStrongForeground'] ?? theme.colors.blue,

  /**
   * Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.wordHighlightTextForeground': theme.ui['editorOverviewRuler.wordHighlightTextForeground'] ?? theme.palette.border.default,

  /**
   * Overview ruler marker color for modified content.
   */
  'editorOverviewRuler.modifiedForeground': theme.ui['editorOverviewRuler.modifiedForeground'] ?? theme.colors.blue,

  /**
   * Overview ruler marker color for added content.
   */
  'editorOverviewRuler.addedForeground': theme.ui['editorOverviewRuler.addedForeground'] ?? theme.colors.green,

  /**
   * Overview ruler marker color for deleted content.
   */
  'editorOverviewRuler.deletedForeground': theme.ui['editorOverviewRuler.deletedForeground'] ?? theme.colors.red,

  /**
   * Overview ruler marker color for errors.
   */
  'editorOverviewRuler.errorForeground': theme.ui['editorOverviewRuler.errorForeground'] ?? theme.colors.red,

  /**
   * Overview ruler marker color for warnings.
   */
  'editorOverviewRuler.warningForeground': theme.ui['editorOverviewRuler.warningForeground'] ?? theme.colors.orange,

  /**
   * Overview ruler marker color for infos.
   */
  'editorOverviewRuler.infoForeground': theme.ui['editorOverviewRuler.infoForeground'] ?? theme.colors.blue,

  /**
   * Overview ruler marker color for matching brackets.
   */
  'editorOverviewRuler.bracketMatchForeground': theme.ui['editorOverviewRuler.bracketMatchForeground'] ?? theme.palette.border.default,

  /**
   * Overview ruler marker color for inline chat inserted content.
   */
  'editorOverviewRuler.inlineChatInserted': theme.ui['editorOverviewRuler.inlineChatInserted'] ?? theme.colors.green,

  /**
   * Overview ruler marker color for inline chat removed content.
   */
  'editorOverviewRuler.inlineChatRemoved': theme.ui['editorOverviewRuler.inlineChatRemoved'] ?? theme.colors.red,

  /**
   * Editor overview ruler decoration color for comment threads with draft comments. This color should be opaque.
   */
  'editorOverviewRuler.commentDraftForeground': theme.ui['editorOverviewRuler.commentDraftForeground'] ?? theme.palette.fg.muted,

  /**
   * Foreground color of error squiggles in the editor.
   */
  'editorError.foreground': theme.ui['editorError.foreground'] ?? theme.palette.state.error.fg,

  /**
   * Border color of error boxes in the editor.
   */
  'editorError.border': theme.ui['editorError.border'],

  /**
   * Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorError.background': theme.ui['editorError.background'] ?? theme.palette.state.error.bg,

  /**
   * Foreground color of warning squiggles in the editor.
   */
  'editorWarning.foreground': theme.ui['editorWarning.foreground'] ?? theme.palette.state.warning.fg,

  /**
   * Border color of warning boxes in the editor.
   */
  'editorWarning.border': theme.ui['editorWarning.border'],

  /**
   * Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorWarning.background': theme.ui['editorWarning.background'] ?? theme.palette.state.warning.bg,

  /**
   * Foreground color of info squiggles in the editor.
   */
  'editorInfo.foreground': theme.ui['editorInfo.foreground'] ?? theme.palette.state.info.fg,

  /**
   * Border color of info boxes in the editor.
   */
  'editorInfo.border': theme.ui['editorInfo.border'],

  /**
   * Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorInfo.background': theme.ui['editorInfo.background'] ?? theme.palette.state.info.bg,

  /**
   * Foreground color of hints in the editor.
   */
  'editorHint.foreground': theme.ui['editorHint.foreground'] ?? theme.palette.fg.muted,

  /**
   * Border color of hint boxes in the editor.
   */
  'editorHint.border': theme.ui['editorHint.border'],

  /**
   * The color used for the problems error icon.
   */
  'problemsErrorIcon.foreground': theme.ui['problemsErrorIcon.foreground'] ?? theme.palette.state.error.fg,

  /**
   * The color used for the problems warning icon.
   */
  'problemsWarningIcon.foreground': theme.ui['problemsWarningIcon.foreground'] ?? theme.palette.state.warning.fg,

  /**
   * The color used for the problems info icon.
   */
  'problemsInfoIcon.foreground': theme.ui['problemsInfoIcon.foreground'] ?? theme.palette.state.info.fg,

  /**
   * Border color of unnecessary (unused) source code in the editor.
   */
  'editorUnnecessaryCode.border': theme.ui['editorUnnecessaryCode.border'],

  /**
   * Opacity of unnecessary (unused) source code in the editor. For example, `"#000000c0"` will render the code with 75% opacity. For high contrast themes, use the `"editorUnnecessaryCode.border"` theme color to underline unnecessary code instead of fading it out.
   */
  'editorUnnecessaryCode.opacity': theme.ui['editorUnnecessaryCode.opacity'] ?? '#00000080',

  /**
   * Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
   */
  'editorGutter.background': theme.ui['editorGutter.background'] ?? theme.palette.bg.editor,

  /**
   * Editor gutter background color for lines that are modified.
   */
  'editorGutter.modifiedBackground': theme.ui['editorGutter.modifiedBackground'] ?? theme.colors.blue,

  /**
   * Editor gutter secondary background color for lines that are modified.
   */
  'editorGutter.modifiedSecondaryBackground': theme.ui['editorGutter.modifiedSecondaryBackground'] ?? theme.colors.cyan,

  /**
   * Editor gutter background color for lines that are added.
   */
  'editorGutter.addedBackground': theme.ui['editorGutter.addedBackground'] ?? theme.colors.green,

  /**
   * Editor gutter secondary background color for lines that are added.
   */
  'editorGutter.addedSecondaryBackground': theme.ui['editorGutter.addedSecondaryBackground'] ?? theme.colors.green,

  /**
   * Editor gutter background color for lines that are deleted.
   */
  'editorGutter.deletedBackground': theme.ui['editorGutter.deletedBackground'] ?? theme.colors.red,

  /**
   * Editor gutter secondary background color for lines that are deleted.
   */
  'editorGutter.deletedSecondaryBackground': theme.ui['editorGutter.deletedSecondaryBackground'] ?? theme.colors.red,

  /**
   * Editor gutter decoration color for commenting ranges.
   */
  'editorGutter.commentRangeForeground': theme.ui['editorGutter.commentRangeForeground'] ?? theme.palette.fg.muted,

  /**
   * Editor gutter decoration color for commenting glyphs.
   */
  'editorGutter.commentGlyphForeground': theme.ui['editorGutter.commentGlyphForeground'] ?? theme.palette.fg.subtle,

  /**
   * Editor gutter decoration color for commenting glyphs for unresolved comment threads.
   */
  'editorGutter.commentUnresolvedGlyphForeground': theme.ui['editorGutter.commentUnresolvedGlyphForeground'] ?? theme.palette.fg.default,

  /**
   * Color of the folding control in the editor gutter.
   */
  'editorGutter.foldingControlForeground': theme.ui['editorGutter.foldingControlForeground'] ?? theme.palette.fg.muted,

  /**
   * Editor gutter decoration color for gutter item glyphs.
   */
  'editorGutter.itemGlyphForeground': theme.ui['editorGutter.itemGlyphForeground'] ?? theme.palette.fg.subtle,

  /**
   * Editor gutter decoration color for gutter item background. This color should be opaque.
   */
  'editorGutter.itemBackground': theme.ui['editorGutter.itemBackground'] ?? theme.palette.bg.workbench,

  /**
   * Editor gutter decoration color for commenting glyphs for comment threads with draft comments.
   */
  'editorGutter.commentDraftGlyphForeground': theme.ui['editorGutter.commentDraftGlyphForeground'] ?? theme.palette.fg.subtle,

  /**
   * Color of borders and arrow for resolved comments.
   */
  'editorCommentsWidget.resolvedBorder': theme.ui['editorCommentsWidget.resolvedBorder'] ?? theme.palette.border.default,

  /**
   * Color of borders and arrow for unresolved comments.
   */
  'editorCommentsWidget.unresolvedBorder': theme.ui['editorCommentsWidget.unresolvedBorder'] ?? theme.palette.border.focus,

  /**
   * Color of background for comment ranges.
   */
  'editorCommentsWidget.rangeBackground': theme.ui['editorCommentsWidget.rangeBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Color of background for currently selected or hovered comment range.
   */
  'editorCommentsWidget.rangeActiveBackground': theme.ui['editorCommentsWidget.rangeActiveBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Background color for comment reply input box.
   */
  'editorCommentsWidget.replyInputBackground': theme.ui['editorCommentsWidget.replyInputBackground'] ?? theme.palette.input.bg,

  /**
   * Border color for the primary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.primaryBorder': theme.ui['inlineEdit.gutterIndicator.primaryBorder'] ?? theme.palette.border.focus,

  /**
   * Foreground color for the primary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.primaryForeground': theme.ui['inlineEdit.gutterIndicator.primaryForeground'] ?? theme.palette.fg.default,

  /**
   * Background color for the primary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.primaryBackground': theme.ui['inlineEdit.gutterIndicator.primaryBackground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Border color for the secondary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.secondaryBorder': theme.ui['inlineEdit.gutterIndicator.secondaryBorder'] ?? theme.palette.border.default,

  /**
   * Foreground color for the secondary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.secondaryForeground': theme.ui['inlineEdit.gutterIndicator.secondaryForeground'] ?? theme.palette.fg.subtle,

  /**
   * Background color for the secondary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.secondaryBackground': theme.ui['inlineEdit.gutterIndicator.secondaryBackground'] ?? theme.palette.bg.workbench,

  /**
   * Border color for the successful inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.successfulBorder': theme.ui['inlineEdit.gutterIndicator.successfulBorder'] ?? theme.palette.state.success.border,

  /**
   * Foreground color for the successful inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.successfulForeground': theme.ui['inlineEdit.gutterIndicator.successfulForeground'] ?? theme.palette.state.success.fg,

  /**
   * Background color for the successful inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.successfulBackground': theme.ui['inlineEdit.gutterIndicator.successfulBackground'] ?? theme.palette.state.success.bg,

  /**
   * Background color for the inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.background': theme.ui['inlineEdit.gutterIndicator.background'] ?? theme.palette.bg.workbench,

  /**
   * Background color for the original text in inline edits.
   */
  'inlineEdit.originalBackground': theme.ui['inlineEdit.originalBackground'] ?? theme.palette.diff.removed,

  /**
   * Background color for the modified text in inline edits.
   */
  'inlineEdit.modifiedBackground': theme.ui['inlineEdit.modifiedBackground'] ?? theme.palette.diff.added,

  /**
   * Background color for the changed lines in the original text of inline edits.
   */
  'inlineEdit.originalChangedLineBackground': theme.ui['inlineEdit.originalChangedLineBackground'] ?? theme.palette.diff.removed,

  /**
   * Overlay color for the changed text in the original text of inline edits.
   */
  'inlineEdit.originalChangedTextBackground': theme.ui['inlineEdit.originalChangedTextBackground'] ?? theme.palette.diff.removed,

  /**
   * Background color for the changed lines in the modified text of inline edits.
   */
  'inlineEdit.modifiedChangedLineBackground': theme.ui['inlineEdit.modifiedChangedLineBackground'] ?? theme.palette.diff.added,

  /**
   * Overlay color for the changed text in the modified text of inline edits.
   */
  'inlineEdit.modifiedChangedTextBackground': theme.ui['inlineEdit.modifiedChangedTextBackground'] ?? theme.palette.diff.added,

  /**
   * Border color for the original text in inline edits.
   */
  'inlineEdit.originalBorder': theme.ui['inlineEdit.originalBorder'] ?? theme.palette.state.error.border,

  /**
   * Border color for the modified text in inline edits.
   */
  'inlineEdit.modifiedBorder': theme.ui['inlineEdit.modifiedBorder'] ?? theme.palette.state.success.border,

  /**
   * Modified border color for the inline edits widget when tab will accept it.
   */
  'inlineEdit.tabWillAcceptModifiedBorder': theme.ui['inlineEdit.tabWillAcceptModifiedBorder'] ?? theme.palette.border.focus,

  /**
   * Original border color for the inline edits widget over the original text when tab will accept it.
   */
  'inlineEdit.tabWillAcceptOriginalBorder': theme.ui['inlineEdit.tabWillAcceptOriginalBorder'] ?? theme.palette.border.focus,

});

export type EditorKey = keyof ReturnType<typeof editor>;
