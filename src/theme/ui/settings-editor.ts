import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const settingsEditor = (theme: Theme) => ({

  /**
   * The foreground color for a section header or active title.
   */
  'settings.headerForeground': theme.ui['settings.headerForeground'] ?? theme.palette.fg.default,

  /**
   * The line that indicates a modified setting.
   */
  'settings.modifiedItemIndicator': theme.ui['settings.modifiedItemIndicator'] ?? theme.colors.blue,

  /**
   * Dropdown background.
   */
  'settings.dropdownBackground': theme.ui['settings.dropdownBackground'] ?? theme.palette.bg.overlay,

  /**
   * Dropdown foreground.
   */
  'settings.dropdownForeground': theme.ui['settings.dropdownForeground'] ?? theme.palette.fg.default,

  /**
   * Dropdown border.
   */
  'settings.dropdownBorder': theme.ui['settings.dropdownBorder'] ?? theme.palette.border.default,

  /**
   * Dropdown list border.
   */
  'settings.dropdownListBorder': theme.ui['settings.dropdownListBorder'] ?? theme.palette.border.default,

  /**
   * Checkbox background.
   */
  'settings.checkboxBackground': theme.ui['settings.checkboxBackground'] ?? theme.palette.input.bg,

  /**
   * Checkbox foreground.
   */
  'settings.checkboxForeground': theme.ui['settings.checkboxForeground'] ?? theme.palette.fg.default,

  /**
   * Checkbox border.
   */
  'settings.checkboxBorder': theme.ui['settings.checkboxBorder'] ?? theme.palette.border.default,

  /**
   * The background color of a settings row when hovered.
   */
  'settings.rowHoverBackground': theme.ui['settings.rowHoverBackground'] ?? theme.palette.bg.hover,

  /**
   * Text input box background.
   */
  'settings.textInputBackground': theme.ui['settings.textInputBackground'] ?? theme.palette.input.bg,

  /**
   * Text input box foreground.
   */
  'settings.textInputForeground': theme.ui['settings.textInputForeground'] ?? theme.palette.input.fg,

  /**
   * Text input box border.
   */
  'settings.textInputBorder': theme.ui['settings.textInputBorder'] ?? theme.palette.border.input,

  /**
   * Number input box background.
   */
  'settings.numberInputBackground': theme.ui['settings.numberInputBackground'] ?? theme.palette.input.bg,

  /**
   * Number input box foreground.
   */
  'settings.numberInputForeground': theme.ui['settings.numberInputForeground'] ?? theme.palette.input.fg,

  /**
   * Number input box border.
   */
  'settings.numberInputBorder': theme.ui['settings.numberInputBorder'] ?? theme.palette.border.input,

  /**
   * Background color of a focused setting row.
   */
  'settings.focusedRowBackground': theme.ui['settings.focusedRowBackground'] ?? theme.palette.bg.workbench,

  /**
   * The color of the row's top and bottom border when the row is focused.
   */
  'settings.focusedRowBorder': theme.ui['settings.focusedRowBorder'] ?? theme.palette.border.focus,

  /**
   * The color of the header container border.
   */
  'settings.headerBorder': theme.ui['settings.headerBorder'] ?? theme.palette.border.faint,

  /**
   * The color of the Settings editor splitview sash border.
   */
  'settings.sashBorder': theme.ui['settings.sashBorder'] ?? theme.palette.border.faint,

  /**
   * The foreground color for a section header or hovered title.
   */
  'settings.settingsHeaderHoverForeground': theme.ui['settings.settingsHeaderHoverForeground'] ?? theme.palette.fg.default,

});

export type SettingsEditorKey = keyof ReturnType<typeof settingsEditor>;
