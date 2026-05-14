import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const inputControl = (theme: Theme) => ({

  /**
   * Input box background.
   */
  'input.background': theme.ui['input.background'] ?? theme.palette.input.bg,

  /**
   * Input box border.
   */
  'input.border': theme.ui['input.border'] ?? theme.palette.border.input,

  /**
   * Input box foreground.
   */
  'input.foreground': theme.ui['input.foreground'] ?? theme.palette.input.fg,

  /**
   * Input box foreground color for placeholder text.
   */
  'input.placeholderForeground': theme.ui['input.placeholderForeground'] ?? theme.palette.input.placeholder,

  /**
   * Background color of activated options in input fields.
   */
  'inputOption.activeBackground': theme.ui['inputOption.activeBackground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Border color of activated options in input fields.
   */
  'inputOption.activeBorder': theme.ui['inputOption.activeBorder'] ?? theme.palette.border.focus,

  /**
   * Foreground color of activated options in input fields.
   */
  'inputOption.activeForeground': theme.ui['inputOption.activeForeground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Background color of activated options in input fields.
   */
  'inputOption.hoverBackground': theme.ui['inputOption.hoverBackground'] ?? theme.palette.bg.hover,

  /**
   * Input validation background color for error severity.
   */
  'inputValidation.errorBackground': theme.ui['inputValidation.errorBackground'] ?? theme.palette.state.error.bg,

  /**
   * Input validation foreground color for error severity.
   */
  'inputValidation.errorForeground': theme.ui['inputValidation.errorForeground'] ?? theme.palette.state.error.fg,

  /**
   * Input validation border color for error severity.
   */
  'inputValidation.errorBorder': theme.ui['inputValidation.errorBorder'] ?? theme.palette.state.error.border,

  /**
   * Input validation background color for information severity.
   */
  'inputValidation.infoBackground': theme.ui['inputValidation.infoBackground'] ?? theme.palette.state.info.bg,

  /**
   * Input validation foreground color for information severity.
   */
  'inputValidation.infoForeground': theme.ui['inputValidation.infoForeground'] ?? theme.palette.state.info.fg,

  /**
   * Input validation border color for information severity.
   */
  'inputValidation.infoBorder': theme.ui['inputValidation.infoBorder'] ?? theme.palette.state.info.border,

  /**
   * Input validation background color for information warning.
   */
  'inputValidation.warningBackground': theme.ui['inputValidation.warningBackground'] ?? theme.palette.state.warning.bg,

  /**
   * Input validation foreground color for warning severity.
   */
  'inputValidation.warningForeground': theme.ui['inputValidation.warningForeground'] ?? theme.palette.state.warning.fg,

  /**
   * Input validation border color for warning severity.
   */
  'inputValidation.warningBorder': theme.ui['inputValidation.warningBorder'] ?? theme.palette.state.warning.border,

});

export type InputControlKey = keyof ReturnType<typeof inputControl>;
