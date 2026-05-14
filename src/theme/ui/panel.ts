import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const panel = (theme: Theme) => ({

  /**
   * Panel background color.
   */
  'panel.background': theme.ui['panel.background'] ?? theme.palette.bg.workbench,

  /**
   * Panel border color to separate the panel from the editor.
   */
  'panel.border': theme.ui['panel.border'] ?? theme.palette.border.faint,

  /**
   * Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panel.dropBorder': theme.ui['panel.dropBorder'] ?? theme.palette.border.focus,

  /**
   * Border color for the active panel title.
   */
  'panelTitle.activeBorder': theme.ui['panelTitle.activeBorder'] ?? theme.palette.border.focus,

  /**
   * Title color for the active panel.
   */
  'panelTitle.activeForeground': theme.ui['panelTitle.activeForeground'] ?? theme.palette.fg.default,

  /**
   * Title color for the inactive panel.
   */
  'panelTitle.inactiveForeground': theme.ui['panelTitle.inactiveForeground'] ?? theme.palette.fg.dim,

  /**
   * Panel title border color on the bottom, separating the title from the views. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelTitle.border': theme.ui['panelTitle.border'] ?? theme.palette.border.faint,

  /**
   * Panel title badge background color. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelTitleBadge.background': theme.ui['panelTitleBadge.background'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Panel title badge foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelTitleBadge.foreground': theme.ui['panelTitleBadge.foreground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Input box border for inputs in the panel.
   */
  'panelInput.border': theme.ui['panelInput.border'] ?? theme.palette.border.default,

  /**
   * Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelSection.border': theme.ui['panelSection.border'] ?? theme.palette.border.faint,

  /**
   * Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelSection.dropBackground': theme.ui['panelSection.dropBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelSectionHeader.background': theme.ui['panelSectionHeader.background'] ?? theme.palette.bg.workbench,

  /**
   * Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelSectionHeader.foreground': theme.ui['panelSectionHeader.foreground'] ?? theme.palette.fg.default,

  /**
   * Background color of sticky scroll in the panel.
   */
  'panelStickyScroll.background': theme.ui['panelStickyScroll.background'] ?? theme.palette.bg.workbench,

  /**
   * Border color of sticky scroll in the panel.
   */
  'panelStickyScroll.border': theme.ui['panelStickyScroll.border'] ?? theme.palette.border.faint,

  /**
   * Shadow color of sticky scroll in the panel.
   */
  'panelStickyScroll.shadow': theme.ui['panelStickyScroll.shadow'] ?? theme.palette.shadow.sm,

  /**
   * Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelSectionHeader.border': theme.ui['panelSectionHeader.border'] ?? theme.palette.border.faint,

  /**
   * Output view background color.
   */
  'outputView.background': theme.ui['outputView.background'] ?? theme.palette.bg.workbench,

  /**
   * Output view sticky scroll background color.
   */
  'outputViewStickyScroll.background': theme.ui['outputViewStickyScroll.background'] ?? theme.palette.bg.workbench,

});

export type PanelKey = keyof ReturnType<typeof panel>;
