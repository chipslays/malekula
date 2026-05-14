import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const listsAndTrees = (theme: Theme) => ({

  /**
   * List/Tree background color for the selected item when the list/tree is active.
   */
  'list.activeSelectionBackground': theme.ui['list.activeSelectionBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * List/Tree foreground color for the selected item when the list/tree is active.
   */
  'list.activeSelectionForeground': theme.ui['list.activeSelectionForeground'] ?? theme.palette.fg.default,

  /**
   * List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.activeSelectionIconForeground': theme.ui['list.activeSelectionIconForeground'] ?? theme.palette.fg.default,

  /**
   * List/Tree drag and drop background when moving items around using the mouse.
   */
  'list.dropBackground': theme.ui['list.dropBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * List/Tree background color for the focused item when the list/tree is active.
   */
  'list.focusBackground': theme.ui['list.focusBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.focusForeground': theme.ui['list.focusForeground'] ?? theme.palette.fg.default,

  /**
   * List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
   */
  'list.focusHighlightForeground': theme.ui['list.focusHighlightForeground'] ?? theme.palette.fg.link,

  /**
   * List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.focusOutline': theme.ui['list.focusOutline'] ?? theme.palette.border.default,

  /**
   * List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.focusAndSelectionOutline': theme.ui['list.focusAndSelectionOutline'] ?? theme.palette.border.default,

  /**
   * List/Tree foreground color of the match highlights when searching inside the list/tree.
   */
  'list.highlightForeground': theme.ui['list.highlightForeground'] ?? theme.palette.fg.link,

  /**
   * List/Tree background when hovering over items using the mouse.
   */
  'list.hoverBackground': theme.ui['list.hoverBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * List/Tree foreground when hovering over items using the mouse.
   */
  'list.hoverForeground': theme.ui['list.hoverForeground'] ?? theme.palette.fg.default,

  /**
   * List/Tree background color for the selected item when the list/tree is inactive.
   */
  'list.inactiveSelectionBackground': theme.ui['list.inactiveSelectionBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.inactiveSelectionForeground': theme.ui['list.inactiveSelectionForeground'] ?? theme.palette.fg.subtle,

  /**
   * List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.inactiveSelectionIconForeground': theme.ui['list.inactiveSelectionIconForeground'] ?? theme.palette.fg.subtle,

  /**
   * List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
   */
  'list.inactiveFocusBackground': theme.ui['list.inactiveFocusBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.inactiveFocusOutline': theme.ui['list.inactiveFocusOutline'] ?? theme.palette.border.default,

  /**
   * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
   */
  'list.invalidItemForeground': theme.ui['list.invalidItemForeground'] ?? theme.palette.state.error.fg,

  /**
   * Foreground color of list items containing errors.
   */
  'list.errorForeground': theme.ui['list.errorForeground'] ?? theme.palette.state.error.fg,

  /**
   * Foreground color of list items containing warnings.
   */
  'list.warningForeground': theme.ui['list.warningForeground'] ?? theme.palette.state.warning.fg,

  /**
   * List/Tree Filter background color of typed text when searching inside the list/tree.
   */
  'listFilterWidget.background': theme.ui['listFilterWidget.background'] ?? theme.palette.bg.overlay,

  /**
   * List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
   */
  'listFilterWidget.outline': theme.ui['listFilterWidget.outline'] ?? theme.palette.border.focus,

  /**
   * List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
   */
  'listFilterWidget.noMatchesOutline': theme.ui['listFilterWidget.noMatchesOutline'] ?? theme.palette.state.error.border,

  /**
   * Shadow color of the type filter widget in lists and tree.
   */
  'listFilterWidget.shadow': theme.ui['listFilterWidget.shadow'] ?? theme.palette.shadow.sm,

  /**
   * Background color of the filtered matches in lists and trees.
   */
  'list.filterMatchBackground': theme.ui['list.filterMatchBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Border color of the filtered matches in lists and trees.
   */
  'list.filterMatchBorder': theme.ui['list.filterMatchBorder'] ?? theme.palette.border.focus,

  /**
   * List/Tree foreground color for items that are deemphasized.
   */
  'list.deemphasizedForeground': theme.ui['list.deemphasizedForeground'] ?? theme.palette.fg.muted,

  /**
   * List/Tree drag and drop border color when moving items between items when using the mouse.
   */
  'list.dropBetweenBackground': theme.ui['list.dropBetweenBackground'] ?? theme.palette.border.focus,

  /**
   * Tree Widget's stroke color for indent guides.
   */
  'tree.indentGuidesStroke': theme.ui['tree.indentGuidesStroke'] ?? theme.palette.border.faint,

  /**
   * Tree stroke color for the indentation guides that are not active.
   */
  'tree.inactiveIndentGuidesStroke': theme.ui['tree.inactiveIndentGuidesStroke'] ?? theme.palette.border.faint,

  /**
   * Tree stroke color for the indentation guides.
   */
  'tree.tableColumnsBorder': theme.ui['tree.tableColumnsBorder'] ?? theme.palette.border.faint,

  /**
   * Background color for odd table rows.
   */
  'tree.tableOddRowsBackground': theme.ui['tree.tableOddRowsBackground'] ?? theme.palette.bg.workbench,

});

export type ListsAndTreesKey = keyof ReturnType<typeof listsAndTrees>;
