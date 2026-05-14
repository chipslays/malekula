import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const notebook = (theme: Theme) => ({

  /**
   * Notebook background color.
   */
  'notebook.editorBackground': theme.ui['notebook.editorBackground'] ?? theme.palette.bg.editor,

  /**
   * The border color for notebook cells.
   */
  'notebook.cellBorderColor': theme.ui['notebook.cellBorderColor'] ?? theme.palette.border.default,

  /**
   * The background color of a cell when the cell is hovered.
   */
  'notebook.cellHoverBackground': theme.ui['notebook.cellHoverBackground'] ?? theme.palette.bg.workbench,

  /**
   * The color of the notebook cell insertion indicator.
   */
  'notebook.cellInsertionIndicator': theme.ui['notebook.cellInsertionIndicator'] ?? theme.palette.border.focus,

  /**
   * The background color of notebook cell status bar items.
   */
  'notebook.cellStatusBarItemHoverBackground': theme.ui['notebook.cellStatusBarItemHoverBackground'] ?? theme.palette.bg.hover,

  /**
   * The color of the separator in the cell bottom toolbar
   */
  'notebook.cellToolbarSeparator': theme.ui['notebook.cellToolbarSeparator'] ?? theme.palette.border.faint,

  /**
   * The color of the notebook cell editor background
   */
  'notebook.cellEditorBackground': theme.ui['notebook.cellEditorBackground'] ?? theme.palette.bg.editor,

  /**
   * The background color of a cell when the cell is focused.
   */
  'notebook.focusedCellBackground': theme.ui['notebook.focusedCellBackground'] ?? theme.palette.bg.workbench,

  /**
   * The color of the cell's focus indicator borders when the cell is focused.
   */
  'notebook.focusedCellBorder': theme.ui['notebook.focusedCellBorder'] ?? theme.palette.border.focus,

  /**
   * The color of the notebook cell editor border.
   */
  'notebook.focusedEditorBorder': theme.ui['notebook.focusedEditorBorder'] ?? theme.palette.border.focus,

  /**
   * The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor.
   */
  'notebook.inactiveFocusedCellBorder': theme.ui['notebook.inactiveFocusedCellBorder'] ?? theme.palette.border.default,

  /**
   * The color of the cell's borders when multiple cells are selected.
   */
  'notebook.inactiveSelectedCellBorder': theme.ui['notebook.inactiveSelectedCellBorder'] ?? theme.palette.border.faint,

  /**
   * The Color of the notebook output container background.
   */
  'notebook.outputContainerBackgroundColor': theme.ui['notebook.outputContainerBackgroundColor'] ?? theme.palette.bg.workbench,

  /**
   * The border color of the notebook output container.
   */
  'notebook.outputContainerBorderColor': theme.ui['notebook.outputContainerBorderColor'] ?? theme.palette.border.faint,

  /**
   * The background color of a cell when the cell is selected.
   */
  'notebook.selectedCellBackground': theme.ui['notebook.selectedCellBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * The color of the cell's top and bottom border when the cell is selected but not focused.
   */
  'notebook.selectedCellBorder': theme.ui['notebook.selectedCellBorder'] ?? theme.palette.border.default,

  /**
   * Background color of highlighted cell
   */
  'notebook.symbolHighlightBackground': theme.ui['notebook.symbolHighlightBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Notebook scrollbar slider background color when clicked on.
   */
  'notebookScrollbarSlider.activeBackground': theme.ui['notebookScrollbarSlider.activeBackground'] ?? theme.palette.scrollbar.thumbHover,

  /**
   * Notebook scrollbar slider background color.
   */
  'notebookScrollbarSlider.background': theme.ui['notebookScrollbarSlider.background'] ?? theme.palette.scrollbar.thumb,

  /**
   * Notebook scrollbar slider background color when hovering.
   */
  'notebookScrollbarSlider.hoverBackground': theme.ui['notebookScrollbarSlider.hoverBackground'] ?? theme.palette.scrollbar.thumbHover,

  /**
   * The error icon color of notebook cells in the cell status bar.
   */
  'notebookStatusErrorIcon.foreground': theme.ui['notebookStatusErrorIcon.foreground'] ?? theme.palette.state.error.fg,

  /**
   * The running icon color of notebook cells in the cell status bar.
   */
  'notebookStatusRunningIcon.foreground': theme.ui['notebookStatusRunningIcon.foreground'] ?? theme.colors.blue,

  /**
   * The success icon color of notebook cells in the cell status bar.
   */
  'notebookStatusSuccessIcon.foreground': theme.ui['notebookStatusSuccessIcon.foreground'] ?? theme.palette.state.success.fg,

  /**
   * The color of the running cell decoration in the notebook editor overview ruler.
   */
  'notebookEditorOverviewRuler.runningCellForeground': theme.ui['notebookEditorOverviewRuler.runningCellForeground'] ?? theme.colors.blue,

});

export type NotebookKey = keyof ReturnType<typeof notebook>;
