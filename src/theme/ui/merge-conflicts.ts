import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const mergeConflicts = (theme: Theme) => ({

  /**
   * Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.currentHeaderBackground': theme.ui['merge.currentHeaderBackground'] ?? theme.palette.diff.modifiedHeader,

  /**
   * Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.currentContentBackground': theme.ui['merge.currentContentBackground'] ?? theme.palette.diff.modified,

  /**
   * Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.incomingHeaderBackground': theme.ui['merge.incomingHeaderBackground'] ?? theme.palette.diff.addedHeader,

  /**
   * Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.incomingContentBackground': theme.ui['merge.incomingContentBackground'] ?? theme.palette.diff.added,

  /**
   * Border color on headers and the splitter in inline merge conflicts.
   */
  'merge.border': theme.ui['merge.border'] ?? theme.palette.border.default,

  /**
   * Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.commonContentBackground': theme.ui['merge.commonContentBackground'] ?? theme.palette.diff.common,

  /**
   * Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.commonHeaderBackground': theme.ui['merge.commonHeaderBackground'] ?? theme.palette.diff.commonHeader,

  /**
   * Current overview ruler foreground for inline merge conflicts.
   */
  'editorOverviewRuler.currentContentForeground': theme.ui['editorOverviewRuler.currentContentForeground'] ?? theme.colors.blue,

  /**
   * Incoming overview ruler foreground for inline merge conflicts.
   */
  'editorOverviewRuler.incomingContentForeground': theme.ui['editorOverviewRuler.incomingContentForeground'] ?? theme.colors.green,

  /**
   * Common ancestor overview ruler foreground for inline merge conflicts.
   */
  'editorOverviewRuler.commonContentForeground': theme.ui['editorOverviewRuler.commonContentForeground'] ?? theme.palette.fg.muted,

  /**
   * Editor overview ruler decoration color for resolved comments. This color should be opaque.
   */
  'editorOverviewRuler.commentForeground': theme.ui['editorOverviewRuler.commentForeground'] ?? theme.palette.fg.subtle,

  /**
   * Editor overview ruler decoration color for unresolved comments. This color should be opaque.
   */
  'editorOverviewRuler.commentUnresolvedForeground': theme.ui['editorOverviewRuler.commentUnresolvedForeground'] ?? theme.colors.blue,

  /**
   * The background color for changes.
   */
  'mergeEditor.change.background': theme.ui['mergeEditor.change.background'] ?? theme.palette.state.info.bg,

  /**
   * The background color for word changes.
   */
  'mergeEditor.change.word.background': theme.ui['mergeEditor.change.word.background'] ?? theme.palette.bg.selectedAccent,

  /**
   * The border color of unhandled unfocused conflicts.
   */
  'mergeEditor.conflict.unhandledUnfocused.border': theme.ui['mergeEditor.conflict.unhandledUnfocused.border'] ?? theme.palette.border.default,

  /**
   * The border color of unhandled focused conflicts.
   */
  'mergeEditor.conflict.unhandledFocused.border': theme.ui['mergeEditor.conflict.unhandledFocused.border'] ?? theme.palette.border.focus,

  /**
   * The border color of handled unfocused conflicts.
   */
  'mergeEditor.conflict.handledUnfocused.border': theme.ui['mergeEditor.conflict.handledUnfocused.border'] ?? theme.palette.border.faint,

  /**
   * The border color of handled focused conflicts.
   */
  'mergeEditor.conflict.handledFocused.border': theme.ui['mergeEditor.conflict.handledFocused.border'] ?? theme.palette.border.default,

  /**
   * The foreground color for changes in input 1.
   */
  'mergeEditor.conflict.handled.minimapOverViewRuler': theme.ui['mergeEditor.conflict.handled.minimapOverViewRuler'] ?? theme.colors.green,

  /**
   * The foreground color for changes in input 1.
   */
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': theme.ui['mergeEditor.conflict.unhandled.minimapOverViewRuler'] ?? theme.colors.orange,

  /**
   * The background of the "Conflicting Lines" text.
   */
  'mergeEditor.conflictingLines.background': theme.ui['mergeEditor.conflictingLines.background'] ?? theme.palette.state.warning.bg,

  /**
   * The background color for changes in base.
   */
  'mergeEditor.changeBase.background': theme.ui['mergeEditor.changeBase.background'] ?? theme.palette.bg.workbench,

  /**
   * The background color for word changes in base.
   */
  'mergeEditor.changeBase.word.background': theme.ui['mergeEditor.changeBase.word.background'] ?? theme.palette.bg.hoverAccent,

  /**
   * The background color of decorations in input 1.
   */
  'mergeEditor.conflict.input1.background': theme.ui['mergeEditor.conflict.input1.background'] ?? theme.palette.state.info.bg,

  /**
   * The background color of decorations in input 2.
   */
  'mergeEditor.conflict.input2.background': theme.ui['mergeEditor.conflict.input2.background'] ?? theme.palette.diff.added,

});

export type MergeConflictsKey = keyof ReturnType<typeof mergeConflicts>;
