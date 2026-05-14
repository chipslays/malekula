import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const buttonControl = (theme: Theme) => ({

  /**
   * Button background color.
   */
  'button.background': theme.ui['button.background'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Button foreground color.
   */
  'button.foreground': theme.ui['button.foreground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Button border color.
   */
  'button.border': theme.ui['button.border'] ?? theme.palette.ctrl.primary.border,

  /**
   * Button separator color.
   */
  'button.separator': theme.ui['button.separator'] ?? theme.palette.border.default,

  /**
   * Button background color when hovering.
   */
  'button.hoverBackground': theme.ui['button.hoverBackground'] ?? theme.palette.ctrl.primary.bgHover,

  /**
   * Secondary button foreground color.
   */
  'button.secondaryForeground': theme.ui['button.secondaryForeground'] ?? theme.palette.ctrl.secondary.fg,

  /**
   * Secondary button background color.
   */
  'button.secondaryBackground': theme.ui['button.secondaryBackground'] ?? theme.palette.ctrl.secondary.bg,

  /**
   * Secondary button background color when hovering.
   */
  'button.secondaryHoverBackground': theme.ui['button.secondaryHoverBackground'] ?? theme.palette.ctrl.secondary.bgHover,

  /**
   * Secondary button border color.
   */
  'button.secondaryBorder': theme.ui['button.secondaryBorder'] ?? theme.palette.ctrl.secondary.border,

  /**
   * Background color of checkbox widget.
   */
  'checkbox.background': theme.ui['checkbox.background'] ?? theme.palette.input.bg,

  /**
   * Foreground color of checkbox widget.
   */
  'checkbox.foreground': theme.ui['checkbox.foreground'] ?? theme.palette.fg.default,

  /**
   * Background of a disabled checkbox.
   */
  'checkbox.disabled.background': theme.ui['checkbox.disabled.background'] ?? theme.palette.input.bgDisabled,

  /**
   * Foreground of a disabled checkbox.
   */
  'checkbox.disabled.foreground': theme.ui['checkbox.disabled.foreground'] ?? theme.palette.fg.disabled,

  /**
   * Border color of checkbox widget.
   */
  'checkbox.border': theme.ui['checkbox.border'] ?? theme.palette.border.default,

  /**
   * Background color of checkbox widget when the element it's in is selected.
   */
  'checkbox.selectBackground': theme.ui['checkbox.selectBackground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Border color of checkbox widget when the element it's in is selected.
   */
  'checkbox.selectBorder': theme.ui['checkbox.selectBorder'] ?? theme.palette.border.focus,

  /**
   * Foreground color of active radio option.
   */
  'radio.activeForeground': theme.ui['radio.activeForeground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Background color of active radio option.
   */
  'radio.activeBackground': theme.ui['radio.activeBackground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Border color of the active radio option.
   */
  'radio.activeBorder': theme.ui['radio.activeBorder'] ?? theme.palette.border.focus,

  /**
   * Foreground color of inactive radio option.
   */
  'radio.inactiveForeground': theme.ui['radio.inactiveForeground'] ?? theme.palette.fg.subtle,

  /**
   * Background color of inactive radio option.
   */
  'radio.inactiveBackground': theme.ui['radio.inactiveBackground'] ?? theme.palette.input.bg,

  /**
   * Border color of the inactive radio option.
   */
  'radio.inactiveBorder': theme.ui['radio.inactiveBorder'] ?? theme.palette.border.default,

  /**
   * Background color of inactive active radio option when hovering.
   */
  'radio.inactiveHoverBackground': theme.ui['radio.inactiveHoverBackground'] ?? theme.palette.bg.hover,

});

export type ButtonControlKey = keyof ReturnType<typeof buttonControl>;
