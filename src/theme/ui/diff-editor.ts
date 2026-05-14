import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const diffEditor = (theme: Theme) => ({

  /**
   * Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.insertedTextBackground': theme.ui['diffEditor.insertedTextBackground'] ?? theme.palette.diff.added,

  /**
   * Outline color for the text that got inserted.
   */
  'diffEditor.insertedTextBorder': theme.ui['diffEditor.insertedTextBorder'] ?? theme.colors.transparent,

  /**
   * Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.removedTextBackground': theme.ui['diffEditor.removedTextBackground'] ?? theme.palette.diff.removed,

  /**
   * Outline color for text that got removed.
   */
  'diffEditor.removedTextBorder': theme.ui['diffEditor.removedTextBorder'] ?? theme.colors.transparent,

  /**
   * Border color between the two text editors.
   */
  'diffEditor.border': theme.ui['diffEditor.border'] ?? theme.palette.border.default,

  /**
   * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
   */
  'diffEditor.diagonalFill': theme.ui['diffEditor.diagonalFill'] ?? theme.palette.border.faint,

  /**
   * Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.insertedLineBackground': theme.ui['diffEditor.insertedLineBackground'] ?? theme.palette.diff.added,

  /**
   * Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.removedLineBackground': theme.ui['diffEditor.removedLineBackground'] ?? theme.palette.diff.removed,

  /**
   * Background color for the margin where lines got inserted.
   */
  'diffEditorGutter.insertedLineBackground': theme.ui['diffEditorGutter.insertedLineBackground'] ?? theme.palette.diff.added,

  /**
   * Background color for the margin where lines got removed.
   */
  'diffEditorGutter.removedLineBackground': theme.ui['diffEditorGutter.removedLineBackground'] ?? theme.palette.diff.removed,

  /**
   * Diff overview ruler foreground for inserted content.
   */
  'diffEditorOverview.insertedForeground': theme.ui['diffEditorOverview.insertedForeground'] ?? theme.colors.green,

  /**
   * Diff overview ruler foreground for removed content.
   */
  'diffEditorOverview.removedForeground': theme.ui['diffEditorOverview.removedForeground'] ?? theme.colors.red,

  /**
   * The color of unchanged blocks in diff editor.
   */
  'diffEditor.unchangedRegionBackground': theme.ui['diffEditor.unchangedRegionBackground'] ?? theme.palette.bg.workbench,

  /**
   * The foreground color of unchanged blocks in the diff editor.
   */
  'diffEditor.unchangedRegionForeground': theme.ui['diffEditor.unchangedRegionForeground'] ?? theme.palette.fg.dim,

  /**
   * The color of the shadow around unchanged region widgets.
   */
  'diffEditor.unchangedRegionShadow': theme.ui['diffEditor.unchangedRegionShadow'] ?? theme.palette.shadow.sm,

  /**
   * The background color of unchanged code in the diff editor.
   */
  'diffEditor.unchangedCodeBackground': theme.ui['diffEditor.unchangedCodeBackground'] ?? theme.palette.bg.base,

  /**
   * The border color for text that got moved in the diff editor.
   */
  'diffEditor.move.border': theme.ui['diffEditor.move.border'] ?? theme.palette.border.default,

  /**
   * The active border color for text that got moved in the diff editor.
   */
  'diffEditor.moveActive.border': theme.ui['diffEditor.moveActive.border'] ?? theme.palette.border.focus,

  /**
   * The background color of the diff editor's header
   */
  'multiDiffEditor.headerBackground': theme.ui['multiDiffEditor.headerBackground'] ?? theme.palette.bg.workbench,

  /**
   * The background color of the multi file diff editor
   */
  'multiDiffEditor.background': theme.ui['multiDiffEditor.background'] ?? theme.palette.bg.editor,

  /**
   * The border color of the multi file diff editor
   */
  'multiDiffEditor.border': theme.ui['multiDiffEditor.border'] ?? theme.palette.border.faint,

});

export type DiffEditorKey = keyof ReturnType<typeof diffEditor>;
