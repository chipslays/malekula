import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const gauge = (theme: Theme) => ({

  /**
   * Gauge background color.
   */
  'gauge.background': theme.ui['gauge.background'] ?? theme.palette.bg.workbench,

  /**
   * Gauge foreground color.
   */
  'gauge.foreground': theme.ui['gauge.foreground'] ?? theme.palette.fg.default,

  /**
   * Gauge border color.
   */
  'gauge.border': theme.ui['gauge.border'] ?? theme.palette.border.default,

  /**
   * Gauge warning background color.
   */
  'gauge.warningBackground': theme.ui['gauge.warningBackground'] ?? theme.palette.state.warning.bg,

  /**
   * Gauge warning foreground color.
   */
  'gauge.warningForeground': theme.ui['gauge.warningForeground'] ?? theme.palette.state.warning.fg,

  /**
   * Gauge error background color.
   */
  'gauge.errorBackground': theme.ui['gauge.errorBackground'] ?? theme.palette.state.error.bg,

  /**
   * Gauge error foreground color.
   */
  'gauge.errorForeground': theme.ui['gauge.errorForeground'] ?? theme.palette.state.error.fg,

});

export type GaugeKey = keyof ReturnType<typeof gauge>;
