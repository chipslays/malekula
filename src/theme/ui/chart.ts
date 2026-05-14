import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const chart = (theme: Theme) => ({

  /**
   * Contrast color for text in charts.
   */
  'charts.foreground': theme.ui['charts.foreground'] ?? theme.palette.fg.default,

  /**
   * Color for lines in charts.
   */
  'charts.lines': theme.ui['charts.lines'] ?? theme.palette.border.default,

  /**
   * Color for red elements in charts.
   */
  'charts.red': theme.ui['charts.red'] ?? theme.colors.red,

  /**
   * Color for blue elements in charts.
   */
  'charts.blue': theme.ui['charts.blue'] ?? theme.colors.blue,

  /**
   * Color for yellow elements in charts.
   */
  'charts.yellow': theme.ui['charts.yellow'] ?? theme.colors.yellow,

  /**
   * Color for orange elements in charts.
   */
  'charts.orange': theme.ui['charts.orange'] ?? theme.colors.orange,

  /**
   * Color for green elements in charts.
   */
  'charts.green': theme.ui['charts.green'] ?? theme.colors.green,

  /**
   * Color for purple elements in charts.
   */
  'charts.purple': theme.ui['charts.purple'] ?? theme.colors.purple,

  /**
   * Line color for the chart.
   */
  'chart.line': theme.ui['chart.line'] ?? theme.palette.border.default,

  /**
   * Axis color for the chart.
   */
  'chart.axis': theme.ui['chart.axis'] ?? theme.palette.border.faint,

  /**
   * Guide line for the chart.
   */
  'chart.guide': theme.ui['chart.guide'] ?? theme.palette.border.faint,

});

export type ChartKey = keyof ReturnType<typeof chart>;
