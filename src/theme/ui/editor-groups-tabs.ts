import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const editorGroupsTabs = (theme: Theme) => ({

  /**
   * Color to separate multiple editor groups from each other.
   */
  'editorGroup.border': theme.ui['editorGroup.border'] ?? theme.palette.border.faint,

  /**
   * Background color when dragging editors around.
   */
  'editorGroup.dropBackground': theme.ui['editorGroup.dropBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Background color of the editor group title header when using single Tab (set `"workbench.editor.showTabs": "single"`).
   */
  'editorGroupHeader.noTabsBackground': theme.ui['editorGroupHeader.noTabsBackground'] ?? theme.palette.bg.chrome,

  /**
   * Background color of the Tabs container.
   */
  'editorGroupHeader.tabsBackground': theme.ui['editorGroupHeader.tabsBackground'] ?? theme.palette.bg.chrome,

  /**
   * Border color below the editor tabs control when tabs are enabled.
   */
  'editorGroupHeader.tabsBorder': theme.ui['editorGroupHeader.tabsBorder'] ?? theme.palette.border.faint,

  /**
   * Border color between editor group header and editor (below breadcrumbs if enabled).
   */
  'editorGroupHeader.border': theme.ui['editorGroupHeader.border'] ?? theme.palette.border.faint,

  /**
   * Background color of an empty editor group.
   */
  'editorGroup.emptyBackground': theme.ui['editorGroup.emptyBackground'] ?? theme.palette.bg.editor,

  /**
   * Border color of an empty editor group that is focused.
   */
  'editorGroup.focusedEmptyBorder': theme.ui['editorGroup.focusedEmptyBorder'] ?? theme.palette.border.focus,

  /**
   * Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   */
  'editorGroup.dropIntoPromptForeground': theme.ui['editorGroup.dropIntoPromptForeground'] ?? theme.palette.fg.default,

  /**
   * Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   */
  'editorGroup.dropIntoPromptBackground': theme.ui['editorGroup.dropIntoPromptBackground'] ?? theme.palette.bg.overlay,

  /**
   * Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   */
  'editorGroup.dropIntoPromptBorder': theme.ui['editorGroup.dropIntoPromptBorder'] ?? theme.palette.border.default,

  /**
   * Active Tab background color in an active group.
   */
  'tab.activeBackground': theme.ui['tab.activeBackground'] ?? theme.palette.bg.editor,

  /**
   * Active Tab background color in an inactive editor group.
   */
  'tab.unfocusedActiveBackground': theme.ui['tab.unfocusedActiveBackground'] ?? theme.palette.bg.editor,

  /**
   * Active Tab foreground color in an active group.
   */
  'tab.activeForeground': theme.ui['tab.activeForeground'] ?? theme.palette.fg.default,

  /**
   * Border to separate Tabs from each other.
   */
  'tab.border': theme.ui['tab.border'] ?? theme.palette.border.faint,

  /**
   * Bottom border for the active tab.
   */
  'tab.activeBorder': theme.ui['tab.activeBorder'],

  /**
   * Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.selectedBorderTop': theme.ui['tab.selectedBorderTop'] ?? theme.palette.border.focus,

  /**
   * Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.selectedBackground': theme.ui['tab.selectedBackground'] ?? theme.palette.bg.editor,

  /**
   * Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.selectedForeground': theme.ui['tab.selectedForeground'] ?? theme.palette.fg.default,

  /**
   * Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.dragAndDropBorder': theme.ui['tab.dragAndDropBorder'] ?? theme.palette.border.focus,

  /**
   * Bottom border for the active tab in an inactive editor group.
   */
  'tab.unfocusedActiveBorder': theme.ui['tab.unfocusedActiveBorder'],

  /**
   * Top border for the active tab.
   */
  'tab.activeBorderTop': theme.ui['tab.activeBorderTop'] ?? theme.palette.border.focus,

  /**
   * Top border for the active tab in an inactive editor group
   */
  'tab.unfocusedActiveBorderTop': theme.ui['tab.unfocusedActiveBorderTop'] ?? theme.palette.border.default,

  /**
   * Border on the right of the last pinned editor to separate from unpinned editors.
   */
  'tab.lastPinnedBorder': theme.ui['tab.lastPinnedBorder'] ?? theme.palette.border.default,

  /**
   * Inactive Tab background color.
   */
  'tab.inactiveBackground': theme.ui['tab.inactiveBackground'] ?? theme.palette.bg.chrome,

  /**
   * Inactive Tab background color in an unfocused group
   */
  'tab.unfocusedInactiveBackground': theme.ui['tab.unfocusedInactiveBackground'] ?? theme.palette.bg.workbench,

  /**
   * Inactive Tab foreground color in an active group.
   */
  'tab.inactiveForeground': theme.ui['tab.inactiveForeground'] ?? theme.palette.fg.dim,

  /**
   * Active tab foreground color in an inactive editor group.
   */
  'tab.unfocusedActiveForeground': theme.ui['tab.unfocusedActiveForeground'] ?? theme.palette.fg.dim,

  /**
   * Inactive tab foreground color in an inactive editor group.
   */
  'tab.unfocusedInactiveForeground': theme.ui['tab.unfocusedInactiveForeground'] ?? theme.palette.fg.muted,

  /**
   * Tab background color when hovering
   */
  'tab.hoverBackground': theme.ui['tab.hoverBackground'] ?? theme.palette.bg.hover,

  /**
   * Tab background color in an unfocused group when hovering
   */
  'tab.unfocusedHoverBackground': theme.ui['tab.unfocusedHoverBackground'] ?? theme.palette.bg.hover,

  /**
   * Tab foreground color when hovering
   */
  'tab.hoverForeground': theme.ui['tab.hoverForeground'] ?? theme.palette.fg.default,

  /**
   * Tab foreground color in an unfocused group when hovering
   */
  'tab.unfocusedHoverForeground': theme.ui['tab.unfocusedHoverForeground'] ?? theme.palette.fg.subtle,

  /**
   * Border to highlight tabs when hovering
   */
  'tab.hoverBorder': theme.ui['tab.hoverBorder'],

  /**
   * Border to highlight tabs in an unfocused group when hovering
   */
  'tab.unfocusedHoverBorder': theme.ui['tab.unfocusedHoverBorder'],

  /**
   * Border on the top of modified (dirty) active tabs in an active group.
   */
  'tab.activeModifiedBorder': theme.ui['tab.activeModifiedBorder'] ?? theme.colors.blue,

  /**
   * Border on the top of modified (dirty) inactive tabs in an active group.
   */
  'tab.inactiveModifiedBorder': theme.ui['tab.inactiveModifiedBorder'] ?? theme.palette.border.default,

  /**
   * Border on the top of modified (dirty) active tabs in an unfocused group.
   */
  'tab.unfocusedActiveModifiedBorder': theme.ui['tab.unfocusedActiveModifiedBorder'] ?? theme.palette.border.default,

  /**
   * Border on the top of modified (dirty) inactive tabs in an unfocused group.
   */
  'tab.unfocusedInactiveModifiedBorder': theme.ui['tab.unfocusedInactiveModifiedBorder'] ?? theme.palette.border.faint,

  /**
   * Background color of the editor pane visible on the left and right side of the centered editor layout.
   */
  'editorPane.background': theme.ui['editorPane.background'] ?? theme.palette.bg.editor,

  /**
   * Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
   */
  'sideBySideEditor.horizontalBorder': theme.ui['sideBySideEditor.horizontalBorder'] ?? theme.palette.border.faint,

  /**
   * Color to separate two editors from each other when shown side by side in an editor group from left to right.
   */
  'sideBySideEditor.verticalBorder': theme.ui['sideBySideEditor.verticalBorder'] ?? theme.palette.border.faint,

});

export type EditorGroupsTabsKey = keyof ReturnType<typeof editorGroupsTabs>;
